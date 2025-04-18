import React from 'react';
import { Droplet, Award, BookOpen, Users } from 'lucide-react';

const AboutUsPage: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      
      <div className="flex-grow container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8 text-center bg-gradient-to-r from-red-600 to-red-800 bg-clip-text text-transparent">
            About Blood Type Conversion
          </h1>
          
          <div className="mb-12">
            <p className="text-lg text-gray-600 mb-6">
            Welcome to the Blood Transmutation Project – a pioneering web application that explores the potential of machine learning in solving real-world biomedical challenges. Our goal is to simulate the conversion of one blood type to another using a multi-level AI system, making complex scientific concepts accessible, engaging, and educational.     </p>
            <p className="text-lg text-gray-600 mb-6">
            We combine biology, chemistry, and artificial intelligence to model blood group transformations. Our interactive platform allows users to select any two blood types and receive a detailed simulation of how such a transformation might occur, supported by machine learning-generated biochemical data.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {/* Educational */}
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 text-center">
              <div className="flex justify-center mb-4">
                <BookOpen className="h-10 w-10 text-red-600" />
              </div>
              <img 
                src="https://www.broadgategp.co.uk/wp-content/uploads/2021/11/blood-test-london.jpeg" 
                alt="Open educational book" 
                className="rounded mb-4 w-full h-32 object-cover"
              />
              <h3 className="text-xl font-bold mb-3">Educational</h3>
              <p className="text-gray-600">
                Our content is designed for educational purposes to help understand blood type compatibility.
              </p>
            </div>

            {/* Scientifically Accurate */}
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 text-center">
              <div className="flex justify-center mb-4">
                <Award className="h-10 w-10 text-red-600" />
              </div>
              <img 
                src="https://thumbs.dreamstime.com/b/drug-synthesis-concept-chemist-working-research-lab-drug-synthesis-concept-chemist-working-research-lab-115909427.jpg" 
                alt="Scientific research lab" 
                className="rounded mb-4 w-full h-32 object-cover"
              />
              <h3 className="text-xl font-bold mb-3">Scientifically Accurate</h3>
              <p className="text-gray-600">
                Information is based on established medical knowledge about blood types and transfusions.
              </p>
            </div>

            {/* Community-Focused */}
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 text-center">
              <div className="flex justify-center mb-4">
                <Users className="h-10 w-10 text-red-600" />
              </div>
              <img 
                src="https://th.bing.com/th/id/OIP.7UPthK_gkx4gvYi8XFVWmAHaE8?w=258&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7" 
                alt="Community gathering" 
                className="rounded mb-4 w-full h-32 object-cover"
              />
              <h3 className="text-xl font-bold mb-3">Community-Focused</h3>
              <p className="text-gray-600">
                Created to benefit healthcare education and public awareness about blood donation.
              </p>
            </div>
          </div>
          
          {/* Disclaimer with an image */}
          <div className="bg-red-50 p-6 rounded-lg border border-red-100">
            <h2 className="text-2xl font-bold mb-4 text-red-700">Important Disclaimer</h2>
            <div className="md:flex md:items-center gap-4">
              <img 
                src="https://img.freepik.com/premium-vector/vector-illustration-terms-conditions-concept_108061-1932.jpg?ga=GA1.1.1005822340.1744133018&semt=ais_hybrid&w=740" 
                alt="Doctor warning" 
                className="rounded w-full md:w-48 mb-4 md:mb-0"
              />
              <p className="text-gray-700">
                This tool is for educational purposes only. Actual blood transfusions should always be performed by qualified medical professionals following established protocols. The information provided here should not be used for medical decisions without consulting healthcare providers.
              </p>
            </div>
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
