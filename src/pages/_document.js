import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  const isHomePage = typeof window !== 'undefined' && window.location.pathname === '/';
  const canonicalUrl = isHomePage 
    ? 'https://www.dognamechecker.pro/' 
    : 'https://www.dognamechecker.pro';
    
  return (
    <Html lang="en">
      <Head>
        {/* 自定义canonical标签，强制保留/移除末尾斜杠 */}
        {isHomePage && (
          <link 
            rel="canonical" 
            href="https://www.dognamechecker.pro/" 
            key="canonical" 
          />
        )}
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
} 