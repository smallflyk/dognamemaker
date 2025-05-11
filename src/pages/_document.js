import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  // 在客户端无法可靠地使用window.location，因为_document是在服务器端渲染的
  // 因此我们在客户端通过JavaScript修复canonical URL
  
  return (
    <Html lang="en">
      <Head>
        {/* 为首页添加脚本，确保canonical URL带有末尾斜杠 */}
        <script
          id="fix-canonical"
          dangerouslySetInnerHTML={{
            __html: `
            (function() {
              var links = document.getElementsByTagName('link');
              for (var i = 0; i < links.length; i++) {
                if (links[i].rel === 'canonical' && links[i].href === 'https://www.dognamechecker.pro') {
                  links[i].href = 'https://www.dognamechecker.pro/';
                }
              }
            })();
          `
          }}
          strategy="beforeInteractive"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
} 