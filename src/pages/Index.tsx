import { useState } from "react";
import { RegistrationForm } from "@/components/RegistrationForm";
import { Dashboard } from "@/components/Dashboard";

const Index = () => {
  const [isRegistered, setIsRegistered] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50">
      {!isRegistered ? (
        <div className="container mx-auto py-12 px-4">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-8">
              <h1 className="text-4xl font-bold text-primary mb-4">
                Welcome to StartupGrants India
              </h1>
              <p className="text-gray-600">
                Complete your profile to discover relevant grants and incentives for your startup
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <RegistrationForm onComplete={() => setIsRegistered(true)} />
            </div>
          </div>
        </div>
      ) : (
        <Dashboard />
      )}
    </div>
  );
};

export default Index;