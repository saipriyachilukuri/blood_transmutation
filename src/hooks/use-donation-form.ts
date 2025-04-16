
import { useState } from 'react';
import { useToast } from './use-toast';

interface DonationFormData {
  firstName: string;
  lastName: string;
  bloodType: string;
  age: number;
  weight: number;
  lastDonation: string;
  medicalConditions: string;
  contactNumber: string;
  email: string;
}

interface UseDonationFormReturn {
  formData: DonationFormData;
  updateField: (field: keyof DonationFormData, value: any) => void;
  resetForm: () => void;
  submitForm: () => void;
  isEligible: boolean;
  checkEligibility: () => boolean;
  isSubmitting: boolean;
}

const initialFormData: DonationFormData = {
  firstName: '',
  lastName: '',
  bloodType: '',
  age: 0,
  weight: 0,
  lastDonation: '',
  medicalConditions: '',
  contactNumber: '',
  email: '',
};

export const useDonationForm = (): UseDonationFormReturn => {
  const [formData, setFormData] = useState<DonationFormData>(initialFormData);
  const [isEligible, setIsEligible] = useState<boolean>(false);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const { toast } = useToast();

  const updateField = (field: keyof DonationFormData, value: any) => {
    setFormData(prevData => ({
      ...prevData,
      [field]: value
    }));
  };

  const resetForm = () => {
    setFormData(initialFormData);
    setIsEligible(false);
  };

  const checkEligibility = () => {
    // Basic eligibility rules
    const isAgeEligible = formData.age >= 18 && formData.age <= 65;
    const isWeightEligible = formData.weight >= 50; // kg
    
    // Check if last donation was at least 56 days ago
    const lastDonationDate = formData.lastDonation ? new Date(formData.lastDonation) : null;
    const currentDate = new Date();
    const daysSinceLastDonation = lastDonationDate 
      ? Math.floor((currentDate.getTime() - lastDonationDate.getTime()) / (1000 * 60 * 60 * 24))
      : 100; // If no previous donation, set to large number
    
    const isDonationIntervalEligible = daysSinceLastDonation >= 56;
    
    // Medical conditions check (simplified)
    const hasMedicalIssues = formData.medicalConditions.toLowerCase().includes('yes');
    
    const eligible = isAgeEligible && isWeightEligible && isDonationIntervalEligible && !hasMedicalIssues;
    setIsEligible(eligible);
    
    return eligible;
  };

  const submitForm = async () => {
    setIsSubmitting(true);
    
    // Perform eligibility check
    const eligible = checkEligibility();
    
    if (!eligible) {
      toast({
        title: "Not eligible to donate",
        description: "Based on the information provided, you may not be eligible to donate blood at this time.",
        variant: "destructive",
      });
      setIsSubmitting(false);
      return;
    }
    
    // Simulate API call
    try {
      // Mock API delay
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      toast({
        title: "Donation application submitted",
        description: "Thank you for your willingness to donate. We'll contact you shortly to confirm your appointment.",
      });
      
      resetForm();
    } catch (error) {
      toast({
        title: "Submission failed",
        description: "There was an error submitting your application. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return {
    formData,
    updateField,
    resetForm,
    submitForm,
    isEligible,
    checkEligibility,
    isSubmitting
  };
};
