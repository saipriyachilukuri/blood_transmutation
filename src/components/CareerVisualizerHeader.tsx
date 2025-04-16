
import React from 'react';

const BloodTransfusionHeader: React.FC = () => {
  return (
    <div className="text-center mb-8 animate-fade-in">
      <h1 className="text-4xl font-bold mb-3 bg-gradient-to-r from-red-600 to-red-800 bg-clip-text text-transparent">
        Blood Transfusion Management System
      </h1>
      <p className="text-lg text-gray-600 max-w-2xl mx-auto">
        Efficiently manage blood donations, inventory, and transfusion requests to save lives.
      </p>
    </div>
  );
};

export default BloodTransfusionHeader;
