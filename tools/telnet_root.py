import serial
import time
import logging
import re
import sys
import argparse
from ftplib import FTP

# Custom logging formatter
class CustomFormatter(logging.Formatter):
    def format(self, record):
        symbols = {
            logging.INFO: '[-]',     # Info messages
            logging.ERROR: '[!]',    # Error messages
            logging.SUCCESS: '[+]',  # Success messages (custom level)
            logging.WARNING: '[!]',  # Warning messages
            logging.DEBUG: '[-]'     # Debug messages
        }
        symbol = symbols.get(record.levelno, '[-]')
        return f"{symbol} {record.getMessage()}"

# Add custom logging level for success messages
logging.SUCCESS = 25
logging.addLevelName(logging.SUCCESS, 'SUCCESS')

def success(self, message, *args, **kwargs):
    if self.isEnabledFor(logging.SUCCESS):
        self._log(logging.SUCCESS, message, args, **kwargs)

logging.Logger.success = success

class IoTCameraDebugger:
    def __init__(self, port="/dev/ttyUSB0", baudrate=115200, debug=False):
        level = logging.DEBUG if debug else logging.INFO
        logging.basicConfig(level=level)

        handler = logging.StreamHandler()
        handler.setFormatter(CustomFormatter())
        logging.getLogger().handlers = [handler]

        self.log = logging.getLogger('IoTDebugger')

        try:
            self.ser = serial.Serial(port, baudrate, timeout=1)
            self.log.success(f"Connected to {port} at {baudrate} baud")
        except serial.SerialException as e:
            self.log.error(f"Failed to connect to {port}: {e}")
            sys.exit(1)

    def send_command(self, cmd, wait_time=1):
        """Send a command and return the response"""
        self.log.debug(f"Sending command: {cmd}")
        self.ser.write(f"{cmd}\n".encode())
        time.sleep(wait_time)
        response = ""
        while self.ser.in_waiting:
            response += self.ser.read(self.ser.in_waiting).decode('utf-8', errors='ignore')
        return response.strip()

    def get_wlan0_ip(self):
        """Get IP address of wlan0 interface"""
        ip_output = self.send_command("ifconfig wlan0")
        ip_match = re.search(r'inet addr:(\d+\.\d+\.\d+\.\d+)', ip_output)
        return ip_match.group(1) if ip_match else None

    def upload_busybox(self, ip_address, busybox_path):
        """Upload busybox binary via FTP"""
        try:
            self.log.info(f"Attempting to upload busybox from {busybox_path}")

            # Connect to FTP server
            ftp = FTP(ip_address)
            ftp.login(user='root', passwd='123')

            # Upload the file
            with open(busybox_path, 'rb') as file:
                self.log.info("Uploading busybox...")
                ftp.storbinary(f'STOR /tmp/busybox', file)

            self.send_command("chmod +x /tmp/busybox")

            ftp.quit()
            self.log.success("Successfully uploaded and installed busybox at /tmp/busybox")
            return True

        except Exception as e:
            self.log.error(f"Failed to upload busybox: {e}")
            return False

    def change_root_password(self):
        """Change root password and ensure telnet is enabled"""
        self.log.info("Attempting to change root password...")

        # Send passwd command
        self.send_command("passwd root", wait_time=1)
        time.sleep(0.5)

        # Send first password attempt
        self.send_command("123", wait_time=1)
        time.sleep(1)  # Wait for "too short" warning

        # Send password again after warning
        self.send_command("123", wait_time=1)
        time.sleep(1)

        # Verify telnet is running
        telnet_running = "telnetd" in self.send_command("ps aux")
        if not telnet_running:
            self.log.info("Starting telnet service...")
            self.send_command("/usr/sbin/telnetd &")

        # Get and display IP address
        ip_address = self.get_wlan0_ip()
        if ip_address:
            self.log.success(f"\n{'='*50}\nTelnet access enabled:\nHost: {ip_address}\nUsername: root\nPassword: 123\n{'='*50}")
            return ip_address
        else:
            self.log.error("Could not determine IP address. Once connected, check device IP address for telnet access.")
            return None

    def find_and_kill_processes(self):
        """Find and terminate specific processes."""
        self.log.info("Checking running processes...")
        max_retries = 3

        # Retry mechanism for fetching ps output
        ps_output = None
        for attempt in range(max_retries):
            self.log.debug(f"Attempt {attempt + 1} to fetch ps output")
            ps_output = self.send_command("ps aux")
            if ps_output and len(ps_output.splitlines()) > 1:
                break
            time.sleep(1)

        if not ps_output:
            self.log.error("Failed to retrieve process list after multiple attempts.")
            return

        self.log.debug(f"ps aux output:\n{ps_output}")

        # Helper function to extract PID with process name matching
        def get_pid(process_name):
            for line in ps_output.splitlines():
                self.log.debug(f"Checking line: {line.strip()}")
                # Match the PID only if the process name appears in the command column
                match = re.search(r'^\s*\d+\s+\S+\s+\S+\s+.*?\b' + re.escape(process_name) + r'\b', line)
                if match:
                    pid_match = re.match(r'^\s*(\d+)', line)  # Extract PID from the start of the line
                    if pid_match:
                        return pid_match.group(1)
            return None

        # Find PIDs
        processes = {
            "anyka_service.sh": get_pid("anyka_service.sh"),
            "anyka_ipc": get_pid("anyka_ipc"),
        }

        # Kill found processes
        for name, pid in processes.items():
            if pid:
                self.log.success(f"Killing {name} (PID: {pid})")
                self.send_command(f"kill -9 {pid}")
            else:
                self.log.info(f"{name} not found running")




    def configure_wifi_interface(self):
        """Configure WiFi interface to managed mode"""
        self.log.info("Checking current WiFi mode...")
        iwconfig_output = self.send_command("iwconfig wlan0")

        if "Mode:Monitor" in iwconfig_output:
            self.log.info("WiFi is in Monitor mode, switching to Managed mode...")
            self.send_command("ip link set wlan0 down")
            time.sleep(1)
            self.send_command("iwconfig wlan0 mode managed")
            time.sleep(1)
            self.send_command("ip link set wlan0 up")
            time.sleep(2)

            # Verify the change
            new_mode = self.send_command("iwconfig wlan0")
            if "Mode:Managed" in new_mode:
                self.log.success("Successfully switched to Managed mode")
            else:
                self.log.error("Failed to switch to Managed mode")
        else:
            self.log.info("WiFi is already in Managed mode")

    def connect_to_wifi(self, ssid, password):
        """Connect to WiFi using the provided script"""
        self.log.info(f"Attempting to connect to WiFi network: {ssid}")
        self.send_command(f'/usr/sbin/wifi_connect.sh "{ssid}" "{password}"', wait_time=10)

        # Wait for IP address acquisition
        retries = 6  # Try for 30 seconds (6 * 5)
        while retries > 0:
            ip_address = self.get_wlan0_ip()
            if ip_address:
                self.log.success(f"Successfully connected to WiFi. IP: {ip_address}")
                return True
            retries -= 1
            time.sleep(5)

        self.log.error("Failed to obtain IP address on wlan0")
        return False

    def cleanup(self):
        """Clean up serial connection"""
        if hasattr(self, 'ser') and self.ser.is_open:
            self.ser.close()
            self.log.info("Serial connection closed")

