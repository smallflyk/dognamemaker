"use client";

import Link from 'next/link';
import Image from 'next/image';

const HeroSection = () => {
  return (
    <section className="pt-28 pb-16 md:pt-32 md:pb-24 bg-gradient-to-b from-primary/10 to-white dark:from-primary/5 dark:to-gray-900">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 md:pr-8 mb-10 md:mb-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              <span className="text-primary">Dog Name Checker</span> - Find The Perfect Name For Your Dog
            </h1>
            <p className="text-xl text-dark-gray mb-8 leading-relaxed">
              Check if your dog's name is perfect for them - analyze popularity, gender suitability, and breed compatibility with our advanced dog name checker tool.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/#check-name" className="btn-primary text-center">
                Try Dog Name Checker
              </Link>
              <Link
                href="/name-library"
                className="btn-secondary text-center"
              >
                Browse Name Library
              </Link>
            </div>
          </div>
          <div className="md:w-1/2 relative">
            <div className="bg-white dark:bg-gray-800 p-2 rounded-xl shadow-lg transform rotate-3 hover:rotate-0 transition-transform duration-300">
              <div className="aspect-w-4 aspect-h-3 relative w-full h-64 md:h-96 overflow-hidden rounded-lg">
                {/* 使用提供的狗狗图片 */}
                <Image 
                  src="/images/dogs.jpg"
                  alt="两只可爱的狗狗在道路上奔跑"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-secondary rounded-full opacity-20 dark:opacity-10"></div>
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-primary rounded-full opacity-20 dark:opacity-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection; 