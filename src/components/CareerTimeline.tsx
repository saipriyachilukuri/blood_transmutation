
import React, { useState } from 'react';
import { CareerPath } from '@/data/careerData';
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import CareerStep from './CareerStep';
import { cn } from '@/lib/utils';

interface CareerTimelineProps {
  careerPath: CareerPath;
}

const CareerTimeline: React.FC<CareerTimelineProps> = ({ careerPath }) => {
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const currentStep = careerPath.steps[currentStepIndex];

  const goToNextStep = () => {
    if (currentStepIndex < careerPath.steps.length - 1) {
      setCurrentStepIndex(currentStepIndex + 1);
    }
  };

  const goToPreviousStep = () => {
    if (currentStepIndex > 0) {
      setCurrentStepIndex(currentStepIndex - 1);
    }
  };

  const goToStep = (index: number) => {
    setCurrentStepIndex(index);
  };

  // Map color names to actual Tailwind classes
  const getDotColor = (color: string, isActive: boolean) => {
    if (!isActive) return 'bg-gray-300 hover:bg-gray-400';
    
    switch(color) {
      case 'career-blue': return 'bg-career-blue';
      case 'career-teal': return 'bg-career-teal';
      case 'career-indigo': return 'bg-career-indigo';
      case 'career-purple': return 'bg-career-purple';
      case 'career-green': return 'bg-career-green';
      default: return 'bg-career-blue';
    }
  };

  const getProgressBarColor = () => {
    switch(currentStep.color) {
      case 'career-blue': return 'bg-career-blue';
      case 'career-teal': return 'bg-career-teal';
      case 'career-indigo': return 'bg-career-indigo';
      case 'career-purple': return 'bg-career-purple';
      case 'career-green': return 'bg-career-green';
      default: return 'bg-career-blue';
    }
  };

  return (
    <div className="w-full max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold mb-6 text-center">{careerPath.name} Path</h2>
      
      {/* Timeline navigator */}
      <div className="flex items-center justify-center mb-8">
        <Button 
          variant="outline" 
          size="icon" 
          onClick={goToPreviousStep}
          disabled={currentStepIndex === 0}
          className="mr-4"
        >
          <ChevronLeft className="h-4 w-4" />
        </Button>
        
        <div className="flex space-x-2">
          {careerPath.steps.map((step, index) => (
            <button
              key={step.id}
              onClick={() => goToStep(index)}
              className={cn(
                "w-3 h-3 rounded-full transition-all duration-300",
                getDotColor(step.color, currentStepIndex === index),
                currentStepIndex === index ? "scale-125" : ""
              )}
              aria-label={`Go to step ${index + 1}`}
            />
          ))}
        </div>
        
        <Button 
          variant="outline" 
          size="icon" 
          onClick={goToNextStep}
          disabled={currentStepIndex === careerPath.steps.length - 1}
          className="ml-4"
        >
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>

      {/* Display the current career step */}
      <div className="mb-8 animate-fade-in">
        <CareerStep 
          step={currentStep} 
          isActive={true} 
          index={currentStepIndex} 
        />
      </div>
      
      {/* Progress bar */}
      <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
        <div 
          className={cn("h-full transition-all duration-500 ease-in-out", getProgressBarColor())}
          style={{ width: `${((currentStepIndex + 1) / careerPath.steps.length) * 100}%` }}
        />
      </div>
      
      <div className="mt-2 text-sm text-gray-500 flex justify-between">
        <span>Start</span>
        <span>Current Progress</span>
        <span>Goal</span>
      </div>
    </div>
  );
};

export default CareerTimeline;
