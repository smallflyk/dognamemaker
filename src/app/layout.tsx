import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from 'next/script';
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

// 确保基础URL格式统一，添加末尾斜杠，与Vercel配置保持一致
const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://www.dognamechecker.pro';
// 确保有末尾斜杠
const canonicalBaseUrl = baseUrl.endsWith('/') ? baseUrl : `${baseUrl}/`;

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl), // 使用基础URL，不含末尾斜杠
  title: {
    default: "Dog Name Checker - Find Your Perfect Canine Name",
    template: "%s",
  },
  description: "Find the perfect name for your dog with our smart name checker tool. Analyze popularity, gender fit, and breed compatibility to choose a name you'll both love.",
  keywords: ["dog name checker", "dog name finder", "pet name tool", "dog name ideas", "name your dog", "puppy names", "dog name popularity", "dog name compatibility"],
  robots: "index, follow",
  openGraph: {
    title: "Dog Name Checker - Find Your Perfect Canine Name",
    description: "Our Dog Name Checker helps you find the perfect name for your canine companion based on popularity, gender fit, and breed compatibility.",
    url: canonicalBaseUrl, // 确保带末尾斜杠
    siteName: "Dog Name Checker",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: `${baseUrl}/og-image.jpg`, // 使用不带斜杠的baseUrl加路径
        width: 1200,
        height: 630,
        alt: "Dog Name Checker - Find the perfect name for your dog",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@DogNameChecker", // 您的Twitter用户名
    title: "Dog Name Checker - Find Your Perfect Canine Name",
    description: "Find the perfect name for your dog with our smart name checker tool. Analyze popularity, gender fit, and breed compatibility for ideal results.",
    images: [`${baseUrl}/og-image.jpg`], // 使用不带斜杠的baseUrl加路径
  },
  alternates: {
    canonical: canonicalBaseUrl, // 确保首页canonical URL带末尾斜杠，与访问URL格式保持一致
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* 添加额外的脚本以确保canonical URL带末尾斜杠 */}
        <Script id="fix-canonical" strategy="beforeInteractive">
          {`
            (function() {
              var links = document.getElementsByTagName('link');
              for (var i = 0; i < links.length; i++) {
                if (links[i].rel === 'canonical' && links[i].href === 'https://www.dognamechecker.pro') {
                  links[i].href = 'https://www.dognamechecker.pro/';
                }
              }
            })();
          `}
        </Script>
      </head>
      <body className={`${inter.variable} antialiased`}>
        {children}
        
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-8H6HM4ZFD9"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-8H6HM4ZFD9');
          `}
        </Script>
      </body>
    </html>
  );
}
