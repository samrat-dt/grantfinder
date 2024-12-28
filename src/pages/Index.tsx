import { useState } from "react";
import { RegistrationLayout } from "@/components/registration/RegistrationLayout";
import { DashboardLayout } from "@/components/dashboard/DashboardLayout";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

const Index = () => {
  const [isRegistered, setIsRegistered] = useState(false);
  const [isEditing, setIsEditing] = useState(false);

  const handleEditProfile = () => {
    setIsEditing(true);
    setIsRegistered(false);
  };

  const handleBackToDashboard = () => {
    setIsEditing(false);
    setIsRegistered(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 transition-all duration-300">
      {!isRegistered ? (
        <div className="container mx-auto py-12 px-4">
          <div className="max-w-2xl mx-auto">
            {isEditing && (
              <Button
                variant="ghost"
                onClick={handleBackToDashboard}
                className="mb-6 hover:scale-105 transition-all duration-300 text-primary"
              >
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Dashboard
              </Button>
            )}
            <div className="text-center mb-8 animate-fade-in">
              <div className="flex items-center justify-center gap-3 mb-4">
                <img src="/logo.svg" alt="Grant Route" className="h-12 w-12" />
                <h1 className="text-4xl font-bold text-primary">
                  Grant Route
                </h1>
              </div>
              <p className="text-gray-600">
                {isEditing 
                  ? "Update your startup profile to discover more relevant grants"
                  : "Complete your profile to discover relevant grants and incentives for your startup"
                }
              </p>
            </div>
            <div className="bg-white/80 backdrop-blur-sm p-8 rounded-xl shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300">
              <RegistrationLayout onComplete={() => setIsRegistered(true)} />
            </div>
          </div>
        </div>
      ) : (
        <DashboardLayout onEditProfile={handleEditProfile} />
      )}
    </div>
  );
};

export default Index;