import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const stages = [
  "Idea Stage",
  "Prototype Ready",
  "Early Revenue",
  "Growth Stage",
  "Scaling",
];

interface BusinessDetailsStepProps {
  formData: {
    stage: string;
    previousApplications: string;
  };
  onInputChange: (field: string, value: string) => void;
}

export const BusinessDetailsStep = ({ formData, onInputChange }: BusinessDetailsStepProps) => (
  <>
    <div className="space-y-2">
      <Label htmlFor="stage">Current Stage</Label>
      <Select
        value={formData.stage}
        onValueChange={(value) => onInputChange("stage", value)}
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
        onValueChange={(value) => onInputChange("previousApplications", value)}
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
);