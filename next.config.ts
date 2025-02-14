import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  webpack: (config) => {
    config.externals.push({
      'socket.io-client': 'socket.io-client',
    });
    return config;
  },
};

export default nextConfig;
