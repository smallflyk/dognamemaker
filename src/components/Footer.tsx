"use client";

import Link from 'next/link';
import { FiInstagram, FiTwitter, FiFacebook, FiMail } from 'react-icons/fi';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-light-gray dark:bg-gray-900 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Dog Name Checker</h3>
            <p className="mb-4 text-dark-gray">
              The ultimate tool to help you find the perfect name for your canine companion.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://instagram.com/" 
                className="text-gray hover:text-primary transition-colors" 
                title="Follow Dog Name Checker on Instagram" 
                aria-label="Follow us on Instagram"
              >
                <span className="sr-only">Instagram</span>
                <FiInstagram size={20} />
              </a>
              <a 
                href="https://twitter.com/" 
                className="text-gray hover:text-primary transition-colors" 
                title="Follow Dog Name Checker on Twitter" 
                aria-label="Follow us on Twitter"
              >
                <span className="sr-only">Twitter</span>
                <FiTwitter size={20} />
              </a>
              <a 
                href="https://facebook.com/" 
                className="text-gray hover:text-primary transition-colors" 
                title="Follow Dog Name Checker on Facebook" 
                aria-label="Follow us on Facebook"
              >
                <span className="sr-only">Facebook</span>
                <FiFacebook size={20} />
              </a>
              <a 
                href="mailto:contact@dognamechecker.pro" 
                className="text-gray hover:text-primary transition-colors" 
                title="Contact Dog Name Checker via Email" 
                aria-label="Contact us via Email"
              >
                <span className="sr-only">Email</span>
                <FiMail size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-dark-gray hover:text-primary transition-colors" title="Dog Name Checker - Home">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/name-library" className="text-dark-gray hover:text-primary transition-colors" title="Dog Name Library - Browse Popular & Unique Canine Names">
                  Name Library
                </Link>
              </li>
              <li>
                <Link href="/dog-naming-tips" className="text-dark-gray hover:text-primary transition-colors" title="Dog Naming Tips - Expert Guide for Pet Names">
                  Naming Tips
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-dark-gray hover:text-primary transition-colors" title="About Dog Name Checker - Our Story & Mission">
                  About Us
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Dog Name Resources</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/name-library?category=popular" className="text-dark-gray hover:text-primary transition-colors" title="Popular Dog Names - Top Trending Pet Names">
                  Popular Dog Names
                </Link>
              </li>
              <li>
                <Link href="/name-library?category=unique" className="text-dark-gray hover:text-primary transition-colors" title="Unique Dog Names - Distinctive Pet Name Ideas">
                  Unique Dog Names
                </Link>
              </li>
              <li>
                <Link href="/name-library?gender=male" className="text-dark-gray hover:text-primary transition-colors" title="Male Dog Names - Popular Names for Boy Dogs">
                  Male Dog Names
                </Link>
              </li>
              <li>
                <Link href="/name-library?gender=female" className="text-dark-gray hover:text-primary transition-colors" title="Female Dog Names - Popular Names for Girl Dogs">
                  Female Dog Names
                </Link>
              </li>
              <li>
                <Link href="/name-library?category=breeds" className="text-dark-gray hover:text-primary transition-colors" title="Breed-Specific Dog Names - Names Suited to Different Breeds">
                  Breed-Specific Names
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">About Our Dog Name Checker</h4>
            <p className="text-dark-gray mb-4">
              Our dog name checker tool uses advanced algorithms to analyze the popularity, gender suitability, and breed compatibility of thousands of dog names.
            </p>
            <Link href="/#check-name" className="btn-primary inline-block" title="Try Our Dog Name Checker Tool">
              Try it Now
            </Link>
          </div>
        </div>
        
        <div className="mt-12 pt-6 border-t border-gray">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-dark-gray text-sm mb-4 md:mb-0">
              &copy; {currentYear} Dog Name Checker. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <Link href="/privacy-policy" className="text-dark-gray hover:text-primary text-sm transition-colors" title="Dog Name Checker Privacy Policy">
                Privacy Policy
              </Link>
              <Link href="/terms-of-service" className="text-dark-gray hover:text-primary text-sm transition-colors" title="Dog Name Checker Terms of Service">
                Terms of Service
              </Link>
              <Link href="/contact" className="text-dark-gray hover:text-primary text-sm transition-colors" title="Contact Dog Name Checker">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 