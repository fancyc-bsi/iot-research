import type { NextConfig } from "next";

const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: '/iot-research',
  assetPrefix: '/iot-research/',
}

export default nextConfig;
