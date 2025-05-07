"use client";

import Link from 'next/link';
import { FiArrowRight } from 'react-icons/fi';

const CTASection = () => {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-primary to-primary-dark text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Find the Perfect Dog Name?</h2>
        <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
          Our dog name checker helps thousands of pet owners find names that suit their dogs' personalities, breeds, and unique qualities.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link
            href="/#check-name"
            className="bg-white text-primary hover:bg-opacity-90 transition-colors px-8 py-4 rounded-lg font-semibold text-lg flex items-center justify-center"
          >
            Check a Name Now
            <FiArrowRight className="ml-2" />
          </Link>
          <Link
            href="/name-library"
            className="bg-white bg-opacity-20 hover:bg-opacity-30 transition-colors px-8 py-4 rounded-lg font-semibold text-lg flex items-center justify-center"
          >
            Browse Name Library
          </Link>
        </div>
        <p className="mt-8 opacity-75 max-w-2xl mx-auto">
          Join thousands of pet parents who have used our dog name checker to find the perfect name. Our database includes thousands of names with detailed analysis.
        </p>
      </div>
    </section>
  );
};

export default CTASection; 