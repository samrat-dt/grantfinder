import { Button } from "@/components/ui/button";

interface NavigationButtonsProps {
  step: number;
  onBack: () => void;
  onNext: () => void;
}

export const NavigationButtons = ({ step, onBack, onNext }: NavigationButtonsProps) => (
  <div className="flex justify-between pt-4">
    <Button
      type="button"
      variant="outline"
      onClick={onBack}
      disabled={step === 1}
    >
      Back
    </Button>
    {step < 3 ? (
      <Button type="button" onClick={onNext}>
        Next
      </Button>
    ) : (
      <Button type="submit">Complete Registration</Button>
    )}
  </div>
);