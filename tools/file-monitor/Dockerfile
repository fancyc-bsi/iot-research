FROM debian:bullseye-slim

# Install necessary packages
RUN apt-get update && apt-get install -y \
    build-essential \
    gcc-arm-linux-gnueabi \
    libc6-dev-armel-cross \
    binutils-arm-linux-gnueabi \
    make \
    file \
    binutils \
    && apt-get clean

WORKDIR /build

COPY file_monitor.c .
COPY compile.sh .
RUN chmod +x compile.sh

CMD ["./compile.sh"]