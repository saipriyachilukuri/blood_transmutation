
import React from 'react';
import { 
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle 
} from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

type BloodType = 'A+' | 'A-' | 'B+' | 'B-' | 'AB+' | 'AB-' | 'O+' | 'O-';

interface BloodInventoryItem {
  type: BloodType;
  units: number;
  capacity: number;
  lastUpdated: string;
}

const bloodInventoryData: BloodInventoryItem[] = [
  { type: 'A+', units: 45, capacity: 100, lastUpdated: '2023-04-15' },
  { type: 'A-', units: 12, capacity: 50, lastUpdated: '2023-04-15' },
  { type: 'B+', units: 32, capacity: 100, lastUpdated: '2023-04-14' },
  { type: 'B-', units: 8, capacity: 50, lastUpdated: '2023-04-16' },
  { type: 'AB+', units: 15, capacity: 50, lastUpdated: '2023-04-15' },
  { type: 'AB-', units: 5, capacity: 30, lastUpdated: '2023-04-13' },
  { type: 'O+', units: 78, capacity: 150, lastUpdated: '2023-04-16' },
  { type: 'O-', units: 25, capacity: 80, lastUpdated: '2023-04-14' },
];

const BloodInventory: React.FC = () => {
  const getInventoryStatus = (units: number, capacity: number) => {
    const percentage = (units / capacity) * 100;
    if (percentage < 20) return 'Critical';
    if (percentage < 50) return 'Low';
    return 'Adequate';
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Critical': return 'text-red-600';
      case 'Low': return 'text-amber-500';
      case 'Adequate': return 'text-green-600';
      default: return 'text-gray-600';
    }
  };

  return (
    <div className="mb-8">
      <h2 className="text-2xl font-semibold mb-4">Current Blood Inventory</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {bloodInventoryData.map((item) => {
          const status = getInventoryStatus(item.units, item.capacity);
          const percentage = (item.units / item.capacity) * 100;
          
          return (
            <Card key={item.type} className="shadow-md">
              <CardHeader className="pb-2">
                <CardTitle className="flex justify-between items-center">
                  <span className="text-2xl font-bold">{item.type}</span>
                  <span className={`text-sm font-medium ${getStatusColor(status)}`}>
                    {status}
                  </span>
                </CardTitle>
                <CardDescription>Last updated: {item.lastUpdated}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <Progress value={percentage} className="h-2" />
                  <div className="flex justify-between text-sm">
                    <span>{item.units} units</span>
                    <span className="text-gray-500">{item.capacity} capacity</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
};

export default BloodInventory;
