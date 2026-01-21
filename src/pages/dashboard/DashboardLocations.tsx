import { Search, Plus, MapPin, Home } from "lucide-react";
import DashboardLayout from "@/components/DashboardLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";

const DashboardLocations = () => {
  const locations = [
    {
      id: 1,
      name: "Chennai",
      area: "OMR, ECR, Tambaram",
      totalPlots: 45,
      available: 28,
      sold: 17,
      status: "active",
    },
    {
      id: 2,
      name: "Bangalore",
      area: "Whitefield, Electronic City",
      totalPlots: 32,
      available: 15,
      sold: 17,
      status: "active",
    },
    {
      id: 3,
      name: "Hyderabad",
      area: "Gachibowli, HITEC City",
      totalPlots: 28,
      available: 20,
      sold: 8,
      status: "active",
    },
    {
      id: 4,
      name: "Coimbatore",
      area: "Saravanampatti, Singanallur",
      totalPlots: 18,
      available: 12,
      sold: 6,
      status: "active",
    },
    {
      id: 5,
      name: "Mysore",
      area: "Vijayanagar, Hebbal",
      totalPlots: 15,
      available: 10,
      sold: 5,
      status: "inactive",
    },
  ];

  const statusStyles = {
    active: "bg-success/10 text-success border-0",
    inactive: "bg-muted text-muted-foreground border-0",
  };

  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div>
            <h1 className="text-2xl font-heading font-bold text-foreground">
              Locations
            </h1>
            <p className="text-muted-foreground">
              Manage plot locations and areas
            </p>
          </div>
          <Button className="bg-primary hover:bg-primary/90">
            <Plus className="w-4 h-4 mr-2" />
            Add Location
          </Button>
        </div>

        {/* Search */}
        <Card className="p-4">
          <div className="relative max-w-md">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input placeholder="Search locations..." className="pl-10" />
          </div>
        </Card>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <Card className="p-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <MapPin className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="text-2xl font-bold text-foreground">5</p>
                <p className="text-sm text-muted-foreground">Total Locations</p>
              </div>
            </div>
          </Card>
          <Card className="p-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-success/10 flex items-center justify-center">
                <Home className="w-5 h-5 text-success" />
              </div>
              <div>
                <p className="text-2xl font-bold text-foreground">138</p>
                <p className="text-sm text-muted-foreground">Total Plots</p>
              </div>
            </div>
          </Card>
          <Card className="p-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                <Home className="w-5 h-5 text-accent" />
              </div>
              <div>
                <p className="text-2xl font-bold text-foreground">85</p>
                <p className="text-sm text-muted-foreground">Available</p>
              </div>
            </div>
          </Card>
          <Card className="p-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-destructive/10 flex items-center justify-center">
                <Home className="w-5 h-5 text-destructive" />
              </div>
              <div>
                <p className="text-2xl font-bold text-foreground">53</p>
                <p className="text-sm text-muted-foreground">Sold</p>
              </div>
            </div>
          </Card>
        </div>

        {/* Table */}
        <Card>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Location</TableHead>
                <TableHead>Areas</TableHead>
                <TableHead>Total Plots</TableHead>
                <TableHead>Available</TableHead>
                <TableHead>Sold</TableHead>
                <TableHead>Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {locations.map((loc) => (
                <TableRow key={loc.id}>
                  <TableCell className="font-medium text-foreground">
                    {loc.name}
                  </TableCell>
                  <TableCell className="text-muted-foreground">
                    {loc.area}
                  </TableCell>
                  <TableCell>{loc.totalPlots}</TableCell>
                  <TableCell className="text-success">{loc.available}</TableCell>
                  <TableCell className="text-destructive">{loc.sold}</TableCell>
                  <TableCell>
                    <Badge className={statusStyles[loc.status as keyof typeof statusStyles]}>
                      {loc.status}
                    </Badge>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default DashboardLocations;
