
import React from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";

interface Donor {
  id: string;
  name: string;
  bloodType: string;
  donationDate: string;
  units: number;
  donationCenter: string;
}

const recentDonors: Donor[] = [
  {
    id: 'DON-12345',
    name: 'Alex Wilson',
    bloodType: 'O+',
    donationDate: '2023-04-16',
    units: 1,
    donationCenter: 'Central Blood Bank',
  },
  {
    id: 'DON-12346',
    name: 'Sarah Johnson',
    bloodType: 'A-',
    donationDate: '2023-04-15',
    units: 1,
    donationCenter: 'Mobile Blood Drive - Downtown',
  },
  {
    id: 'DON-12347',
    name: 'Michael Brown',
    bloodType: 'B+',
    donationDate: '2023-04-15',
    units: 2,
    donationCenter: 'University Medical Center',
  },
  {
    id: 'DON-12348',
    name: 'Emma Davis',
    bloodType: 'AB+',
    donationDate: '2023-04-14',
    units: 1,
    donationCenter: 'Regional Health Center',
  },
  {
    id: 'DON-12349',
    name: 'James Miller',
    bloodType: 'O-',
    donationDate: '2023-04-14',
    units: 1,
    donationCenter: 'Central Blood Bank',
  },
];

const RecentDonors: React.FC = () => {
  return (
    <div className="mb-8">
      <h2 className="text-2xl font-semibold mb-4">Recent Donors</h2>
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Donor ID</TableHead>
              <TableHead>Name</TableHead>
              <TableHead>Blood Type</TableHead>
              <TableHead>Date</TableHead>
              <TableHead>Units</TableHead>
              <TableHead>Donation Center</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {recentDonors.map((donor) => (
              <TableRow key={donor.id}>
                <TableCell className="font-medium">{donor.id}</TableCell>
                <TableCell>{donor.name}</TableCell>
                <TableCell>
                  <Badge variant="outline" className="bg-red-50 border-red-200 text-red-800">
                    {donor.bloodType}
                  </Badge>
                </TableCell>
                <TableCell>{donor.donationDate}</TableCell>
                <TableCell>{donor.units}</TableCell>
                <TableCell>{donor.donationCenter}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default RecentDonors;
