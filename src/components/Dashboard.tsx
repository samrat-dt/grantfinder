import { useState } from "react";
import { DashboardHeader } from "./dashboard/Header";
import { SearchFilters } from "./dashboard/SearchFilters";
import { GrantCard } from "./dashboard/GrantCard";
import { DeadlinesCard } from "./dashboard/DeadlinesCard";
import { NotificationsCard } from "./dashboard/NotificationsCard";
import { ResourceCard } from "./dashboard/ResourceCard";
import { mockGrants, mockNotifications, resourceLinks } from "@/utils/mockData";

interface DashboardProps {
  onEditProfile: () => void;
}

export const Dashboard = ({ onEditProfile }: DashboardProps) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedType, setSelectedType] = useState<string | null>(null);
  const [selectedStatus, setSelectedStatus] = useState<string | null>(null);
  const [showAllGrants, setShowAllGrants] = useState(false);

  const grantTypes = Array.from(new Set(mockGrants.map(grant => grant.type)));
  const statuses = Array.from(new Set(mockGrants.map(grant => grant.status)));

  const filteredGrants = mockGrants.filter(grant => {
    const matchesSearch = grant.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         grant.eligibility.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesType = !selectedType || grant.type === selectedType;
    const matchesStatus = !selectedStatus || grant.status === selectedStatus;
    return matchesSearch && matchesType && matchesStatus;
  });

  const displayedGrants = showAllGrants ? filteredGrants : filteredGrants.slice(0, 3);

  return (
    <div className="container mx-auto p-6 space-y-6">
      <DashboardHeader 
        notificationCount={mockNotifications.length} 
        onEditProfile={onEditProfile}
      />
      
      <div className="grid md:grid-cols-3 gap-6">
        <DeadlinesCard grants={mockGrants} />
        <NotificationsCard notifications={mockNotifications} />
        <ResourceCard resources={resourceLinks} />
      </div>

      <div className="bg-white rounded-2xl shadow-sm p-8">
        <div className="space-y-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <h2 className="text-2xl font-semibold text-primary">Available Grants and Incentives</h2>
            <SearchFilters
              searchTerm={searchTerm}
              setSearchTerm={setSearchTerm}
              selectedType={selectedType}
              setSelectedType={setSelectedType}
              selectedStatus={selectedStatus}
              setSelectedStatus={setSelectedStatus}
              grantTypes={grantTypes}
              statuses={statuses}
            />
          </div>
          
          <div className="space-y-4">
            {displayedGrants.length > 0 ? (
              <>
                {displayedGrants.map((grant) => (
                  <GrantCard key={grant.id} grant={grant} />
                ))}
                {filteredGrants.length > 3 && (
                  <div className="flex justify-center">
                    <button
                      onClick={() => setShowAllGrants(!showAllGrants)}
                      className="text-primary hover:text-primary/80 font-medium"
                    >
                      {showAllGrants ? "Show Less" : "View All"}
                    </button>
                  </div>
                )}
              </>
            ) : (
              <div className="text-center py-8 text-muted-foreground">
                No grants found matching your criteria.
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};