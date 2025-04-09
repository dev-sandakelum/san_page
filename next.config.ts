import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */

  images: {
    domains: [
      "p16-sign-sg.tiktokcdn.com",
      "yt3.googleusercontent.com",
      "scontent.cdninstagram.com"
      
    ],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'scontent-*.cdninstagram.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
