export const dynamic = 'force-static';
export const revalidate = 3600; // 1小时重新验证一次

// 这个特殊的配置可以用来设置响应头
export async function generateMetadata() {
  return {
    other: {
      'Content-Type': 'text/plain',
    },
  };
}

export default function RobotsTxt() {
  return (
    <pre style={{ fontFamily: 'monospace' }}>
      {`User-agent: *
Allow: /
Sitemap: https://www.dognamechecker.pro/sitemap.xml`}
    </pre>
  );
} 