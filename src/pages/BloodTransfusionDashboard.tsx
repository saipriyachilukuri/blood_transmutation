
import React from 'react';
import BloodTransfusionHeader from '../components/CareerVisualizerHeader';
import BloodInventory from '../components/BloodInventory';
import DonationRequests from '../components/DonationRequests';
import RecentDonors from '../components/RecentDonors';
import { useToast } from '@/hooks/use-toast';
import { Button } from '@/components/ui/button';

const BloodTransfusionDashboard: React.FC = () => {
  const { toast } = useToast();
  
  const handleEmergencyRequest = () => {
    toast({
      title: "Emergency Request Initiated",
      description: "An emergency blood request has been sent to all eligible donors.",
      variant: "destructive",
    });
  };

  const handleDonationSchedule = () => {
    toast({
      title: "Donation Scheduled",
      description: "Thank you for scheduling a donation. You will receive a confirmation email shortly.",
    });
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <BloodTransfusionHeader />
      
      <div className="flex flex-col md:flex-row gap-4 mb-8">
        <Button 
          onClick={handleEmergencyRequest}
          className="flex-1 bg-red-600 hover:bg-red-700 text-white"
        >
          Initiate Emergency Request
        </Button>
        <Button 
          onClick={handleDonationSchedule}
          className="flex-1"
        >
          Schedule a Donation
        </Button>
      </div>
      
      <BloodInventory />
      <DonationRequests />
      <RecentDonors />
    </div>
  );
};

export default BloodTransfusionDashboard;
