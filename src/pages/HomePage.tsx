
import React from 'react';
import { Link } from 'react-router-dom';
import { Droplet, ArrowRight, HeartPulse } from 'lucide-react';
import Navigation from '../components/Navigation';

const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <div className="flex-grow container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-red-600 to-red-800 bg-clip-text text-transparent">
              Blood Type Conversion Checker
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Understand the compatibility between different blood types and learn about the conversion process.
            </p>
            <div className="flex justify-center">
              <Link 
                to="/converter" 
                className="inline-flex items-center bg-red-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-red-700 transition-colors"
              >
                Try Blood Type Converter
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 mt-16">
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
              <div className="flex items-center mb-4">
                <Droplet className="h-8 w-8 text-red-600 mr-3" />
                <h2 className="text-2xl font-bold">Blood Type Education</h2>
              </div>
              <p className="text-gray-600">
                Learn about the different blood types, their properties, and how they interact with each other during transfusions.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
              <div className="flex items-center mb-4">
                <HeartPulse className="h-8 w-8 text-red-600 mr-3" />
                <h2 className="text-2xl font-bold">Conversion Process</h2>
              </div>
              <p className="text-gray-600">
                Understand the scientific process behind blood type conversions and the factors that determine compatibility.
              </p>
            </div>
          </div>
        </div>
      </div>
      
      <footer className="bg-gray-100 py-6">
        <div className="container mx-auto px-4 text-center text-gray-600">
          <p>© 2025 Blood Type Conversion Checker. Educational purposes only.</p>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
