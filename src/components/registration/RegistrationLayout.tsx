import { useState } from "react";
import { BasicInfoStep } from "./steps/BasicInfoStep";
import { LocationStep } from "./steps/LocationStep";
import { BusinessDetailsStep } from "./steps/BusinessDetailsStep";
import { StepIndicator } from "./StepIndicator";
import { NavigationButtons } from "./NavigationButtons";
import { useToast } from "@/hooks/use-toast";

interface RegistrationLayoutProps {
  onComplete: () => void;
}

export const RegistrationLayout = ({ onComplete }: RegistrationLayoutProps) => {
  const { toast } = useToast();
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    registrationDate: "",
    turnover: "",
    industry: "",
    state: "",
    city: "",
    stage: "",
    previousApplications: "no",
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleNext = () => {
    if (step < 3) setStep(step + 1);
  };

  const handleBack = () => {
    if (step > 1) setStep(step - 1);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Registration Successful",
      description: "Your profile has been created successfully.",
    });
    onComplete();
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 animate-fade-in">
      <div className="space-y-4">
        {step === 1 && (
          <BasicInfoStep
            formData={formData}
            onInputChange={handleInputChange}
          />
        )}
        {step === 2 && (
          <LocationStep
            formData={formData}
            onInputChange={handleInputChange}
          />
        )}
        {step === 3 && (
          <BusinessDetailsStep
            formData={formData}
            onInputChange={handleInputChange}
          />
        )}
      </div>

      <NavigationButtons
        step={step}
        onBack={handleBack}
        onNext={handleNext}
      />

      <StepIndicator currentStep={step} />
    </form>
  );
};