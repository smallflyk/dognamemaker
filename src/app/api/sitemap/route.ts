import { NextResponse } from 'next/server';

export async function GET() {
  const today = new Date().toISOString().split('T')[0]; // 格式如 2023-05-10
  
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
      // 确保内容不被缓存，强制每次重新获取
      'Cache-Control': 'no-store, max-age=0',
    },
  });
} 