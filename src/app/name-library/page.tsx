import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import { FiSearch, FiFilter, FiChevronDown, FiTag, FiStar, FiTrendingUp } from "react-icons/fi";
import type { Metadata } from 'next';

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || 'https://www.dognamechecker.pro'; // 更新域名，不带末尾斜杠

export const metadata: Metadata = {
  title: "Dog Name Library - Browse Popular & Unique Canine Names",
  description: "Browse dog names sorted by popularity, gender, and style. Find trending, classic, and unique options for your canine with our easy search filters.",
  keywords: ['dog name library', 'pet names', 'popular dog names', 'dog naming ideas', 'dog name search', 'Dog Name Checker'],
  alternates: {
    canonical: `${BASE_URL}/name-library/`,
  },
};

const dogNames = [
  { name: "Max", gender: "male", popularity: "Very High", category: ["popular", "short"] },
  { name: "Bella", gender: "female", popularity: "Very High", category: ["popular", "easy"] },
  { name: "Charlie", gender: "male", popularity: "High", category: ["popular", "friendly"] },
  { name: "Lucy", gender: "female", popularity: "High", category: ["popular", "cute"] },
  { name: "Cooper", gender: "male", popularity: "Medium", category: ["trendy", "active"] },
  { name: "Luna", gender: "female", popularity: "Rising", category: ["trendy", "unique"] },
  { name: "Milo", gender: "male", popularity: "Rising", category: ["trendy", "cute"] },
  { name: "Daisy", gender: "female", popularity: "Medium", category: ["classic", "cute"] },
  { name: "Rocky", gender: "male", popularity: "Classic", category: ["classic", "strong"] },
  { name: "Lily", gender: "female", popularity: "Classic", category: ["classic", "elegant"] },
  { name: "Bailey", gender: "unisex", popularity: "Medium", category: ["unisex", "friendly"] },
  { name: "Coco", gender: "unisex", popularity: "Rising", category: ["unisex", "cute"] },
  { name: "Buddy", gender: "male", popularity: "Very High", category: ["popular", "friendly"] },
  { name: "Sadie", gender: "female", popularity: "Medium", category: ["classic", "sweet"] },
  { name: "Jack", gender: "male", popularity: "High", category: ["popular", "short"] },
  { name: "Stella", gender: "female", popularity: "Rising", category: ["trendy", "elegant"] },
  { name: "Oliver", gender: "male", popularity: "Rising", category: ["trendy", "sophisticated"] },
  { name: "Zoe", gender: "female", popularity: "Medium", category: ["unique", "short"] },
  { name: "Toby", gender: "male", popularity: "Medium", category: ["friendly", "cute"] },
  { name: "Lola", gender: "female", popularity: "Rising", category: ["trendy", "spunky"] },
  { name: "Duke", gender: "male", popularity: "Medium", category: ["strong", "noble"] },
  { name: "Molly", gender: "female", popularity: "Classic", category: ["classic", "sweet"] },
  { name: "Teddy", gender: "male", popularity: "Rising", category: ["cute", "friendly"] },
  { name: "Ruby", gender: "female", popularity: "Medium", category: ["elegant", "precious"] },
];

const categories = [
  "All",
  "Popular",
  "Unique",
  "Classic",
  "Trendy",
  "Cute",
  "Strong",
  "Elegant",
  "Friendly",
  "Short",
  "Unisex",
];

