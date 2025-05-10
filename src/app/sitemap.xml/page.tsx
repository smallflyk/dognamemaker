export const dynamic = 'force-static';
export const revalidate = 3600; // 1小时重新验证一次

// 设置响应头
export async function generateMetadata() {
  return {
    other: {
      'Content-Type': 'application/xml',
    },
  };
}

export default function SitemapXml() {
  const today = new Date().toISOString().split('T')[0]; // 格式如 2023-05-10
  
  return (
    <pre style={{ fontFamily: 'monospace' }}>
      {`<?xml version="1.0" encoding="UTF-8"?>
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
</urlset>`}
    </pre>
  );
} 