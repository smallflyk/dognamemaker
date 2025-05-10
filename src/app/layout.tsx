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

export const metadata: Metadata = {
  metadataBase: new URL('https://www.dognamechecker.pro'), // 更新为实际域名
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
    url: "https://www.dognamechecker.pro", // 更新为实际域名
    siteName: "Dog Name Checker",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://www.dognamechecker.pro/og-image.jpg", // 确保此图片存在于public目录
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
    images: ["https://www.dognamechecker.pro/og-image.jpg"], // 确保此图片存在于public目录
  },
  alternates: {
    canonical: 'https://www.dognamechecker.pro', // 更新为完整URL，不含末尾斜杠
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
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
