import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: '/iot-research',
  assetPrefix: '/iot-research/',
  // Add trailing slashes for consistent routing
  trailingSlash: true,
  // Disable server-side features since we're doing static export
};

export default nextConfig;