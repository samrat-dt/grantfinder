import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

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

interface LocationStepProps {
  formData: {
    state: string;
    city: string;
  };
  onInputChange: (field: string, value: string) => void;
}

export const LocationStep = ({ formData, onInputChange }: LocationStepProps) => (
  <>
    <div className="space-y-2">
      <Label htmlFor="state">State</Label>
      <Select
        value={formData.state}
        onValueChange={(value) => onInputChange("state", value)}
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
        onChange={(e) => onInputChange("city", e.target.value)}
        required
      />
    </div>
  </>
);