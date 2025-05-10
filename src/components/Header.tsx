"use client";

import Link from 'next/link';
import { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed w-full top-0 bg-white bg-opacity-95 shadow-sm z-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Link href="/" className="flex items-center" title="Dog Name Checker - Home">
          <span className="text-2xl font-bold text-primary">
            <span className="text-secondary">Dog</span> Name Checker
          </span>
        </Link>

        {/* Mobile menu button */}
        <button 
          className="md:hidden text-gray-600 hover:text-primary focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link 
            href="/" 
            className="text-dark-gray hover:text-primary transition-colors"
            title="Dog Name Checker - Home"
          >
            Home
          </Link>
          <Link 
            href="/name-library" 
            className="text-dark-gray hover:text-primary transition-colors"
            title="Dog Name Library - Browse Popular & Unique Canine Names"
          >
            Name Library
          </Link>
          <Link 
            href="/dog-naming-tips" 
            className="text-dark-gray hover:text-primary transition-colors"
            title="Dog Naming Tips - Expert Guide for Pet Names"
          >
            Naming Tips
          </Link>
          <Link 
            href="/about" 
            className="text-dark-gray hover:text-primary transition-colors"
            title="About Dog Name Checker - Our Story & Mission"
          >
            About
          </Link>
          <Link 
            href="/#check-name" 
            className="btn-primary"
            title="Check Your Dog Name - Free Name Analysis Tool"
          >
            Check a Name
          </Link>
        </nav>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="absolute top-full left-0 right-0 bg-white dark:bg-gray-900 shadow-lg md:hidden">
            <nav className="flex flex-col p-4">
              <Link 
                href="/" 
                className="py-2 text-dark-gray hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
                title="Dog Name Checker - Home"
              >
                Home
              </Link>
              <Link 
                href="/name-library" 
                className="py-2 text-dark-gray hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
                title="Dog Name Library - Browse Popular & Unique Canine Names"
              >
                Name Library
              </Link>
              <Link 
                href="/dog-naming-tips" 
                className="py-2 text-dark-gray hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
                title="Dog Naming Tips - Expert Guide for Pet Names"
              >
                Naming Tips
              </Link>
              <Link 
                href="/about" 
                className="py-2 text-dark-gray hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
                title="About Dog Name Checker - Our Story & Mission"
              >
                About
              </Link>
              <Link 
                href="/#check-name" 
                className="mt-2 py-2 text-center bg-primary text-white rounded-lg"
                onClick={() => setIsMenuOpen(false)}
                title="Check Your Dog Name - Free Name Analysis Tool"
              >
                Check a Name
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header; 