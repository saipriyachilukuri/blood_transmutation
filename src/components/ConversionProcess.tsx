
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from '@/components/ui/table';
import { Droplet, ChevronRight, AlertCircle, CheckCircle } from 'lucide-react';

interface ConversionProcessProps {
  sourceType: string;
  targetType: string;
  isCompatible: boolean;
  conversionSteps: string[];
}

const ConversionProcess: React.FC<ConversionProcessProps> = ({
  sourceType,
  targetType,
  isCompatible,
  conversionSteps
}) => {
  if (!sourceType || !targetType) {
    return null;
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <div className="flex items-center">
            <Droplet className="h-5 w-5 text-red-600 mr-1" />
            <span>{sourceType}</span>
          </div>
          <ChevronRight className="h-5 w-5" />
          <div className="flex items-center">
            <Droplet className="h-5 w-5 text-red-600 mr-1" />
            <span>{targetType}</span>
          </div>
          {isCompatible ? 
            <CheckCircle className="h-5 w-5 ml-2 text-green-600" /> : 
            <AlertCircle className="h-5 w-5 ml-2 text-red-600" />
          }
        </CardTitle>
      </CardHeader>
      <CardContent>
        {isCompatible ? (
          <div>
            <p className="text-green-600 font-medium mb-4">
              Conversion is possible from {sourceType} to {targetType}
            </p>
            <h3 className="font-medium mb-2">Conversion Process:</h3>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Step</TableHead>
                  <TableHead>Process</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {conversionSteps.map((step, index) => (
                  <TableRow key={index}>
                    <TableCell className="font-medium">{index + 1}</TableCell>
                    <TableCell>{step}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        ) : (
          <div className="text-red-600">
            <p className="font-medium">
              Blood type {sourceType} cannot be converted to {targetType}
            </p>
            <p className="mt-2">
              The antigens present in {sourceType} blood are incompatible with {targetType} blood type
              and could cause a dangerous transfusion reaction.
            </p>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default ConversionProcess;
