import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
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
  <div className="flex flex-col sm:flex-row gap-4 w-full">
    <div className="relative flex-1">
      <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground pointer-events-none" />
      <Input
        placeholder="Search grants..."
        className="pl-11 bg-secondary border-none focus:ring-2 focus:ring-primary/50 h-12 rounded-full"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
    </div>
    <Select
      value={selectedType || "all"}
      onValueChange={(value) => setSelectedType(value === "all" ? null : value)}
    >
      <SelectTrigger className="w-[180px] bg-secondary border-none focus:ring-2 focus:ring-primary/50 h-12 rounded-full">
        <SelectValue placeholder="Grant Type" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="all">All Types</SelectItem>
        {grantTypes.map((type) => (
          <SelectItem key={type} value={type}>
            {type}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
    <Select
      value={selectedStatus || "all"}
      onValueChange={(value) => setSelectedStatus(value === "all" ? null : value)}
    >
      <SelectTrigger className="w-[180px] bg-secondary border-none focus:ring-2 focus:ring-primary/50 h-12 rounded-full">
        <SelectValue placeholder="Status" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="all">All Statuses</SelectItem>
        {statuses.map((status) => (
          <SelectItem key={status} value={status}>
            {status}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  </div>
);