export default function NameLibraryPage() {
  return (
    <main>
      <Header />
      
      <section className="pt-32 pb-4 bg-gradient-to-b from-primary/10 to-white dark:from-primary/5 dark:to-gray-900">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Dog Name Library</h1>
          <p className="text-xl text-dark-gray max-w-3xl mx-auto">
            Browse our extensive collection of dog names. Find the perfect name for your canine companion with our dog name checker tool.
          </p>
        </div>
      </section>
      
      <section className="py-6 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="mb-8">
            <h2 className="text-3xl font-bold mb-6 text-center">Browse Our Dog Name Collection</h2>
            <div className="flex flex-col md:flex-row gap-4 mb-8">
              <div className="flex-1 relative">
                <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray" />
                <input
                  type="text"
                  placeholder="Search dog names..."
                  className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray focus:outline-none focus:border-primary"
                />
              </div>
              
              <div className="flex gap-2">
                <div className="relative">
                  <button className="flex items-center gap-1 bg-light-gray dark:bg-gray-700 px-4 py-3 rounded-lg">
                    <FiFilter />
                    <span>Gender</span>
                    <FiChevronDown />
                  </button>
                  {/* Dropdown menu would be here in interactive version */}
                </div>
                
                <div className="relative">
                  <button className="flex items-center gap-1 bg-light-gray dark:bg-gray-700 px-4 py-3 rounded-lg">
                    <FiFilter />
                    <span>Popularity</span>
                    <FiChevronDown />
                  </button>
                  {/* Dropdown menu would be here in interactive version */}
                </div>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-2 mb-8">
              {categories.map((category, index) => (
                <button
                  key={index}
                  className={`px-4 py-2 rounded-full text-sm ${
                    index === 0 
                      ? 'bg-primary text-white' 
                      : 'bg-light-gray dark:bg-gray-700 hover:bg-primary/10'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
          
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-6 text-center">Popular Dog Names</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {dogNames.map((nameData, index) => (
              <Link 
                key={index} 
                href={`/#check-name`}  // In a real app, this would link to a name detail page
                className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-4 hover:shadow-md transition-shadow"
                  title={`Check Dog Name: ${nameData.name}`}
              >
                <h3 className="text-xl font-semibold mb-2">{nameData.name}</h3>
                <div className="flex flex-col text-sm">
                  <span className={`${
                    nameData.gender === 'male' ? 'text-blue-500' : 
                    nameData.gender === 'female' ? 'text-pink-500' : 'text-purple-500'
                  } mb-1`}>
                    {nameData.gender.charAt(0).toUpperCase() + nameData.gender.slice(1)}
                  </span>
                  <span className="text-dark-gray">{nameData.popularity}</span>
                </div>
              </Link>
            ))}
            </div>
          </div>
          
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-6 text-center">Dog Name Categories</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-light-gray dark:bg-gray-800 p-6 rounded-lg">
                <h3 className="text-2xl font-semibold mb-4">Search by Gender</h3>
                <p className="text-dark-gray mb-4">Choose names specifically selected for male or female dogs, or explore our unisex options.</p>
                <div className="flex flex-wrap gap-3">
                  <Link 
                    href="/name-library?gender=male" 
                    className="px-4 py-2 bg-white dark:bg-gray-700 rounded-lg hover:bg-primary hover:text-white transition-colors"
                    title="Browse Male Dog Names"
                  >
                    Male Names
                  </Link>
                  <Link 
                    href="/name-library?gender=female" 
                    className="px-4 py-2 bg-white dark:bg-gray-700 rounded-lg hover:bg-primary hover:text-white transition-colors"
                    title="Browse Female Dog Names"
                  >
                    Female Names
                  </Link>
                  <Link 
                    href="/name-library?gender=unisex" 
                    className="px-4 py-2 bg-white dark:bg-gray-700 rounded-lg hover:bg-primary hover:text-white transition-colors"
                    title="Browse Unisex Dog Names"
                  >
                    Unisex Names
                  </Link>
                </div>
              </div>
              
              <div className="bg-light-gray dark:bg-gray-800 p-6 rounded-lg">
                <h3 className="text-2xl font-semibold mb-4">Search by Style</h3>
                <p className="text-dark-gray mb-4">Find dog names that match your preferred style, from classic to trendy, cute to elegant.</p>
                <div className="flex flex-wrap gap-3">
                  <Link 
                    href="/name-library?category=classic" 
                    className="px-4 py-2 bg-white dark:bg-gray-700 rounded-lg hover:bg-primary hover:text-white transition-colors"
                    title="Browse Classic Dog Names"
                  >
                    Classic
                  </Link>
                  <Link 
                    href="/name-library?category=trendy" 
                    className="px-4 py-2 bg-white dark:bg-gray-700 rounded-lg hover:bg-primary hover:text-white transition-colors"
                    title="Browse Trendy Dog Names"
                  >
                    Trendy
                  </Link>
                  <Link 
                    href="/name-library?category=unique" 
                    className="px-4 py-2 bg-white dark:bg-gray-700 rounded-lg hover:bg-primary hover:text-white transition-colors"
                    title="Browse Unique Dog Names"
                  >
                    Unique
                  </Link>
                  <Link 
                    href="/name-library?category=cute" 
                    className="px-4 py-2 bg-white dark:bg-gray-700 rounded-lg hover:bg-primary hover:text-white transition-colors"
                    title="Browse Cute Dog Names"
                  >
                    Cute
                  </Link>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-8 mb-12">
            <h2 className="text-3xl font-bold mb-6 text-center">Finding Your Ideal Dog Name</h2>
            <p className="text-lg text-dark-gray text-center max-w-3xl mx-auto mb-8">
              Still looking for the perfect name? Use our pagination to explore more options or try our name checker tool.
            </p>
            <div className="flex justify-center">
            <div className="flex items-center gap-2">
              <button className="w-10 h-10 flex items-center justify-center rounded-lg bg-light-gray dark:bg-gray-700">
                &lt;
              </button>
              <button className="w-10 h-10 flex items-center justify-center rounded-lg bg-primary text-white">
                1
              </button>
              <button className="w-10 h-10 flex items-center justify-center rounded-lg bg-light-gray dark:bg-gray-700">
                2
              </button>
              <button className="w-10 h-10 flex items-center justify-center rounded-lg bg-light-gray dark:bg-gray-700">
                3
              </button>
              <span className="mx-2">...</span>
              <button className="w-10 h-10 flex items-center justify-center rounded-lg bg-light-gray dark:bg-gray-700">
                10
              </button>
              <button className="w-10 h-10 flex items-center justify-center rounded-lg bg-light-gray dark:bg-gray-700">
                &gt;
              </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="section bg-light-gray dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Find Your Dog's Perfect Name Match</h2>
            <p className="text-dark-gray max-w-3xl mx-auto">
              Not sure which name to choose? Use our dog name checker to analyze any name for popularity, gender suitability, and breed compatibility.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-4">For Male Dogs</h3>
              <p className="text-dark-gray mb-4">
                Popular male dog names tend to be short, strong-sounding, and easy to call out. Our dog name checker can help you find the perfect masculine name.
              </p>
              <Link 
                href="/#check-name" 
                className="text-primary font-semibold hover:underline"
                title="Check a Male Dog Name"
              >
                Check a male dog name →
              </Link>
            </div>
            
            <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-4">For Female Dogs</h3>
              <p className="text-dark-gray mb-4">
                Female dog names are often melodic, elegant, and sweet-sounding. Use our dog name checker to find a name that reflects your female dog's personality.
              </p>
              <Link 
                href="/#check-name" 
                className="text-primary font-semibold hover:underline"
                title="Check a Female Dog Name"
              >
                Check a female dog name →
              </Link>
            </div>
            
            <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-4">Breed-Specific Names</h3>
              <p className="text-dark-gray mb-4">
                Some names work particularly well with certain dog breeds. Our dog name checker analyzes breed compatibility to help you find the perfect match.
              </p>
              <Link 
                href="/#check-name" 
                className="text-primary font-semibold hover:underline"
                title="Find Breed-Specific Dog Names"
              >
                Find breed-specific names →
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </main>
  );
} 