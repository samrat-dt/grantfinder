import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";

const industries = [
  "Technology",
  "Healthcare",
  "Education",
  "Finance",
  "E-commerce",
  "Manufacturing",
  "Agriculture",
  "Other",
];

const stages = [
  "Idea Stage",
  "Prototype Ready",
  "Early Revenue",
  "Growth Stage",
  "Scaling",
];

const states = [
  "Andhra Pradesh",
  "Delhi",
  "Gujarat",
  "Karnataka",
  "Maharashtra",
  "Tamil Nadu",
  "Telangana",
  "Other",
];

export const RegistrationForm = ({ onComplete }: { onComplete: () => void }) => {
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
          <>
            <div className="space-y-2">
              <Label htmlFor="registrationDate">Startup Registration Date</Label>
              <Input
                id="registrationDate"
                type="date"
                value={formData.registrationDate}
                onChange={(e) => handleInputChange("registrationDate", e.target.value)}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="turnover">Annual Turnover (in INR)</Label>
              <Input
                id="turnover"
                type="number"
                placeholder="Enter annual turnover"
                value={formData.turnover}
                onChange={(e) => handleInputChange("turnover", e.target.value)}
                required
              />
            </div>
          </>
        )}

        {step === 2 && (
          <>
            <div className="space-y-2">
              <Label htmlFor="industry">Industry Type</Label>
              <Select
                value={formData.industry}
                onValueChange={(value) => handleInputChange("industry", value)}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select industry" />
                </SelectTrigger>
                <SelectContent>
                  {industries.map((industry) => (
                    <SelectItem key={industry} value={industry.toLowerCase()}>
                      {industry}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="state">State</Label>
              <Select
                value={formData.state}
                onValueChange={(value) => handleInputChange("state", value)}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select state" />
                </SelectTrigger>
                <SelectContent>
                  {states.map((state) => (
                    <SelectItem key={state} value={state.toLowerCase()}>
                      {state}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="city">City</Label>
              <Input
                id="city"
                placeholder="Enter city"
                value={formData.city}
                onChange={(e) => handleInputChange("city", e.target.value)}
                required
              />
            </div>
          </>
        )}

        {step === 3 && (
          <>
            <div className="space-y-2">
              <Label htmlFor="stage">Current Stage</Label>
              <Select
                value={formData.stage}
                onValueChange={(value) => handleInputChange("stage", value)}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select stage" />
                </SelectTrigger>
                <SelectContent>
                  {stages.map((stage) => (
                    <SelectItem key={stage} value={stage.toLowerCase()}>
                      {stage}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="previousApplications">Previous Grant Applications?</Label>
              <Select
                value={formData.previousApplications}
                onValueChange={(value) => handleInputChange("previousApplications", value)}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select answer" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="yes">Yes</SelectItem>
                  <SelectItem value="no">No</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </>
        )}
      </div>

      <div className="flex justify-between pt-4">
        <Button
          type="button"
          variant="outline"
          onClick={handleBack}
          disabled={step === 1}
        >
          Back
        </Button>
        {step < 3 ? (
          <Button type="button" onClick={handleNext}>
            Next
          </Button>
        ) : (
          <Button type="submit">Complete Registration</Button>
        )}
      </div>

      <div className="flex justify-center space-x-2 pt-4">
        {[1, 2, 3].map((i) => (
          <div
            key={i}
            className={`h-2 w-2 rounded-full ${
              i === step ? "bg-primary" : "bg-gray-300"
            }`}
          />
        ))}
      </div>
    </form>
  );
};