import { Metadata } from 'next';
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import { FiSearch } from "react-icons/fi";

// 设置noindex元数据
export const metadata: Metadata = {
  title: "Search Results - Dog Name Checker",
  description: "Search results for dog names and naming tips.",
  robots: {
    index: false,  // 明确设置noindex
    follow: true,
    googleBot: {
      index: false,
      follow: true,
    },
  },
};

// 搜索页面
export default function SearchPage({
  searchParams,
}: {
  searchParams?: { q?: string };
}) {
  const query = searchParams?.q || '';
  
  return (
    <main>
      <Header />
      
      <section className="pt-32 pb-16 bg-gradient-to-b from-primary/10 to-white dark:from-primary/5 dark:to-gray-900">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Search Results</h1>
          <p className="text-xl text-dark-gray max-w-3xl mx-auto">
            {query ? `Results for "${query}"` : 'Enter a search term to find dog names and resources'}
          </p>
        </div>
      </section>
      
      <section className="section bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto mb-8">
            <div className="relative">
              <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search for dog names, tips, or resources..."
                defaultValue={query}
                className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
              />
              <button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-primary text-white px-4 py-1 rounded-md">
                Search
              </button>
            </div>
          </div>
          
          {/* 搜索结果示例 */}
          <div className="bg-light-gray dark:bg-gray-800 p-4 rounded-lg mb-8">
            <p className="text-center">
              <strong>搜索提示：</strong> 此页面设置了<code>noindex</code>标签，不会被搜索引擎收录。这是搜索页面的最佳实践，因为搜索结果通常不需要被索引。
            </p>
          </div>
          
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-4">相关页面</h2>
            <div className="space-y-4">
              <div className="bg-white dark:bg-gray-700 p-4 rounded-lg shadow-sm">
                <Link href="/" className="text-xl font-semibold text-primary hover:underline">
                  Dog Name Checker - Find Your Perfect Canine Name
                </Link>
                <p className="text-dark-gray mt-2">
                  我们的主页提供狗狗名字检查工具，帮助您为爱犬选择完美的名字。
                </p>
              </div>
              
              <div className="bg-white dark:bg-gray-700 p-4 rounded-lg shadow-sm">
                <Link href="/name-library/" className="text-xl font-semibold text-primary hover:underline">
                  Dog Name Library - Browse Popular & Unique Canine Names
                </Link>
                <p className="text-dark-gray mt-2">
                  浏览我们的狗狗名字库，查找流行、独特和适合您爱犬的名字。
                </p>
              </div>
              
              <div className="bg-white dark:bg-gray-700 p-4 rounded-lg shadow-sm">
                <Link href="/dog-naming-tips/" className="text-xl font-semibold text-primary hover:underline">
                  Dog Naming Tips - Expert Guide for Pet Names
                </Link>
                <p className="text-dark-gray mt-2">
                  专家提供的狗狗命名技巧，帮助您避免常见错误并找到完美名字。
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </main>
  );
} 