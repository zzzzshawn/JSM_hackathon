import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
      {
        protocol: 'http',
        hostname: '**',
      },
    ],
  },
  async redirects() {
    return [
      {
        source: '/',        // Source path
        destination: '/home', // Destination path
        permanent: true,    // Permanent redirect (301)
      },
    ];
  },
};

export default nextConfig;