def parse_arguments():
    parser = argparse.ArgumentParser(
        description='IoT Camera WiFi Debug Tool',
        formatter_class=argparse.RawDescriptionHelpFormatter,
        epilog="""
Examples:
    # Basic connection:
    %(prog)s -s "MyWiFi" -p "MyPassword"

    # Upload busybox after connection:
    %(prog)s -s "MyWiFi" -p "MyPassword" -b "/path/to/busybox"

    # Use specific serial port:
    %(prog)s -s "MyWiFi" -p "MyPassword" --port /dev/ttyUSB1

    # Enable debug logging:
    %(prog)s -s "MyWiFi" -p "MyPassword" --debug
        """
    )

    parser.add_argument('-s', '--ssid', required=True,
                        help='WiFi network SSID')
    parser.add_argument('-p', '--password', required=True,
                        help='WiFi network password')
    parser.add_argument('-b', '--busybox',
                        help='Path to busybox binary to upload')
    parser.add_argument('--port', default='/dev/ttyUSB0',
                        help='Serial port (default: /dev/ttyUSB0)')
    parser.add_argument('--baudrate', type=int, default=115200,
                        help='Serial baudrate (default: 115200)')
    parser.add_argument('--debug', action='store_true',
                        help='Enable debug logging')

    return parser.parse_args()

def main():
    args = parse_arguments()

    debugger = IoTCameraDebugger(
        port=args.port,
        baudrate=args.baudrate,
        debug=args.debug
    )

    try:
        # Execute each step
        debugger.find_and_kill_processes()
        time.sleep(2)  # Wait for processes to fully terminate

        debugger.configure_wifi_interface()
        time.sleep(2)  # Wait for interface changes to take effect

        if debugger.connect_to_wifi(args.ssid, args.password):
            time.sleep(5)  # Wait for WiFi connection to stabilize
            device_ip = debugger.change_root_password()

            if device_ip and args.busybox:
                time.sleep(2)  # Wait for telnet/ftp to be ready
                debugger.upload_busybox(device_ip, args.busybox)

    except Exception as e:
        logging.error(f"An error occurred: {e}")
        raise
    finally:
        debugger.cleanup()

if __name__ == "__main__":
    main()