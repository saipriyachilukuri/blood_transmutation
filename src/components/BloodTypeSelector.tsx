
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';

const bloodTypes = ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'];

interface BloodTypeSelectorProps {
  sourceType: string;
  targetType: string;
  setSourceType: (type: string) => void;
  setTargetType: (type: string) => void;
  onCheckCompatibility: () => void;
}

const BloodTypeSelector: React.FC<BloodTypeSelectorProps> = ({
  sourceType,
  targetType,
  setSourceType,
  setTargetType,
  onCheckCompatibility
}) => {
  return (
    <Card className="mb-6">
      <CardHeader>
        <CardTitle>Blood Type Conversion Check</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <Label htmlFor="sourceType" className="block mb-2">Source Blood Type</Label>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              {bloodTypes.map(type => (
                <Button 
                  key={`source-${type}`}
                  variant={sourceType === type ? "default" : "outline"}
                  className={sourceType === type ? "bg-red-600 hover:bg-red-700" : ""}
                  onClick={() => setSourceType(type)}
                >
                  {type}
                </Button>
              ))}
            </div>
          </div>
          
          <div>
            <Label htmlFor="targetType" className="block mb-2">Target Blood Type</Label>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              {bloodTypes.map(type => (
                <Button 
                  key={`target-${type}`}
                  variant={targetType === type ? "default" : "outline"}
                  className={targetType === type ? "bg-red-600 hover:bg-red-700" : ""}
                  onClick={() => setTargetType(type)}
                >
                  {type}
                </Button>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-6 flex justify-center">
          <Button 
            onClick={onCheckCompatibility}
            className="px-8 bg-red-600 hover:bg-red-700"
          >
            Check Conversion Compatibility
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default BloodTypeSelector;
