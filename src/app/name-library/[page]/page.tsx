import { Metadata } from 'next';
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import { notFound } from 'next/navigation';

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || 'https://www.dognamechecker.pro';

// 定义参数类型
interface NameLibraryPageParams {
  params: {
    page: string;
  };
}

// 生成动态元数据，根据页号决定是否添加noindex
export async function generateMetadata({ params }: NameLibraryPageParams): Promise<Metadata> {
  const pageNumber = parseInt(params.page, 10);
  
  // 对于第一页，允许索引；对于第2页及以后，设置noindex
  const shouldIndex = pageNumber === 1;
  
  return {
    title: `Dog Name Library - Page ${pageNumber}`,
    description: `Browse dog names sorted by popularity, gender, and style. Page ${pageNumber} of our dog name collection.`,
    robots: {
      index: shouldIndex,
      follow: true,
      nocache: false,
      googleBot: {
        index: shouldIndex,
        follow: true,
      }
    },
    alternates: {
      canonical: pageNumber === 1 
        ? `${BASE_URL}/name-library/` 
        : `${BASE_URL}/name-library/${pageNumber}/`
    },
  };
}

export default function NameLibraryPaginatedPage({ params }: NameLibraryPageParams) {
  const pageNumber = parseInt(params.page, 10);
  
  // 校验页号是否有效
  if (isNaN(pageNumber) || pageNumber < 1 || pageNumber > 10) {
    notFound();
  }

  return (
    <main>
      <Header />
      
      <section className="pt-32 pb-4 bg-gradient-to-b from-primary/10 to-white dark:from-primary/5 dark:to-gray-900">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Dog Name Library - Page {pageNumber}</h1>
          <p className="text-xl text-dark-gray max-w-3xl mx-auto">
            Browse our extensive collection of dog names. Find the perfect name for your canine companion.
          </p>
          {pageNumber > 1 && (
            <div className="bg-yellow-100 p-3 mt-4 rounded-lg inline-block">
              <p className="text-yellow-800">
                This is a paginated view. <Link href="/name-library/" className="underline">Return to main library</Link>
              </p>
            </div>
          )}
        </div>
      </section>

      <section className="py-6 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          {/* 分页示例内容 */}
          <div className="mb-8 text-center">
            <div className="flex justify-center gap-2 mt-8">
              {pageNumber > 1 && (
                <Link href={`/name-library/${pageNumber - 1}`} className="px-4 py-2 bg-primary text-white rounded-lg">
                  Previous Page
                </Link>
              )}
              
              <span className="px-4 py-2 bg-gray-200 rounded-lg">
                Page {pageNumber} of 10
              </span>
              
              {pageNumber < 10 && (
                <Link href={`/name-library/${pageNumber + 1}`} className="px-4 py-2 bg-primary text-white rounded-lg">
                  Next Page
                </Link>
              )}
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </main>
  );
} 