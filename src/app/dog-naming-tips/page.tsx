import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";
import Link from "next/link";
import { FiCheck, FiX } from "react-icons/fi";
import { Metadata } from 'next';
import { FiCheckCircle, FiAlertTriangle, FiHeart, FiEdit } from 'react-icons/fi';

// 确保BASE_URL格式统一
const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://www.dognamechecker.pro/';
// 确保末尾有斜杠
const canonicalBaseUrl = baseUrl.endsWith('/') ? baseUrl : `${baseUrl}/`;
// 处理页面路径时需要不带斜杠的baseUrl
const baseUrlNoSlash = baseUrl.endsWith('/') ? baseUrl.slice(0, -1) : baseUrl;

export const metadata: Metadata = {
  title: "Dog Naming Tips - Expert Guide for Pet Names",
  description: "Expert tips for naming your dog from trainers. Learn best practices, avoid common mistakes, and find creative themed ideas for your new canine friend.",
  keywords: ['dog naming tips', 'pet naming advice', 'puppy names', 'naming taboos', 'pet naming guide', 'Dog Name Checker'],
  alternates: {
    canonical: `${canonicalBaseUrl}dog-naming-tips/`,
  },
};

export default function DogNamingTipsPage() {
  return (
    <main>
      <Header />
      
      <section className="pt-32 pb-16 bg-gradient-to-b from-primary/10 to-white dark:from-primary/5 dark:to-gray-900">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Dog Naming Tips</h1>
          <p className="text-xl text-dark-gray max-w-3xl mx-auto">
            Expert advice to help you find the perfect name for your canine companion. Our dog name checker can verify if your chosen name follows these best practices.
          </p>
        </div>
      </section>
      
      <section className="section bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">The Importance of a Good Dog Name</h2>
              <p className="text-dark-gray mb-4">
                Choosing the right name for your dog is more important than many pet owners realize. A well-chosen name can:
              </p>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <span className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center mr-3">
                    <FiCheck className="text-primary" />
                  </span>
                  Make training easier and more effective
                </li>
                <li className="flex items-center">
                  <span className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center mr-3">
                    <FiCheck className="text-primary" />
                  </span>
                  Reflect your dog's unique personality and characteristics
                </li>
                <li className="flex items-center">
                  <span className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center mr-3">
                    <FiCheck className="text-primary" />
                  </span>
                  Create a stronger bond between you and your pet
                </li>
                <li className="flex items-center">
                  <span className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center mr-3">
                    <FiCheck className="text-primary" />
                  </span>
                  Help your dog stand out at the dog park or vet's office
                </li>
                <li className="flex items-center">
                  <span className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center mr-3">
                    <FiCheck className="text-primary" />
                  </span>
                  Become a cherished part of your family's story
                </li>
              </ul>
              <p className="text-dark-gray mt-4">
                Our dog name checker tool helps you evaluate potential names based on important factors like popularity, gender associations, and breed compatibility.
              </p>
            </div>
            <div className="bg-light-gray dark:bg-gray-800 p-8 rounded-lg">
              <h3 className="text-2xl font-semibold mb-6">Top Dog Naming Do's and Don'ts</h3>
              
              <div className="mb-6">
                <h4 className="text-xl font-semibold flex items-center mb-3">
                  <span className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mr-2">
                    <FiCheck className="text-green-600" />
                  </span>
                  Do's
                </h4>
                <ul className="space-y-2 pl-8">
                  <li className="list-disc text-dark-gray">Choose a name that's easy to say and recognize</li>
                  <li className="list-disc text-dark-gray">Select names with one or two syllables for better recall</li>
                  <li className="list-disc text-dark-gray">Consider your dog's size, breed, and personality</li>
                  <li className="list-disc text-dark-gray">Test the name to see how your dog responds</li>
                  <li className="list-disc text-dark-gray">Use our dog name checker to evaluate your options</li>
                </ul>
              </div>
              
              <div>
                <h4 className="text-xl font-semibold flex items-center mb-3">
                  <span className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center mr-2">
                    <FiX className="text-red-600" />
                  </span>
                  Don'ts
                </h4>
                <ul className="space-y-2 pl-8">
                  <li className="list-disc text-dark-gray">Avoid names that sound like common commands (e.g., "Kit" sounds like "Sit")</li>
                  <li className="list-disc text-dark-gray">Don't choose overly complex or hard-to-pronounce names</li>
                  <li className="list-disc text-dark-gray">Avoid names that could be embarrassing to call out in public</li>
                  <li className="list-disc text-dark-gray">Don't pick a name that's too similar to family members' names</li>
                  <li className="list-disc text-dark-gray">Try not to choose extremely common names if you want your dog to stand out</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="section bg-light-gray dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Expert Tips for Naming Your Dog</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-4">Consider Your Dog's Appearance</h3>
              <p className="text-dark-gray">
                Physical characteristics like size, color, and distinctive markings can inspire great names. A small dog might be "Peanut," while a large black dog could be "Shadow." Our dog name checker can help you find names that suit your dog's appearance.
              </p>
            </div>
            
            <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-4">Match Their Personality</h3>
              <p className="text-dark-gray">
                Wait a few days after bringing your dog home to observe their personality traits. An energetic dog might be "Dash," while a calm one could be "Zen." Use our dog name checker to find names that align with your dog's temperament.
              </p>
            </div>
            
            <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-4">Consider Breed Heritage</h3>
              <p className="text-dark-gray">
                Names inspired by your dog's breed origin can be meaningful. A German Shepherd might have a German name, while a French Bulldog could have a French name. Our dog name checker includes breed-specific recommendations.
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-4">Test the Name's Usability</h3>
              <p className="text-dark-gray">
                Practice calling out potential names in different situations. Is it easy to say when calling your dog from a distance? Does it sound good when used with commands? A practical name will make day-to-day life with your dog smoother.
              </p>
            </div>
            
            <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-4">Avoid Trendy Names</h3>
              <p className="text-dark-gray">
                While popular names like "Luna" or "Max" are beloved for a reason, consider how many other dogs at the park will come running when you call. Our dog name checker shows popularity rankings to help you decide.
              </p>
            </div>
            
            <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-4">Consider Future-Proofing</h3>
              <p className="text-dark-gray">
                Remember that cute puppy names might not suit an adult dog. A name like "Tiny" may be less fitting as your puppy grows into a large adult dog. Choose a name that will age well with your pet.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      <section className="section bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-6">Popular Naming Themes</h2>
            <p className="text-dark-gray max-w-3xl mx-auto">
              Many dog owners find it helpful to draw inspiration from specific themes when naming their pets. Here are some popular themes to consider, all of which can be evaluated using our dog name checker.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            <div className="bg-light-gray dark:bg-gray-800 p-5 rounded-lg">
              <h3 className="font-semibold mb-3">Food & Drinks</h3>
              <p className="text-dark-gray mb-2">Examples:</p>
              <div className="flex flex-wrap gap-2">
                <span className="px-2 py-1 bg-primary/10 rounded text-sm">Cookie</span>
                <span className="px-2 py-1 bg-primary/10 rounded text-sm">Pepper</span>
                <span className="px-2 py-1 bg-primary/10 rounded text-sm">Mocha</span>
                <span className="px-2 py-1 bg-primary/10 rounded text-sm">Biscuit</span>
              </div>
            </div>
            
            <div className="bg-light-gray dark:bg-gray-800 p-5 rounded-lg">
              <h3 className="font-semibold mb-3">Nature & Elements</h3>
              <p className="text-dark-gray mb-2">Examples:</p>
              <div className="flex flex-wrap gap-2">
                <span className="px-2 py-1 bg-primary/10 rounded text-sm">River</span>
                <span className="px-2 py-1 bg-primary/10 rounded text-sm">Sky</span>
                <span className="px-2 py-1 bg-primary/10 rounded text-sm">Forest</span>
                <span className="px-2 py-1 bg-primary/10 rounded text-sm">Storm</span>
              </div>
            </div>
            
            <div className="bg-light-gray dark:bg-gray-800 p-5 rounded-lg">
              <h3 className="font-semibold mb-3">Mythology & Legends</h3>
              <p className="text-dark-gray mb-2">Examples:</p>
              <div className="flex flex-wrap gap-2">
                <span className="px-2 py-1 bg-primary/10 rounded text-sm">Thor</span>
                <span className="px-2 py-1 bg-primary/10 rounded text-sm">Athena</span>
                <span className="px-2 py-1 bg-primary/10 rounded text-sm">Loki</span>
                <span className="px-2 py-1 bg-primary/10 rounded text-sm">Apollo</span>
              </div>
            </div>
            
            <div className="bg-light-gray dark:bg-gray-800 p-5 rounded-lg">
              <h3 className="font-semibold mb-3">Colors</h3>
              <p className="text-dark-gray mb-2">Examples:</p>
              <div className="flex flex-wrap gap-2">
                <span className="px-2 py-1 bg-primary/10 rounded text-sm">Blue</span>
                <span className="px-2 py-1 bg-primary/10 rounded text-sm">Amber</span>
                <span className="px-2 py-1 bg-primary/10 rounded text-sm">Rusty</span>
                <span className="px-2 py-1 bg-primary/10 rounded text-sm">Ebony</span>
              </div>
            </div>
            
            <div className="bg-light-gray dark:bg-gray-800 p-5 rounded-lg">
              <h3 className="font-semibold mb-3">Famous Characters</h3>
              <p className="text-dark-gray mb-2">Examples:</p>
              <div className="flex flex-wrap gap-2">
                <span className="px-2 py-1 bg-primary/10 rounded text-sm">Yoda</span>
                <span className="px-2 py-1 bg-primary/10 rounded text-sm">Simba</span>
                <span className="px-2 py-1 bg-primary/10 rounded text-sm">Sherlock</span>
                <span className="px-2 py-1 bg-primary/10 rounded text-sm">Arya</span>
              </div>
            </div>
            
            <div className="bg-light-gray dark:bg-gray-800 p-5 rounded-lg">
              <h3 className="font-semibold mb-3">Places</h3>
              <p className="text-dark-gray mb-2">Examples:</p>
              <div className="flex flex-wrap gap-2">
                <span className="px-2 py-1 bg-primary/10 rounded text-sm">Paris</span>
                <span className="px-2 py-1 bg-primary/10 rounded text-sm">Brooklyn</span>
                <span className="px-2 py-1 bg-primary/10 rounded text-sm">Rio</span>
                <span className="px-2 py-1 bg-primary/10 rounded text-sm">Kenya</span>
              </div>
            </div>
            
            <div className="bg-light-gray dark:bg-gray-800 p-5 rounded-lg">
              <h3 className="font-semibold mb-3">Human Names</h3>
              <p className="text-dark-gray mb-2">Examples:</p>
              <div className="flex flex-wrap gap-2">
                <span className="px-2 py-1 bg-primary/10 rounded text-sm">Henry</span>
                <span className="px-2 py-1 bg-primary/10 rounded text-sm">Sophie</span>
                <span className="px-2 py-1 bg-primary/10 rounded text-sm">Oscar</span>
                <span className="px-2 py-1 bg-primary/10 rounded text-sm">Emma</span>
              </div>
            </div>
            
            <div className="bg-light-gray dark:bg-gray-800 p-5 rounded-lg">
              <h3 className="font-semibold mb-3">Personality Traits</h3>
              <p className="text-dark-gray mb-2">Examples:</p>
              <div className="flex flex-wrap gap-2">
                <span className="px-2 py-1 bg-primary/10 rounded text-sm">Happy</span>
                <span className="px-2 py-1 bg-primary/10 rounded text-sm">Brave</span>
                <span className="px-2 py-1 bg-primary/10 rounded text-sm">Spunky</span>
                <span className="px-2 py-1 bg-primary/10 rounded text-sm">Dash</span>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-10">
            <Link href="/#check-name" className="btn-primary">
              Test These Names with our Dog Name Checker
            </Link>
          </div>
        </div>
      </section>
      
      <CTASection />
      
      <Footer />
    </main>
  );
} 