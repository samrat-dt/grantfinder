import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

interface SearchFiltersProps {
  searchTerm: string;
  setSearchTerm: (term: string) => void;
  selectedType: string | null;
  setSelectedType: (type: string | null) => void;
  grantTypes: string[];
}

export const SearchFilters = ({
  searchTerm,
  setSearchTerm,
  selectedType,
  setSelectedType,
  grantTypes,
}: SearchFiltersProps) => (
  <div className="flex flex-col md:flex-row gap-4 mb-6 animate-fade-in">
    <div className="relative flex-1">
      <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
      <Input
        placeholder="Search grants and incentives..."
        className="pl-10 transition-all hover:border-primary focus:border-primary"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
    </div>
    <div className="flex gap-2 flex-wrap">
      <Button
        variant={selectedType === null ? "default" : "outline"}
        onClick={() => setSelectedType(null)}
        className="whitespace-nowrap hover:scale-105 transition-transform"
      >
        All Types
      </Button>
      {grantTypes.map((type) => (
        <Button
          key={type}
          variant={selectedType === type ? "default" : "outline"}
          onClick={() => setSelectedType(type)}
          className="whitespace-nowrap hover:scale-105 transition-transform"
        >
          {type}
        </Button>
      ))}
    </div>
  </div>
);