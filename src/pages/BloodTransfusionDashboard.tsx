
import React, { useState } from 'react';
import Navigation from '../components/Navigation';
import BloodTransfusionHeader from '../components/BloodTransfusionHeader';
import BloodTypeSelector from '../components/BloodTypeSelector';
import ConversionProcess from '../components/ConversionProcess';
import { useToast } from '@/hooks/use-toast';
import { checkBloodTypeConversion, type BloodType } from '../utils/bloodTypeUtils';

const BloodTransfusionDashboard: React.FC = () => {
  const { toast } = useToast();
  const [sourceType, setSourceType] = useState<BloodType>('A+');
  const [targetType, setTargetType] = useState<BloodType>('B+');
  const [showResults, setShowResults] = useState(false);
  const [compatibility, setCompatibility] = useState({
    isCompatible: false,
    conversionSteps: [] as string[]
  });
  
  const handleCheckCompatibility = () => {
    if (sourceType === targetType) {
      toast({
        title: "Same Blood Types",
        description: "The source and target blood types are the same. No conversion needed.",
        variant: "default",
      });
      setCompatibility({
        isCompatible: true,
        conversionSteps: ["No conversion needed - blood types are identical"]
      });
    } else {
      const result = checkBloodTypeConversion(sourceType, targetType);
      setCompatibility(result);
      
      if (result.isCompatible) {
        toast({
          title: "Conversion Possible",
          description: `${sourceType} blood can be converted to ${targetType}`,
          variant: "default",
        });
      } else {
        toast({
          title: "Conversion Not Possible",
          description: `${sourceType} blood cannot be safely converted to ${targetType}`,
          variant: "destructive",
        });
      }
    }
    setShowResults(true);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <div className="container mx-auto px-4 py-8">
        <BloodTransfusionHeader />
        
        <BloodTypeSelector
          sourceType={sourceType}
          targetType={targetType}
          setSourceType={(type) => setSourceType(type as BloodType)}
          setTargetType={(type) => setTargetType(type as BloodType)}
          onCheckCompatibility={handleCheckCompatibility}
        />
        
        {showResults && (
          <ConversionProcess
            sourceType={sourceType}
            targetType={targetType}
            isCompatible={compatibility.isCompatible}
            conversionSteps={compatibility.conversionSteps}
          />
        )}
      </div>
    </div>
  );
};

export default BloodTransfusionDashboard;
