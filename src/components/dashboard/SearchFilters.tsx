import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface SearchFiltersProps {
  searchTerm: string;
  setSearchTerm: (term: string) => void;
  selectedType: string | null;
  setSelectedType: (type: string | null) => void;
  selectedStatus: string | null;
  setSelectedStatus: (status: string | null) => void;
  grantTypes: string[];
  statuses: string[];
}

export const SearchFilters = ({
  searchTerm,
  setSearchTerm,
  selectedType,
  setSelectedType,
  selectedStatus,
  setSelectedStatus,
  grantTypes,
  statuses,
}: SearchFiltersProps) => (
  <div className="flex flex-wrap gap-4 w-full md:w-auto">
    <div className="relative flex-1 min-w-[240px]">
      <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
      <Input
        placeholder="Search grants..."
        className="pl-10 bg-secondary border-none focus:ring-2 focus:ring-primary-accent"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
    </div>
    <Select
      value={selectedType || ""}
      onValueChange={(value) => setSelectedType(value || null)}
    >
      <SelectTrigger className="w-[180px] bg-secondary border-none focus:ring-2 focus:ring-primary-accent">
        <SelectValue placeholder="Grant Type" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="">All Types</SelectItem>
        {grantTypes.map((type) => (
          <SelectItem key={type} value={type}>
            {type}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
    <Select
      value={selectedStatus || ""}
      onValueChange={(value) => setSelectedStatus(value || null)}
    >
      <SelectTrigger className="w-[180px] bg-secondary border-none focus:ring-2 focus:ring-primary-accent">
        <SelectValue placeholder="Status" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="">All Statuses</SelectItem>
        {statuses.map((status) => (
          <SelectItem key={status} value={status}>
            {status}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  </div>
);