
import React from 'react';
import { Droplet, Award, BookOpen, Users } from 'lucide-react';
import Navigation from '../components/Navigation';

const AboutUsPage: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <div className="flex-grow container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8 text-center bg-gradient-to-r from-red-600 to-red-800 bg-clip-text text-transparent">
            About Blood Type Conversion
          </h1>
          
          <div className="mb-12">
            <p className="text-lg text-gray-600 mb-6">
              The Blood Type Conversion Checker is an educational tool designed to help medical students, healthcare professionals, and curious individuals understand the compatibility between different blood types.
            </p>
            <p className="text-lg text-gray-600">
              Our application provides insights into the theoretical aspects of blood type conversions, which is important for understanding transfusion medicine. While direct conversion of blood types is limited in practice, understanding the compatibility factors is crucial for safe transfusions.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 text-center">
              <div className="flex justify-center mb-4">
                <BookOpen className="h-10 w-10 text-red-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">Educational</h3>
              <p className="text-gray-600">
                Our content is designed for educational purposes to help understand blood type compatibility.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 text-center">
              <div className="flex justify-center mb-4">
                <Award className="h-10 w-10 text-red-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">Scientifically Accurate</h3>
              <p className="text-gray-600">
                Information is based on established medical knowledge about blood types and transfusions.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 text-center">
              <div className="flex justify-center mb-4">
                <Users className="h-10 w-10 text-red-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">Community-Focused</h3>
              <p className="text-gray-600">
                Created to benefit healthcare education and public awareness about blood donation.
              </p>
            </div>
          </div>
          
          <div className="bg-red-50 p-6 rounded-lg border border-red-100">
            <h2 className="text-2xl font-bold mb-4 text-red-700">Important Disclaimer</h2>
            <p className="text-gray-700">
              This tool is for educational purposes only. Actual blood transfusions should always be performed by qualified medical professionals following established protocols. The information provided here should not be used for medical decisions without consulting healthcare providers.
            </p>
          </div>
        </div>
      </div>
      
      <footer className="bg-gray-100 py-6 mt-12">
        <div className="container mx-auto px-4 text-center text-gray-600">
          <p>© 2025 Blood Type Conversion Checker. Educational purposes only.</p>
        </div>
      </footer>
    </div>
  );
};

export default AboutUsPage;
