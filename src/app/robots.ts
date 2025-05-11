import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://www.dognamechecker.pro';
  
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: [
          '/api/',
          '/_next/',
          '/admin/',
          '/user-content/',
          '/search',
          '/preview/',
          '/test-*'
        ],
      },
      {
        // AI爬虫特殊规则
        userAgent: [
          'GPTBot',
          'Claude-Web',
          'Anthropic-AI',
          'PerplexityBot',
          'GoogleOther',
          'DuckAssistBot'
        ],
        allow: [
          '/',
          '/about/',
          '/name-library/',
          '/dog-naming-tips/',
          '/llms.txt',
          '/llms-full.txt'
        ],
        disallow: [
          '/api/',
          '/_next/',
          '/admin/',
          '/user-content/',
          '/search',
          '/preview/',
          '/test-*'
        ],
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
  };
} 