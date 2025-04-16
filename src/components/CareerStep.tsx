
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle } from "lucide-react";
import { CareerStep as CareerStepType } from '@/data/careerData';
import { cn } from '@/lib/utils';

interface CareerStepProps {
  step: CareerStepType;
  isActive: boolean;
  index: number;
}

const CareerStep: React.FC<CareerStepProps> = ({ step, isActive, index }) => {
  // Map color names to actual Tailwind classes
  const getBorderColor = () => {
    switch(step.color) {
      case 'career-blue': return 'border-career-blue';
      case 'career-teal': return 'border-career-teal';
      case 'career-indigo': return 'border-career-indigo';
      case 'career-purple': return 'border-career-purple';
      case 'career-green': return 'border-career-green';
      default: return 'border-career-blue';
    }
  };

  return (
    <div 
      className={cn(
        "transition-all duration-500", 
        isActive ? "opacity-100 scale-100" : "opacity-50 scale-95"
      )}
      style={{ animationDelay: `${index * 150}ms` }}
    >
      <Card className={cn(
        "border-l-4 transition-all duration-300",
        getBorderColor(),
        isActive ? "shadow-lg" : "shadow-sm"
      )}>
        <CardHeader>
          <div className="flex justify-between items-center">
            <CardTitle className="text-xl font-bold">{step.title}</CardTitle>
            <Badge variant="outline" className="text-xs">{step.period}</Badge>
          </div>
          <CardDescription className="text-base font-medium">{step.company}</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="mb-4">{step.description}</p>
          
          <div className="mb-4">
            <p className="text-sm font-semibold mb-2">Skills:</p>
            <div className="flex flex-wrap gap-2">
              {step.skills.map(skill => (
                <Badge key={skill} variant="secondary" className="text-xs">{skill}</Badge>
              ))}
            </div>
          </div>
          
          <div>
            <p className="text-sm font-semibold mb-2">Key Achievements:</p>
            <ul className="space-y-1">
              {step.achievements.map(achievement => (
                <li key={achievement} className="flex items-start text-sm">
                  <CheckCircle className="h-4 w-4 mr-2 text-green-500 mt-0.5" />
                  <span>{achievement}</span>
                </li>
              ))}
            </ul>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default CareerStep;
