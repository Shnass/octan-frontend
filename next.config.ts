import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [{
      protocol: 'https',
      hostname: 'images.octan.online',
      pathname: '/**',
    }]
  },
};

export default nextConfig;
