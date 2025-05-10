import { NextResponse } from 'next/server';

export async function GET() {
  const robotsTxt = `User-agent: *
Allow: /

Sitemap: https://www.dognamechecker.pro/sitemap.xml`;

  return new NextResponse(robotsTxt, {
    headers: {
      'Content-Type': 'text/plain',
      // 确保内容不被缓存，强制每次重新获取
      'Cache-Control': 'no-store, max-age=0',
    },
  });
} 