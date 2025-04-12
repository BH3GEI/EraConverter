import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  distDir: 'docs',
  basePath: '/EraConverter',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
