import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

interface BasicInfoStepProps {
  formData: {
    registrationDate: string;
    turnover: string;
  };
  onInputChange: (field: string, value: string) => void;
}

export const BasicInfoStep = ({ formData, onInputChange }: BasicInfoStepProps) => (
  <>
    <div className="space-y-2">
      <Label htmlFor="registrationDate">Startup Registration Date</Label>
      <Input
        id="registrationDate"
        type="date"
        value={formData.registrationDate}
        onChange={(e) => onInputChange("registrationDate", e.target.value)}
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
        onChange={(e) => onInputChange("turnover", e.target.value)}
        required
      />
    </div>
  </>
);