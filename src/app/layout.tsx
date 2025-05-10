import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from 'next/script';
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Dog Name Checker | Find the Perfect Name for Your Canine",
  description: "Check if your dog's name is perfect for them. Analyze popularity, gender suitability, and breed compatibility. Use our dog name checker to find the ideal name for your furry friend.",
  keywords: ["dog name checker", "dog name finder", "pet name tool", "dog name ideas", "name your dog", "puppy names", "dog name popularity", "dog name compatibility"],
  robots: "index, follow",
  openGraph: {
    title: "Dog Name Checker | The Ultimate Tool for Naming Your Dog",
    description: "Our dog name checker helps you find the perfect name for your canine companion. Check popularity, gender fit, and breed compatibility for any dog name.",
    url: "https://dognamecheck.com",
    siteName: "Dog Name Checker",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dog Name Checker | Find the Perfect Name",
    description: "Our dog name checker helps you find the perfect name for your canine companion.",
  },
  alternates: {
    canonical: 'https://www.dognamechecker.pro/',
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
