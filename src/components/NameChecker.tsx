"use client";

import { useState } from 'react';
import { FiSearch, FiArrowRight } from 'react-icons/fi';

interface NameResult {
  name: string;
  popularity: string;
  gender: string;
  suitableDogBreeds: string[];
  nameOrigin: string;
  personalityTraits: string[];
  similarNames: string[];
}

const NameChecker = () => {
  const [dogName, setDogName] = useState('');
  const [results, setResults] = useState<NameResult | null>(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!dogName.trim()) return;
    
    setLoading(true);
    
    // Simulating API call for now
    setTimeout(() => {
      // Mock response data - in a real app this would come from your API
      const mockResults = {
        name: dogName,
        popularity: Math.random() > 0.5 ? 'high' : 'medium',
        gender: Math.random() > 0.6 ? 'male' : 'female',
        suitableDogBreeds: [
          'Labrador Retriever',
          'Golden Retriever',
          'German Shepherd',
        ],
        nameOrigin: 'English',
        personalityTraits: ['Loyal', 'Friendly', 'Energetic'],
        similarNames: ['Buddy', 'Max', 'Charlie'].filter(name => name.toLowerCase() !== dogName.toLowerCase()),
      };
      
      setResults(mockResults);
      setLoading(false);
    }, 1500);
  };

  return (
    <div className="w-full max-w-4xl mx-auto" id="check-name">
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
        <h2 className="text-3xl font-bold text-center mb-6">Dog Name Checker</h2>
        <p className="text-dark-gray text-center mb-8">
          Check if your dog's name is perfect for them. Enter a name to analyze its popularity, gender suitability, and breed compatibility.
        </p>
        
        <form onSubmit={handleSubmit} className="mb-8">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray" />
              <input
                type="text"
                value={dogName}
                onChange={(e) => setDogName(e.target.value)}
                placeholder="Enter a dog name..."
                className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray focus:outline-none focus:border-primary"
                required
              />
            </div>
            <button
              type="submit"
              className="btn-primary flex items-center justify-center"
              disabled={loading}
            >
              {loading ? 'Checking...' : 'Check Name'}
              {!loading && <FiArrowRight className="ml-2" />}
            </button>
          </div>
        </form>
        
        {loading && (
          <div className="text-center py-8">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary mx-auto"></div>
            <p className="mt-4 text-dark-gray">Analyzing dog name...</p>
          </div>
        )}
        
        {results && !loading && (
          <div className="mt-8">
            <h3 className="text-2xl font-bold mb-4">{results.name} is a {results.popularity} popularity name</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-6">
              <div className="bg-light-gray dark:bg-gray-700 p-6 rounded-lg">
                <h4 className="text-xl font-semibold mb-3">Gender Suitability: {results.gender}</h4>
                <div className="w-full bg-gray-300 h-4 rounded-full">
                  <div 
                    className={`h-4 rounded-full ${results.gender === 'male' ? 'bg-blue-500' : 'bg-pink-500'}`}
                    style={{ width: results.gender === 'male' ? '70%' : '30%' }}
                  ></div>
                </div>
                <p className="mt-3 text-dark-gray">
                  {results.name} is typically more suitable for {results.gender} dogs, 
                  conveying a {results.gender === 'male' ? 'masculine' : 'feminine'} vibe.
                </p>
              </div>
              
              <div className="bg-light-gray dark:bg-gray-700 p-6 rounded-lg">
                <h4 className="text-xl font-semibold mb-3">Best Suited Dog Breeds</h4>
                <ul className="space-y-2">
                  {results.suitableDogBreeds.map((breed: string, index: number) => (
                    <li key={index} className="flex items-center">
                      <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                      {breed}
                    </li>
                  ))}
                </ul>
                <p className="mt-3 text-dark-gray">
                  This name is especially suitable for friendly, energetic medium to large breeds.
                </p>
              </div>
            </div>
            
            <div className="mt-8 bg-light-gray dark:bg-gray-700 p-6 rounded-lg">
              <h4 className="text-xl font-semibold mb-3">Similar Names You Might Like</h4>
              <div className="flex flex-wrap gap-2">
                {results.similarNames.map((name: string, index: number) => (
                  <button
                    key={index}
                    onClick={() => setDogName(name)}
                    className="px-4 py-2 bg-white dark:bg-gray-600 rounded-full hover:bg-primary hover:text-white transition-colors"
                    title={`Check Dog Name: ${name}`}
                    aria-label={`Try checking the name ${name} instead`}
                  >
                    {name}
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default NameChecker; 