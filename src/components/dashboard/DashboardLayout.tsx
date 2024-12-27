import { useState } from "react";
import { DashboardHeader } from "./Header";
import { SearchFilters } from "./SearchFilters";
import { GrantsList } from "./GrantsList";
import { DashboardSidebar } from "./DashboardSidebar";
import { DeadlinesCard } from "./DeadlinesCard";
import { NotificationsCard } from "./NotificationsCard";
import { ResourceCard } from "./ResourceCard";
import { mockGrants, mockNotifications, resourceLinks } from "@/utils/mockData";

interface DashboardLayoutProps {
  onEditProfile: () => void;
}

export const DashboardLayout = ({ onEditProfile }: DashboardLayoutProps) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedType, setSelectedType] = useState<string | null>(null);
  const [selectedStatus, setSelectedStatus] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
        <DashboardHeader 
          notificationCount={mockNotifications.length} 
          onEditProfile={onEditProfile}
        />
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <DeadlinesCard grants={mockGrants} />
          <NotificationsCard notifications={mockNotifications} />
          <ResourceCard resources={resourceLinks} />
        </div>

        <div className="bg-card rounded-2xl shadow-sm border border-border/5 p-8">
          <div className="space-y-8">
            <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6">
              <h2 className="text-2xl font-semibold text-foreground tracking-tight">
                Available Grants and Incentives
              </h2>
              <div className="w-full lg:w-auto">
                <SearchFilters
                  searchTerm={searchTerm}
                  setSearchTerm={setSearchTerm}
                  selectedType={selectedType}
                  setSelectedType={setSelectedType}
                  selectedStatus={selectedStatus}
                  setSelectedStatus={setSelectedStatus}
                  grantTypes={Array.from(new Set(mockGrants.map(grant => grant.type)))}
                  statuses={["Open", "Closing Soon", "Closed"]}
                />
              </div>
            </div>
            
            <GrantsList 
              searchTerm={searchTerm}
              selectedType={selectedType}
              selectedStatus={selectedStatus}
            />
          </div>
        </div>
      </div>
    </div>
  );
};