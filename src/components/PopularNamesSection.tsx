"use client";

import Link from 'next/link';
import { FiArrowRight } from 'react-icons/fi';

const popularNames = [
  { name: 'Max', gender: 'male', popularity: 'Very High' },
  { name: 'Bella', gender: 'female', popularity: 'Very High' },
  { name: 'Charlie', gender: 'male', popularity: 'High' },
  { name: 'Lucy', gender: 'female', popularity: 'High' },
  { name: 'Cooper', gender: 'male', popularity: 'Medium' },
  { name: 'Luna', gender: 'female', popularity: 'Rising' },
  { name: 'Milo', gender: 'male', popularity: 'Rising' },
  { name: 'Daisy', gender: 'female', popularity: 'Medium' },
  { name: 'Rocky', gender: 'male', popularity: 'Classic' },
  { name: 'Lily', gender: 'female', popularity: 'Classic' },
  { name: 'Bailey', gender: 'unisex', popularity: 'Medium' },
  { name: 'Coco', gender: 'unisex', popularity: 'Rising' },
];

const PopularNamesSection = () => {
  return (
    <section className="section bg-light-gray dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Popular Dog Names</h2>
          <p className="text-dark-gray max-w-3xl mx-auto">
            Browse through some of the most popular dog names. Our dog name checker can analyze these and thousands more to help you find the perfect match.
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-12">
          {popularNames.map((nameData, index) => (
            <div 
              key={index} 
              className="bg-white dark:bg-gray-700 p-4 rounded-lg shadow-sm text-center"
            >
              <h3 className="text-xl font-semibold mb-2">{nameData.name}</h3>
              <div className="flex justify-between text-sm text-dark-gray">
                <span className={`${
                  nameData.gender === 'male' ? 'text-blue-500' : 
                  nameData.gender === 'female' ? 'text-pink-500' : 'text-purple-500'
                }`}>
                  {nameData.gender === 'male' ? 'Male' : 
                   nameData.gender === 'female' ? 'Female' : 'Unisex'}
                </span>
                <span>{nameData.popularity}</span>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center">
          <Link 
            href="/name-library" 
            className="btn-primary inline-flex items-center"
            title="Explore More Dog Names - Complete Name Library"
          >
            Explore More Names
            <FiArrowRight className="ml-2" />
          </Link>
          <p className="mt-4 text-dark-gray">
            Our dog name library contains thousands of names for every type of dog.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PopularNamesSection; 