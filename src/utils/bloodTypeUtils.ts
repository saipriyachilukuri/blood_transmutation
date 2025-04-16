
// Blood compatibility logic based on simplified blood type conversion rules
// Note: This is for educational purposes and should not be used for medical advice

export type BloodType = 'A+' | 'A-' | 'B+' | 'B-' | 'AB+' | 'AB-' | 'O+' | 'O-';

// Universal donor (O-) can give to anyone
// Universal recipient (AB+) can receive from anyone

interface BloodCompatibility {
  isCompatible: boolean;
  conversionSteps: string[];
}

const bloodTypeAntibodies: Record<BloodType, string[]> = {
  'O-': [],
  'O+': ['Rh+'],
  'A-': ['A'],
  'A+': ['A', 'Rh+'],
  'B-': ['B'],
  'B+': ['B', 'Rh+'],
  'AB-': ['A', 'B'],
  'AB+': ['A', 'B', 'Rh+'],
};

// This is a simplified model for educational purposes
export function checkBloodTypeConversion(sourceType: BloodType, targetType: BloodType): BloodCompatibility {
  // Universal donor can give to anyone
  if (sourceType === 'O-') {
    return {
      isCompatible: true,
      conversionSteps: [
        "O- is the universal donor and can be given to any blood type",
        "Remove any unnecessary plasma components",
        "Ensure proper temperature during the process (2-6°C)",
        "Verify final blood product quality"
      ]
    };
  }
  
  // Universal recipient can receive from anyone
  if (targetType === 'AB+') {
    return {
      isCompatible: true,
      conversionSteps: [
        "AB+ is the universal recipient and can receive any blood type",
        "Filter out white blood cells if necessary",
        "Match for other minor antigens if required for specific patients",
        "Complete final compatibility verification"
      ]
    };
  }

  // Check specific compatibility based on antigens
  const sourceAntigens = bloodTypeAntibodies[sourceType];
  const targetAntigens = bloodTypeAntibodies[targetType];
  
  // For conversion to be possible:
  // 1. Target must have all antigens that source has
  // 2. Or we need steps to remove/modify antigens
  const missingAntigens = sourceAntigens.filter(antigen => !targetAntigens.includes(antigen));
  
  if (missingAntigens.length === 0) {
    // If target already has all antigens from source
    return {
      isCompatible: true,
      conversionSteps: [
        "Verify blood type of donor and recipient",
        "Perform cross-matching to ensure compatibility",
        "Prepare blood product for transfusion",
        "Monitor for any transfusion reactions"
      ]
    };
  } else if (sourceType.charAt(0) !== targetType.charAt(0) && 
             (sourceType.charAt(0) !== 'O' && targetType.charAt(0) !== 'AB')) {
    // Different ABO types that aren't compatible
    return {
      isCompatible: false,
      conversionSteps: []
    };
  } else if (sourceType.includes('+') && targetType.includes('-')) {
    // Rh+ to Rh- is not generally compatible
    return {
      isCompatible: false,
      conversionSteps: []
    };
  }
  
  // Some types of conversions could be theoretically possible with extra steps
  // This is simplified for educational purposes
  const conversionSteps = [
    `Extract blood components from ${sourceType} donor`,
    `Remove specific antigens (${missingAntigens.join(', ')}) through filtration`,
    "Process through specialized equipment to ensure compatibility",
    "Test compatibility before transfusion",
    "Monitor recipient for adverse reactions"
  ];
  
  return {
    isCompatible: true,
    conversionSteps
  };
}
