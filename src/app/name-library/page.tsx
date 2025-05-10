import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import { FiSearch, FiFilter, FiChevronDown, FiTag, FiStar, FiTrendingUp } from "react-icons/fi";
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Dog Name Library - Discover Popular Dog Names',
  description: 'Browse our extensive dog name library. Filter by gender, popularity, and category to find the perfect name for your canine companion. Detailed name information and meanings provided.',
  keywords: ['dog name library', 'pet names', 'popular dog names', 'dog naming ideas', 'dog name search'],
  alternates: {
    canonical: '/name-library',
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
      
      <section className="pt-32 pb-16 bg-gradient-to-b from-primary/10 to-white dark:from-primary/5 dark:to-gray-900">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Dog Name Library</h1>
          <p className="text-xl text-dark-gray max-w-3xl mx-auto">
            Browse our extensive collection of dog names. Find the perfect name for your canine companion with our dog name checker tool.
          </p>
        </div>
      </section>
      
      <section className="section bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="mb-12">
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
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {dogNames.map((nameData, index) => (
              <Link 
                key={index} 
                href={`/#check-name`}  // In a real app, this would link to a name detail page
                className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-4 hover:shadow-md transition-shadow"
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
          
          <div className="mt-12 flex justify-center">
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
      </section>
      
      <section className="section bg-light-gray dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Find the Perfect Dog Name</h2>
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
              <Link href="/#check-name" className="text-primary font-semibold hover:underline">
                Check a male dog name →
              </Link>
            </div>
            
            <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-4">For Female Dogs</h3>
              <p className="text-dark-gray mb-4">
                Female dog names are often melodic, elegant, and sweet-sounding. Use our dog name checker to find a name that reflects your female dog's personality.
              </p>
              <Link href="/#check-name" className="text-primary font-semibold hover:underline">
                Check a female dog name →
              </Link>
            </div>
            
            <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-4">Breed-Specific Names</h3>
              <p className="text-dark-gray mb-4">
                Some names work particularly well with certain dog breeds. Our dog name checker analyzes breed compatibility to help you find the perfect match.
              </p>
              <Link href="/#check-name" className="text-primary font-semibold hover:underline">
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