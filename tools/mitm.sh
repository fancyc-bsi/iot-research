#!/bin/bash

# Default config file location
CONFIG_FILE="/etc/mitmrouter/router.conf"

# Default configuration values
declare -A CONFIG=(
    [BR_IFACE]="br0"
    [WAN_IFACE]="FIXME"
    [LAN_IFACE]="FIXME"
    [WIFI_IFACE]="wlan0"
    [WIFI_SSID]="FIXME"
    [WIFI_PASSWORD]="FIXME"
    [LAN_IP]="192.168.200.1"
    [LAN_SUBNET]="255.255.255.0"
    [LAN_DHCP_START]="192.168.200.10"
    [LAN_DHCP_END]="192.168.200.100"
    [LAN_DNS_SERVER]="1.1.1.1"
    [PROXY_PORT]="8080"
    [HTTPS_PROXY_PORT]="8081"
    [PROXY_HTTP_PORTS]="80,8080"
    [PROXY_HTTPS_PORTS]="443"
)

DNSMASQ_CONF="tmp_dnsmasq.conf"
HOSTAPD_CONF="tmp_hostapd.conf"

# Load configuration if exists
if [ -f "$CONFIG_FILE" ]; then
    source "$CONFIG_FILE"
fi

# Function to stop services and reset interfaces
cleanup_network() {
    echo "== Stopping router services"
    sudo rfkill unblock wifi
    sudo killall wpa_supplicant
    sudo killall dnsmasq

    echo "== Resetting network interfaces"
    for iface in "${CONFIG[LAN_IFACE]}" "${CONFIG[BR_IFACE]}" "${CONFIG[WIFI_IFACE]}"; do
        sudo ifconfig "$iface" 0.0.0.0
        sudo ifconfig "$iface" down
    done
    sudo brctl delbr "${CONFIG[BR_IFACE]}" 2>/dev/null
}

# Function to create config files
create_config_files() {
    # Create dnsmasq config
    cat > "$DNSMASQ_CONF" << EOF
interface=${CONFIG[BR_IFACE]}
dhcp-range=${CONFIG[LAN_DHCP_START]},${CONFIG[LAN_DHCP_END]},${CONFIG[LAN_SUBNET]},12h
dhcp-option=6,${CONFIG[LAN_DNS_SERVER]}
EOF

    # Create hostapd config
    cat > "$HOSTAPD_CONF" << EOF
interface=${CONFIG[WIFI_IFACE]}
bridge=${CONFIG[BR_IFACE]}
ssid=${CONFIG[WIFI_SSID]}
country_code=US
hw_mode=g
channel=11
wpa=2
wpa_passphrase=${CONFIG[WIFI_PASSWORD]}
wpa_key_mgmt=WPA-PSK
wpa_pairwise=CCMP
ieee80211n=1
ieee80211w=1
EOF
}

# Function to setup network
setup_network() {
    local mode=$1

    echo "== Bringing up interfaces and bridge"
    if [ "$mode" = "w" ]; then
        sudo ifconfig "${CONFIG[WIFI_IFACE]}" up
    elif [ "$mode" = "e" ]; then
        sudo ifconfig "${CONFIG[LAN_IFACE]}" up
    fi

    sudo ifconfig "${CONFIG[WAN_IFACE]}" up
    sudo brctl addbr "${CONFIG[BR_IFACE]}"

    if [ "$mode" = "e" ]; then
        sudo brctl addif "${CONFIG[BR_IFACE]}" "${CONFIG[LAN_IFACE]}"
    fi

    sudo ifconfig "${CONFIG[BR_IFACE]}" up
}


setup_iptables() {
    echo "== Setting up iptables"
    sudo iptables --flush
    sudo iptables -t nat --flush
    sudo iptables -t nat -A POSTROUTING -o "${CONFIG[WAN_IFACE]}" -j MASQUERADE
    sudo iptables -A FORWARD -m conntrack --ctstate RELATED,ESTABLISHED -j ACCEPT
    sudo iptables -A FORWARD -i "${CONFIG[BR_IFACE]}" -o "${CONFIG[WAN_IFACE]}" -j ACCEPT
    # Setup proxy redirections
    # IFS=',' read -ra HTTP_PORTS <<< "${CONFIG[PROXY_HTTP_PORTS]}"
    # for port in "${HTTP_PORTS[@]}"; do
    #     sudo iptables -t nat -A PREROUTING -i "${CONFIG[BR_IFACE]}" -p tcp --dport "$port" \
    #         -j REDIRECT --to-port "${CONFIG[PROXY_PORT]}"
    # done
    # IFS=',' read -ra HTTPS_PORTS <<< "${CONFIG[PROXY_HTTPS_PORTS]}"
    # for port in "${HTTPS_PORTS[@]}"; do
    #     # Add rule for all hosts except 192.168.200.42
    #    sudo iptables -t nat -A PREROUTING -i "${CONFIG[BR_IFACE]}" -p tcp --dport "$port" \
    #        ! -s 192.168.200.42 -j REDIRECT --to-port "${CONFIG[HTTPS_PROXY_PORT]}"
    # done
}


main() {
    if [ "$#" -ne 2 ] || [[ ! "$2" =~ ^(up|down)$ ]] || [[ ! "$1" =~ ^[we]$ ]]; then
        echo "Usage: $0 <w|e> <up|down>"
        echo "  w = WiFi mode"
        echo "  e = Ethernet mode"
        exit 1
    fi

    local mode="$1"
    local action="$2"

    cd "$(dirname "${BASH_SOURCE[0]}")" || exit 1
    cleanup_network

    if [ "$action" = "up" ]; then
        create_config_files
        setup_network "$mode"
        setup_iptables

        echo "== Setting static IP on bridge interface"
        sudo ifconfig "${CONFIG[BR_IFACE]}" inet "${CONFIG[LAN_IP]}" netmask "${CONFIG[LAN_SUBNET]}"

        echo "== Starting dnsmasq"
        sudo dnsmasq -C "$DNSMASQ_CONF"

        if [ "$mode" = "w" ]; then
            echo "== Starting hostapd"
            sudo hostapd "$HOSTAPD_CONF"
        fi
    fi
}

main "$@"