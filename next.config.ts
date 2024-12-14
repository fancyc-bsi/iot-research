import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: '/iot-research',
  assetPrefix: '/iot-research/',
};

export default nextConfig;