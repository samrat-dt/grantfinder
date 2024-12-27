import { useState } from "react";
import { DashboardHeader } from "./Header";
import { SearchFilters } from "./SearchFilters";
import { GrantsList } from "./GrantsList";
import { DashboardSidebar } from "./DashboardSidebar";

interface DashboardLayoutProps {
  onEditProfile: () => void;
}

export const DashboardLayout = ({ onEditProfile }: DashboardLayoutProps) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedType, setSelectedType] = useState<string | null>(null);

  return (
    <div className="container mx-auto p-6 space-y-6 transition-all duration-300">
      <DashboardHeader 
        notificationCount={3} 
        onEditProfile={onEditProfile}
      />
      
      <SearchFilters
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        selectedType={selectedType}
        setSelectedType={setSelectedType}
        grantTypes={["Funding", "Tax Benefit", "Competition", "Grant"]}
      />

      <div className="grid md:grid-cols-4 gap-6">
        <div className="md:col-span-3">
          <GrantsList 
            searchTerm={searchTerm}
            selectedType={selectedType}
          />
        </div>
        <div className="md:col-span-1">
          <DashboardSidebar />
        </div>
      </div>
    </div>
  );
};