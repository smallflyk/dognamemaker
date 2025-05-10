import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// 这个中间件将处理所有请求
export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // 处理 robots.txt 请求
  if (pathname === '/robots.txt') {
    const robotsTxt = `User-agent: *
Allow: /
Sitemap: https://www.dognamechecker.pro/sitemap.xml`;

    return new NextResponse(robotsTxt, {
      headers: {
        'Content-Type': 'text/plain',
        'Cache-Control': 'no-cache, no-store, max-age=0, must-revalidate',
      },
    });
  }

  // 处理 sitemap.xml 请求
  if (pathname === '/sitemap.xml') {
    const today = new Date().toISOString().split('T')[0];
    const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://www.dognamechecker.pro/</loc>
    <lastmod>${today}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>https://www.dognamechecker.pro/about</loc>
    <lastmod>${today}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://www.dognamechecker.pro/name-library</loc>
    <lastmod>${today}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://www.dognamechecker.pro/dog-naming-tips</loc>
    <lastmod>${today}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
</urlset>`;

    return new NextResponse(sitemapXml, {
      headers: {
        'Content-Type': 'application/xml',
        'Cache-Control': 'no-cache, no-store, max-age=0, must-revalidate',
      },
    });
  }

  // 对于其他请求，继续正常处理
  return NextResponse.next();
}

// 配置中间件匹配的路径
export const config = {
  matcher: ['/robots.txt', '/sitemap.xml'],
}; 