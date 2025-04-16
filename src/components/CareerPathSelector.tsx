
import React from 'react';
import { CareerPath } from '@/data/careerData';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import CareerTimeline from './CareerTimeline';

interface CareerPathSelectorProps {
  careerPaths: CareerPath[];
}

const CareerPathSelector: React.FC<CareerPathSelectorProps> = ({ careerPaths }) => {
  return (
    <Tabs defaultValue={careerPaths[0].name} className="w-full">
      <TabsList className="grid grid-cols-2 mb-8">
        {careerPaths.map(path => (
          <TabsTrigger 
            key={path.name} 
            value={path.name}
            className="text-base font-medium"
          >
            {path.name}
          </TabsTrigger>
        ))}
      </TabsList>
      
      {careerPaths.map(path => (
        <TabsContent key={path.name} value={path.name} className="mt-0">
          <CareerTimeline careerPath={path} />
        </TabsContent>
      ))}
    </Tabs>
  );
};

export default CareerPathSelector;
