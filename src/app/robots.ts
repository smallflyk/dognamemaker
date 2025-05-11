import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://www.dognamechecker.pro';
  // 确保baseUrl不带斜杠，用于拼接时添加
  const baseUrlNoSlash = baseUrl.endsWith('/') ? baseUrl.slice(0, -1) : baseUrl;
  
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/api/', '/_next/'],
    },
    sitemap: `${baseUrlNoSlash}/sitemap.xml`,
  };
} 