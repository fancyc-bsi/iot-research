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
  
  // Add this to modify the TypeScript settings if needed
  typescript: {
    // This will completely ignore TypeScript errors - use only if needed
    ignoreBuildErrors: true,
  },
};

export default nextConfig;