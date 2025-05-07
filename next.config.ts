import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    // 在生产构建中忽略ESLint错误
    ignoreDuringBuilds: true,
  },
  typescript: {
    // 在生产构建中忽略TypeScript错误
    ignoreBuildErrors: true,
  },
  images: {
    domains: ['images.unsplash.com'],
  },
};

export default nextConfig;
