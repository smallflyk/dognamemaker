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
    default: "Dog Name Checker - Smart Naming for Your Beloved Canine",
    template: "%s",
  },
  description: "The Dog Name Checker helps you choose the perfect name for your furry friend. Analyze popularity, gender suitability, breed compatibility, and get expert naming advice.",
  keywords: ["dog name checker", "dog name finder", "pet name tool", "dog name ideas", "name your dog", "puppy names", "dog name popularity", "dog name compatibility"],
  robots: "index, follow",
  openGraph: {
    title: "Dog Name Checker - The Ultimate Tool for Naming Your Dog",
    description: "Our Dog Name Checker helps you find the perfect name for your canine companion. Check popularity, gender fit, and breed compatibility for any dog name.",
    url: "https://www.dognamechecker.pro", // 更新为实际域名
    siteName: "Dog Name Checker",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dog Name Checker | Find the Perfect Name",
    description: "Use our Dog Name Checker to find the perfect name for your canine companion. Explore popular names, get naming tips, and ensure your chosen name is a great fit.",
  },
  alternates: {
    canonical: 'https://www.dognamechecker.pro', // 更新为完整URL
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
