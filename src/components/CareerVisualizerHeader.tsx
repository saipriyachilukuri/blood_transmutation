
import React from 'react';

const CareerVisualizerHeader: React.FC = () => {
  return (
    <div className="text-center mb-8 animate-fade-in">
      <h1 className="text-4xl font-bold mb-3 bg-gradient-to-r from-career-blue to-career-purple bg-clip-text text-transparent">
        Career Path Visualizer
      </h1>
      <p className="text-lg text-gray-600 max-w-2xl mx-auto">
        Explore different career paths and the progression of skills, responsibilities, and achievements at each stage.
      </p>
    </div>
  );
};

export default CareerVisualizerHeader;
