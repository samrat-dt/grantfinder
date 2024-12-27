import { useState } from "react";
import { GrantCard } from "./GrantCard";
import { Button } from "@/components/ui/button";
import { mockGrants } from "@/utils/mockData";

interface GrantsListProps {
  searchTerm: string;
  selectedType: string | null;
}

export const GrantsList = ({ searchTerm, selectedType }: GrantsListProps) => {
  const [showAllGrants, setShowAllGrants] = useState(false);

  const filteredGrants = mockGrants.filter(grant => {
    const matchesSearch = grant.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         grant.eligibility.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesType = !selectedType || grant.type === selectedType;
    return matchesSearch && matchesType;
  });

  const displayedGrants = showAllGrants ? filteredGrants : filteredGrants.slice(0, 3);

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-primary mb-4">Available Grants and Incentives</h2>
        <Button
          variant="outline"
          onClick={() => setShowAllGrants(!showAllGrants)}
          className="whitespace-nowrap hover:scale-105 transition-transform"
        >
          {showAllGrants ? "Show Less" : "View All"}
        </Button>
      </div>
      
      <div className="space-y-6">
        {displayedGrants.length > 0 ? (
          displayedGrants.map((grant) => (
            <GrantCard key={grant.id} grant={grant} />
          ))
        ) : (
          <div className="text-center py-8 text-gray-500 animate-fade-in">
            No grants found matching your criteria. Try adjusting your search or filters.
          </div>
        )}
      </div>
    </div>
  );
};