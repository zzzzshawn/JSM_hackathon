import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: 'https', // Allow secure images
        hostname: '**',    // Match all hostnames
      },
      {
        protocol: 'http',  // Allow non-secure images (optional)
        hostname: '**',    // Match all hostnames
      },
    ],
  },
};

export default nextConfig;
