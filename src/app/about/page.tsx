import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";
import Link from "next/link";
import type { Metadata } from 'next';

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || 'https://www.dognamechecker.pro/'; // 请将 'https://www.yourdomain.com' 替换为您的实际域名，或设置 NEXT_PUBLIC_BASE_URL 环境变量

export const metadata: Metadata = {
  title: "About Dog Name Checker - Our Story & Mission",
  description: "Learn about our mission to help pet owners find perfect dog names. Discover our story, our name analysis tool, and our commitment to your dog.",
  keywords: ['dog names', 'pet naming', 'about us', 'project introduction', 'dog naming tool', 'Dog Name Checker'],
  alternates: {
    canonical: `${BASE_URL}about`,
  },
};

export default function AboutPage() {
  return (
    <main>
      <Header />
      
      <section className="pt-32 pb-16 bg-gradient-to-b from-primary/10 to-white dark:from-primary/5 dark:to-gray-900">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">About Dog Name Checker</h1>
          <p className="text-xl text-dark-gray max-w-3xl mx-auto">
            Learn about our mission to help dog owners find the perfect names for their canine companions.
          </p>
        </div>
      </section>
      
      <section className="section bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Story</h2>
              <p className="text-dark-gray mb-4">
                Dog Name Checker was created by a team of passionate dog lovers who understand the importance of finding the perfect name for your canine companion. We believe that a dog's name is more than just a way to call them—it's a reflection of their personality, appearance, and the special bond you share.
              </p>
              <p className="text-dark-gray mb-4">
                Our journey began when our founder was struggling to name their new puppy. After spending hours researching dog names without finding a comprehensive tool to help with the decision, the idea for Dog Name Checker was born.
              </p>
              <p className="text-dark-gray">
                Today, our mission is to provide dog owners with a simple yet powerful tool to analyze potential names and find the one that perfectly suits their furry friend.
              </p>
            </div>
            <div className="bg-light-gray dark:bg-gray-800 p-8 rounded-lg">
              <h3 className="text-2xl font-semibold mb-4">Our Dog Name Database</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="w-6 h-6 bg-primary rounded-full flex items-center justify-center text-white mt-1 mr-3 flex-shrink-0">1</span>
                  <div>
                    <h4 className="font-semibold mb-1">Extensive Collection</h4>
                    <p className="text-dark-gray">Our database contains thousands of dog names from around the world.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="w-6 h-6 bg-primary rounded-full flex items-center justify-center text-white mt-1 mr-3 flex-shrink-0">2</span>
                  <div>
                    <h4 className="font-semibold mb-1">Detailed Analysis</h4>
                    <p className="text-dark-gray">Each name has been analyzed for popularity, gender associations, and breed compatibility.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="w-6 h-6 bg-primary rounded-full flex items-center justify-center text-white mt-1 mr-3 flex-shrink-0">3</span>
                  <div>
                    <h4 className="font-semibold mb-1">Regular Updates</h4>
                    <p className="text-dark-gray">We continually update our database to include new trends in dog naming.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="w-6 h-6 bg-primary rounded-full flex items-center justify-center text-white mt-1 mr-3 flex-shrink-0">4</span>
                  <div>
                    <h4 className="font-semibold mb-1">User Contributions</h4>
                    <p className="text-dark-gray">Our community helps us expand our collection by sharing their own dog names.</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      
      <section className="section bg-light-gray dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">How Our Dog Name Checker Works</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-sm">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6 mx-auto">
                <span className="text-primary text-2xl font-bold">1</span>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-center">Input Analysis</h3>
              <p className="text-dark-gray">
                When you enter a name, our algorithm first analyzes its linguistic properties, including length, syllables, and phonetic elements that make a good dog name.
              </p>
            </div>
            
            <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-sm">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6 mx-auto">
                <span className="text-primary text-2xl font-bold">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-center">Database Comparison</h3>
              <p className="text-dark-gray">
                Next, we compare the name against our extensive database of dog names to determine popularity rankings and gender associations based on real-world usage.
              </p>
            </div>
            
            <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-sm">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6 mx-auto">
                <span className="text-primary text-2xl font-bold">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-center">Breed Matching</h3>
              <p className="text-dark-gray">
                Finally, our algorithm evaluates how well the name matches different dog breeds, considering factors like size, temperament, and breed history.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      <section className="section bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Our Commitment to Dog Owners</h2>
          <p className="text-xl text-dark-gray max-w-3xl mx-auto mb-12">
            At Dog Name Checker, we're dedicated to helping you find a name that you and your dog will love for years to come.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left max-w-4xl mx-auto">
            <div className="flex items-start">
              <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                <span className="text-primary font-bold">✓</span>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Accuracy</h3>
                <p className="text-dark-gray">
                  We strive to provide the most accurate analysis of dog names based on real data and expert insights.
                </p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                <span className="text-primary font-bold">✓</span>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Convenience</h3>
                <p className="text-dark-gray">
                  Our tool is designed to be easy to use, providing quick results whenever you need them.
                </p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                <span className="text-primary font-bold">✓</span>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Helpfulness</h3>
                <p className="text-dark-gray">
                  Beyond just analysis, we provide helpful suggestions and alternatives to guide your decision.
                </p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                <span className="text-primary font-bold">✓</span>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Community</h3>
                <p className="text-dark-gray">
                  We're building a community of dog lovers who share their naming experiences and insights.
                </p>
              </div>
            </div>
          </div>
          
          <div className="mt-12">
            <Link href="/#check-name" className="btn-primary">
              Try Our Dog Name Checker
            </Link>
          </div>
        </div>
      </section>
      
      <CTASection />
      
      <Footer />
    </main>
  );
} 