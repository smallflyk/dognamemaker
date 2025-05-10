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
  // 配置环境变量，优先使用环境变量中的URL
  env: {
    NEXT_PUBLIC_BASE_URL: process.env.NEXT_PUBLIC_BASE_URL || 'https://www.dognamechecker.pro'
  },
  // 由于我们现在使用middleware.ts处理robots.txt和sitemap.xml，
  // 所以不需要这些重写规则，但为了安全起见，保留它们作为备份
  async rewrites() {
    return [];
  },
  // 添加 headers 配置，确保正确的 content-type
  async headers() {
    return [
      {
        source: '/robots.txt',
        headers: [
          {
            key: 'Content-Type',
            value: 'text/plain',
          },
          {
            key: 'Cache-Control',
            value: 'public, max-age=0, must-revalidate',
          },
        ],
      },
      {
        source: '/sitemap.xml',
        headers: [
          {
            key: 'Content-Type',
            value: 'application/xml',
          },
          {
            key: 'Cache-Control',
            value: 'public, max-age=0, must-revalidate',
          },
        ],
      },
      {
        source: '/llms.txt',
        headers: [
          {
            key: 'Content-Type',
            value: 'text/plain',
          },
        ],
      },
      {
        source: '/llms-full.txt',
        headers: [
          {
            key: 'Content-Type',
            value: 'text/plain',
          },
        ],
      }
    ];
  },
};

export default nextConfig;
