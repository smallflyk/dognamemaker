"use client";

import { FiSearch, FiThumbsUp, FiBarChart2, FiTarget } from 'react-icons/fi';

const features = [
  {
    icon: <FiSearch size={28} />,
    title: "Human Name Detector",
    description: "Discover if your chosen dog name is commonly used for humans. Our advanced dog or human name checker helps you avoid confusion and ensure your dog's name stands out."
  },
  {
    icon: <FiBarChart2 size={28} />,
    title: "Name Popularity Analysis",
    description: "Find out how popular your dog's name is among other pet owners. Our dog name checker provides insights on trends to help you choose a unique name or embrace a popular one."
  },
  {
    icon: <FiTarget size={28} />,
    title: "Breed Compatibility Check",
    description: "Learn which dog breeds your chosen name best matches. Our dog name detector analyzes breed characteristics to suggest the perfect name-breed combination."
  },
  {
    icon: <FiThumbsUp size={28} />,
    title: "Gender Appropriate Names",
    description: "Discover if your chosen name is traditionally used for male or female dogs with our specialized dog name check that ensures your pup's name fits their identity."
  }
];

const FeaturesSection = () => {
  return (
    <section className="section bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Use Our Dog Name Checker?</h2>
          <p className="text-dark-gray max-w-3xl mx-auto">
            Our comprehensive dog name detector helps you make the perfect choice for your furry friend, providing
            valuable insights about any name you're considering.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-light-gray dark:bg-gray-800 p-6 rounded-lg transition-transform hover:scale-105"
            >
              <div className="text-primary mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-dark-gray">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection; 