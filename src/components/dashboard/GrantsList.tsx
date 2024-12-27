import { useState } from "react";
import { GrantCard } from "./GrantCard";
import { Button } from "@/components/ui/button";
import { mockGrants } from "@/utils/mockData";

interface GrantsListProps {
  searchTerm: string;
  selectedType: string | null;
  selectedStatus: string | null;
}

export const GrantsList = ({ searchTerm, selectedType, selectedStatus }: GrantsListProps) => {
  const [showAllGrants, setShowAllGrants] = useState(false);

  const filteredGrants = mockGrants.filter(grant => {
    const matchesSearch = grant.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         grant.eligibility.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesType = !selectedType || grant.type === selectedType;
    const matchesStatus = !selectedStatus || grant.status === selectedStatus;
    return matchesSearch && matchesType && matchesStatus;
  });

  const displayedGrants = showAllGrants ? filteredGrants : filteredGrants.slice(0, 3);

  return (
    <div className="space-y-6">
      {displayedGrants.length > 0 ? (
        <>
          <div className="grid gap-6">
            {displayedGrants.map((grant) => (
              <GrantCard key={grant.id} grant={grant} />
            ))}
          </div>
          {filteredGrants.length > 3 && (
            <div className="flex justify-center">
              <Button
                variant="outline"
                onClick={() => setShowAllGrants(!showAllGrants)}
                className="mt-4 hover:bg-secondary transition-colors"
              >
                {showAllGrants ? "Show Less" : "View All"}
              </Button>
            </div>
          )}
        </>
      ) : (
        <div className="text-center py-8 text-muted-foreground animate-fade-in">
          No grants found matching your criteria. Try adjusting your search or filters.
        </div>
      )}
    </div>
  );
};