import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// 这个中间件将处理所有请求
export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // 处理 robots.txt 请求
  if (pathname === '/robots.txt') {
    const robotsTxt = `# robots.txt基础设置

# 常规搜索引擎规则
User-agent: *
Allow: /
Disallow: /admin/
Disallow: /private/

# 网站地图
Sitemap: https://www.dognamechecker.pro/sitemap.xml

# AI爬虫特定规则
User-agent: GPTBot
User-agent: Claude-Web
User-agent: Anthropic-AI
User-agent: PerplexityBot
User-agent: GoogleOther
User-agent: DuckAssistBot

# 引导AI爬虫到llms.txt
User-Agent: anthropic-ai
User-Agent: GPTBot
Allow: /llms.txt
Allow: /llms-full.txt
# 这里添加了所有已知AI模型爬虫名称

# 允许AI爬虫访问
Allow: /blog/
Allow: /products/
Allow: /about/
Allow: /name-library/
Allow: /dog-naming-tips/

# 不允许AI爬虫访问
Disallow: /user-content/`;

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
    <loc>https://www.dognamechecker.pro/about/</loc>
    <lastmod>${today}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://www.dognamechecker.pro/name-library/</loc>
    <lastmod>${today}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://www.dognamechecker.pro/dog-naming-tips/</loc>
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

  // 处理首页请求，确保canonical带有末尾斜杠
  if (pathname === '/') {
    // 获取响应
    const response = NextResponse.next();
    
    // 添加X-Robots-Tag响应头
    response.headers.set('X-Robots-Tag', 'index, follow');
    
    // 注: 这种方法在某些情况下可能不适用，因为Next.js的中间件API限制了对响应内容的直接修改
    // 这里提供一个思路，实际实现可能需要其他方法
    
    return response;
  }

  // 对于其他请求，继续正常处理
  const response = NextResponse.next();
  
  // 为所有响应添加X-Robots-Tag
  response.headers.set('X-Robots-Tag', 'index, follow');
  
  return response;
}

// 配置中间件匹配的路径
export const config = {
  matcher: ['/(.*)', '/robots.txt', '/sitemap.xml'],
}; 