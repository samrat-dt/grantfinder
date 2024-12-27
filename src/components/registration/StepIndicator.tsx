interface StepIndicatorProps {
  currentStep: number;
}

export const StepIndicator = ({ currentStep }: StepIndicatorProps) => (
  <div className="flex justify-center space-x-2 pt-4">
    {[1, 2, 3].map((i) => (
      <div
        key={i}
        className={`h-2 w-2 rounded-full ${
          i === currentStep ? "bg-primary" : "bg-gray-300"
        }`}
      />
    ))}
  </div>
);