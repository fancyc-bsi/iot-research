import serial
import sys
import re
import select
from typing import List, Pattern
from datetime import datetime
from colorama import init, Fore, Style

class SerialFilter:
    def __init__(self, port: str = "/dev/ttyUSB0", baudrate: int = 115200):
        self.port = port
        self.baudrate = baudrate
        self.buffer = ""
        self.ser = None
        self.last_prompt_time = None
        self.prompt_interval = 0.5
        self.last_input = None
        self.waiting_for_echo = False
        self.filter_patterns: List[Pattern] = self._compile_patterns([
            r'WIFI.*Channel',
            r'Exec Cmd:iwconfig.*channel',
            r'\[atbm_log\].*',
            r'IFI.*Channel'
        ])
        self.prompt_pattern = re.compile(r'(?:^|\n).*[#$>]\s*$')
        init()

    def _compile_patterns(self, patterns: List[str]) -> List[Pattern]:
        return [re.compile(pattern) for pattern in patterns]

    def _should_filter_line(self, line: str) -> bool:
        return any(pattern.search(line) for pattern in self.filter_patterns)

    def _format_prompt(self, timestamp: str) -> str:
        return f"{Fore.CYAN}┌─[{Fore.GREEN}{timestamp}{Fore.CYAN}]─[{Fore.YELLOW}{self.port}{Fore.CYAN}]\n└─▶ {Style.RESET_ALL}"

    def _should_add_prompt(self, line: str) -> bool:
        now = datetime.now()

        if self.prompt_pattern.search(line):
            self.last_prompt_time = now
            self.waiting_for_echo = False
            return True

        if self.last_prompt_time and (now - self.last_prompt_time).total_seconds() < self.prompt_interval:
            return False

        self.last_prompt_time = now
        return True

    def _process_buffer(self) -> None:
        while '\n' in self.buffer or '\r' in self.buffer:
            if '\r\n' in self.buffer:
                line, self.buffer = self.buffer.split('\r\n', 1)
            elif '\n' in self.buffer:
                line, self.buffer = self.buffer.split('\n', 1)
            elif '\r' in self.buffer:
                line, self.buffer = self.buffer.split('\r', 1)

            line = line.strip()
            if line and not self._should_filter_line(line):
                if self.waiting_for_echo:
                    if line == self.last_input:
                        self.waiting_for_echo = False
                        continue
                    elif self._format_prompt(datetime.now().strftime('%H:%M:%S.%f')[:-3]).strip() in line:
                        continue

                if self._should_add_prompt(line):
                    timestamp = datetime.now().strftime('%H:%M:%S.%f')[:-3]
                    sys.stdout.write('\r\n' + self._format_prompt(timestamp) + line)
                else:
                    sys.stdout.write('\r\n    ' + line)
                sys.stdout.flush()

    def _print_input_prompt(self) -> None:
        timestamp = datetime.now().strftime('%H:%M:%S.%f')[:-3]
        sys.stdout.write('\r' + self._format_prompt(timestamp))
        sys.stdout.flush()

    def _handle_user_input(self) -> None:
        if sys.stdin in select.select([sys.stdin], [], [], 0)[0]:
            input_line = sys.stdin.readline().strip()
            if input_line:
                self.last_input = input_line
                self.waiting_for_echo = True
                self.ser.write((input_line + '\r\n').encode())
                self.ser.flush()
                sys.stdout.write('\n')  # Move to next line after input
                sys.stdout.flush()

    def run(self) -> None:
        try:
            self.ser = serial.Serial(
                port=self.port,
                baudrate=self.baudrate,
                timeout=0.1,
                xonxoff=False,
                rtscts=False,
                dsrdtr=False
            )
            print(f"{Fore.GREEN}Connected to {self.port} at {self.baudrate} baud{Style.RESET_ALL}")
            print(f"{Fore.YELLOW}Filtering out WiFi channel hopping messages...{Style.RESET_ALL}")
            print(f"{Fore.CYAN}Press Ctrl+C to exit\n{Style.RESET_ALL}")

            # Print initial prompt
            self._print_input_prompt()

            while True:
                if self.ser.in_waiting:
                    chunk = self.ser.read(self.ser.in_waiting).decode('utf-8', errors='replace')
                    self.buffer += chunk
                    self._process_buffer()

                self._handle_user_input()

        except KeyboardInterrupt:
            print(f"\n{Fore.RED}Exiting...{Style.RESET_ALL}")
        except Exception as e:
            print(f"{Fore.RED}Error: {e}{Style.RESET_ALL}")
        finally:
            if self.ser and self.ser.is_open:
                self.ser.close()

def main():
    filter = SerialFilter()
    filter.run()

if __name__ == "__main__":
    main()