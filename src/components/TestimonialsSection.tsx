"use client";

import { FiStar } from 'react-icons/fi';

const testimonials = [
  {
    name: "Sarah Johnson",
    location: "New York, NY",
    text: "The dog name checker helped me find the perfect name for my Labrador puppy. I was torn between several options, but the compatibility analysis made it clear which name suited him best!",
    rating: 5,
    dogName: "Cooper",
    dogBreed: "Labrador Retriever"
  },
  {
    name: "Michael Chen",
    location: "San Francisco, CA",
    text: "I wanted a unique name for my dog that wasn't too common. This tool showed me the popularity ranking of different names and helped me find one that was distinctive but still easy to call out at the park.",
    rating: 5,
    dogName: "Kilo",
    dogBreed: "German Shepherd"
  },
  {
    name: "Emma Williams",
    location: "Chicago, IL",
    text: "As a first-time dog owner, I had no idea where to start with naming my dog. The dog name checker made the process fun and insightful, showing me which names matched my puppy's personality.",
    rating: 4,
    dogName: "Luna",
    dogBreed: "French Bulldog"
  }
];

const TestimonialsSection = () => {
  return (
    <section className="section bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Users Say</h2>
          <p className="text-dark-gray max-w-3xl mx-auto">
            Hear from dog owners who used our dog name checker to find the perfect name for their canine companions.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="bg-light-gray dark:bg-gray-800 p-6 rounded-lg shadow-sm"
            >
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <FiStar 
                    key={i} 
                    className={`${i < testimonial.rating ? 'text-secondary fill-secondary' : 'text-gray'} mr-1`}
                  />
                ))}
              </div>
              <p className="text-dark-gray mb-6 italic">"{testimonial.text}"</p>
              <div className="flex justify-between items-end">
                <div>
                  <h4 className="font-semibold">{testimonial.name}</h4>
                  <p className="text-dark-gray text-sm">{testimonial.location}</p>
                </div>
                <div className="text-right">
                  <p className="text-primary font-semibold">{testimonial.dogName}</p>
                  <p className="text-dark-gray text-sm">{testimonial.dogBreed}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection; 