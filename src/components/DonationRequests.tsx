
import React from 'react';
import { 
  Card,
  CardContent,
  CardHeader,
  CardTitle
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface DonationRequest {
  id: string;
  patientName: string;
  bloodType: string;
  unitsNeeded: number;
  urgency: 'High' | 'Medium' | 'Low';
  hospital: string;
  requestDate: string;
}

const donationRequests: DonationRequest[] = [
  {
    id: 'REQ-001',
    patientName: 'John Doe',
    bloodType: 'O+',
    unitsNeeded: 3,
    urgency: 'High',
    hospital: 'City General Hospital',
    requestDate: '2023-04-16',
  },
  {
    id: 'REQ-002',
    patientName: 'Mary Smith',
    bloodType: 'AB-',
    unitsNeeded: 2,
    urgency: 'Medium',
    hospital: 'St. Joseph Medical Center',
    requestDate: '2023-04-15',
  },
  {
    id: 'REQ-003',
    patientName: 'Robert Johnson',
    bloodType: 'B+',
    unitsNeeded: 1,
    urgency: 'Low',
    hospital: 'Riverside Community Hospital',
    requestDate: '2023-04-14',
  },
  {
    id: 'REQ-004',
    patientName: 'Elizabeth Brown',
    bloodType: 'A+',
    unitsNeeded: 4,
    urgency: 'High',
    hospital: 'Memorial Hospital',
    requestDate: '2023-04-16',
  },
];

const DonationRequests: React.FC = () => {
  const getUrgencyColor = (urgency: string) => {
    switch (urgency) {
      case 'High': return 'bg-red-100 text-red-800 border-red-200';
      case 'Medium': return 'bg-amber-100 text-amber-800 border-amber-200';
      case 'Low': return 'bg-green-100 text-green-800 border-green-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  return (
    <div className="mb-8">
      <h2 className="text-2xl font-semibold mb-4">Active Donation Requests</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {donationRequests.map((request) => (
          <Card key={request.id} className="shadow-md">
            <CardHeader className="pb-2">
              <div className="flex justify-between items-center">
                <CardTitle className="text-lg font-semibold">
                  {request.patientName}
                </CardTitle>
                <Badge className={getUrgencyColor(request.urgency)}>
                  {request.urgency} Urgency
                </Badge>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-2 text-sm">
                <div>
                  <p className="text-gray-500">Request ID</p>
                  <p className="font-medium">{request.id}</p>
                </div>
                <div>
                  <p className="text-gray-500">Blood Type</p>
                  <p className="font-medium">{request.bloodType}</p>
                </div>
                <div>
                  <p className="text-gray-500">Units Needed</p>
                  <p className="font-medium">{request.unitsNeeded}</p>
                </div>
                <div>
                  <p className="text-gray-500">Hospital</p>
                  <p className="font-medium">{request.hospital}</p>
                </div>
                <div className="col-span-2">
                  <p className="text-gray-500">Request Date</p>
                  <p className="font-medium">{request.requestDate}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default DonationRequests;
