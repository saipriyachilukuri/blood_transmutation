
import React from 'react';
import CareerVisualizerHeader from '../components/CareerVisualizerHeader';
import CareerPathSelector from '../components/CareerPathSelector';
import { careerPaths } from '../data/careerData';
import { Button } from "@/components/ui/button";
import { FileJson, Github } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 py-12">
      <div className="container mx-auto px-4">
        <CareerVisualizerHeader />
        
        <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-md p-6 mb-10">
          <CareerPathSelector careerPaths={careerPaths} />
        </div>
        
        <div className="flex justify-center space-x-4">
          <Button variant="outline" className="flex items-center">
            <FileJson className="mr-2 h-5 w-5" />
            Export as JSON
          </Button>
          <Button className="flex items-center">
            <Github className="mr-2 h-5 w-5" />
            View on GitHub
          </Button>
        </div>
      </div>
      
      <footer className="mt-16 text-center text-sm text-gray-500">
        <p>Career Path Visualizer &copy; {new Date().getFullYear()}</p>
      </footer>
    </div>
  );
};

export default Index;
