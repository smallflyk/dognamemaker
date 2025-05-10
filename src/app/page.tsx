import type { Metadata } from 'next';
import HeroSection from "@/components/HeroSection";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import NameChecker from "@/components/NameChecker";
import FeaturesSection from "@/components/FeaturesSection";
import PopularNamesSection from "@/components/PopularNamesSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import CTASection from "@/components/CTASection";
import Script from 'next/script';

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || 'https://www.dognamechecker.pro/'; // 请将 'https://www.yourdomain.com' 替换为您的实际域名，或设置 NEXT_PUBLIC_BASE_URL 环境变量

export const metadata: Metadata = {
  title: "Dog Name Checker - Find Your Perfect Canine Name",
  description: "Choose the ideal name for your dog with our free name checker tool. Analyze popularity, gender fit, and breed compatibility.",
  keywords: ['dog name', 'dog name checker', 'pet name', 'dog naming tool', 'puppy name', 'dog name ideas', 'name your dog'],
  alternates: {
    canonical: BASE_URL,
  },
};

export default function Home() {
  return (
    <main>
      <Script id="schema-jsonld" type="application/ld+json" dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'WebApplication',
          'name': 'Dog Name Checker',
          'url': BASE_URL,
          'description': 'An advanced tool to help dog owners find the perfect name for their canine companion by analyzing popularity, gender fit, and breed compatibility.',
          'applicationCategory': 'LifestyleApplication',
          'offers': {
            '@type': 'Offer',
            'price': '0',
            'priceCurrency': 'USD'
          },
          'operatingSystem': 'Web browser',
          'author': {
            '@type': 'Organization',
            'name': 'Dog Name Checker',
            'url': BASE_URL
          }
        })
      }} />
      
      <Header />
      
      <HeroSection />
      
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <NameChecker />
        </div>
      </section>
      
      <FeaturesSection />
      
      <section className="section bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Professional Dog Name Check Service</h2>
            <p className="text-dark-gray max-w-3xl mx-auto">
              Our dog name detector uses advanced algorithms to analyze thousands of dog names and provide meaningful insights.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-primary text-3xl font-bold">1</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">Comprehensive Analysis</h3>
              <p className="text-dark-gray">
                Each dog name check includes popularity rankings, gender suitability, and breed compatibility assessments.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-primary text-3xl font-bold">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">Easy to Use</h3>
              <p className="text-dark-gray">
                Simply enter your preferred dog name, and our dog name checker will instantly provide detailed results.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-primary text-3xl font-bold">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">Data-Driven Results</h3>
              <p className="text-dark-gray">
                Our dog or human name checker uses extensive databases to ensure accurate and helpful recommendations.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      <PopularNamesSection />
      
      <section className="section bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Choose the Perfect Name for Your Dog</h2>
            <p className="text-dark-gray max-w-3xl mx-auto">
              Whether you're naming a new puppy or considering a name change, our dog name detector provides the insights you need.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-light-gray dark:bg-gray-800 p-8 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Gender Appropriate</h3>
              <p className="text-dark-gray mb-4">
                Discover if your chosen name is traditionally used for male or female dogs with our specialized dog name check.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                  Analyze gender associations of any name
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                  Find names that match your dog's personality
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                  Get suggestions for alternatives if needed
                </li>
              </ul>
            </div>
            
            <div className="bg-light-gray dark:bg-gray-800 p-8 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Avoid Common Mistakes</h3>
              <p className="text-dark-gray mb-4">
                Our dog or human name checker helps prevent choosing names that might be confusing or inappropriate.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                  Check if a name is too common at the dog park
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                  Avoid names that sound too similar to commands
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                  Find names that are easy for dogs to recognize
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      
      <TestimonialsSection />
      
      <CTASection />
      
      <Footer />
    </main>
  );
}
