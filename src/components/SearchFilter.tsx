import { useState } from "react";
import { Search, MapPin, Maximize, IndianRupee } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface SearchFilterProps {
  onSearch?: (filters: SearchFilters) => void;
  variant?: "hero" | "page";
}

export interface SearchFilters {
  location: string;
  plotSize: string;
  priceRange: string;
  status: string;
}

const SearchFilter = ({ onSearch, variant = "hero" }: SearchFilterProps) => {
  const [filters, setFilters] = useState<SearchFilters>({
    location: "",
    plotSize: "",
    priceRange: "",
    status: "",
  });

  const handleSearch = () => {
    onSearch?.(filters);
  };

  const isHero = variant === "hero";

  return (
    <div
      className={`${
        isHero
          ? "glass rounded-2xl p-4 md:p-6 shadow-elevated"
          : "bg-card rounded-xl p-4 md:p-6 border border-border"
      }`}
    >
      <div className={`grid gap-4 ${isHero ? "md:grid-cols-5" : "md:grid-cols-4 lg:grid-cols-5"}`}>
        {/* Location Search */}
        <div className="relative md:col-span-2 lg:col-span-1">
          <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <Input
            placeholder="Enter location..."
            value={filters.location}
            onChange={(e) => setFilters({ ...filters, location: e.target.value })}
            className="pl-10 h-12 bg-background border-border"
          />
        </div>

        {/* Plot Size */}
        <Select
          value={filters.plotSize}
          onValueChange={(value) => setFilters({ ...filters, plotSize: value })}
        >
          <SelectTrigger className="h-12 bg-background border-border">
            <Maximize className="w-4 h-4 mr-2 text-muted-foreground" />
            <SelectValue placeholder="Plot Size" />
          </SelectTrigger>
          <SelectContent className="bg-popover border-border">
            <SelectItem value="500-1000">500 - 1,000 sq.ft</SelectItem>
            <SelectItem value="1000-2000">1,000 - 2,000 sq.ft</SelectItem>
            <SelectItem value="2000-5000">2,000 - 5,000 sq.ft</SelectItem>
            <SelectItem value="5000+">5,000+ sq.ft</SelectItem>
          </SelectContent>
        </Select>

        {/* Price Range */}
        <Select
          value={filters.priceRange}
          onValueChange={(value) => setFilters({ ...filters, priceRange: value })}
        >
          <SelectTrigger className="h-12 bg-background border-border">
            <IndianRupee className="w-4 h-4 mr-2 text-muted-foreground" />
            <SelectValue placeholder="Price Range" />
          </SelectTrigger>
          <SelectContent className="bg-popover border-border">
            <SelectItem value="0-25L">Under ₹25 Lakhs</SelectItem>
            <SelectItem value="25L-50L">₹25 - 50 Lakhs</SelectItem>
            <SelectItem value="50L-1Cr">₹50 Lakhs - 1 Cr</SelectItem>
            <SelectItem value="1Cr+">₹1 Crore+</SelectItem>
          </SelectContent>
        </Select>

        {/* Status */}
        <Select
          value={filters.status}
          onValueChange={(value) => setFilters({ ...filters, status: value })}
        >
          <SelectTrigger className="h-12 bg-background border-border">
            <SelectValue placeholder="Status" />
          </SelectTrigger>
          <SelectContent className="bg-popover border-border">
            <SelectItem value="all">All</SelectItem>
            <SelectItem value="available">Available</SelectItem>
            <SelectItem value="reserved">Reserved</SelectItem>
            <SelectItem value="sold">Sold</SelectItem>
          </SelectContent>
        </Select>

        {/* Search Button */}
        <Button onClick={handleSearch} size="lg" className="h-12">
          <Search className="w-4 h-4 mr-2" />
          Search
        </Button>
      </div>
    </div>
  );
};

export default SearchFilter;
