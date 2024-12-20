#!/bin/bash

arm-linux-gnueabi-gcc file_monitor.c -o file_monitor \
    -Wall \
    -march=armv5t \
    -marm \
    -D_GNU_SOURCE \
    -static

file file_monitor
readelf -h file_monitor

if [ -d /output ]; then
    cp file_monitor /output/
fi