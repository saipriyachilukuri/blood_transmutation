
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, Info, Droplet } from 'lucide-react';

const Navigation: React.FC = () => {
  const location = useLocation();
  
  return (
    <nav className="bg-white shadow-sm border-b">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Link to="/" className="text-red-600 font-bold text-xl flex items-center">
              <Droplet className="mr-2" />
              Blood Transmutation
            </Link>
          </div>
          <div className="flex space-x-6">
            <Link 
              to="/" 
              className={`flex items-center px-3 py-2 rounded-md text-sm font-medium ${
                location.pathname === '/' 
                  ? 'text-red-600' 
                  : 'text-gray-700 hover:text-red-600'
              }`}
            >
              <Home className="h-4 w-4 mr-2" />
              Home
            </Link>
            <Link 
              to="/about" 
              className={`flex items-center px-3 py-2 rounded-md text-sm font-medium ${
                location.pathname === '/about' 
                  ? 'text-red-600' 
                  : 'text-gray-700 hover:text-red-600'
              }`}
            >
              <Info className="h-4 w-4 mr-2" />
              About Us
            </Link>
            <Link 
              to="/converter" 
              className="flex items-center text-white bg-red-600 hover:bg-red-700 px-3 py-2 rounded-md text-sm font-medium"
            >
              <Droplet className="h-4 w-4 mr-2" />
              Converter
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
