import { useState } from "react";
import { Plus, Search, MoreHorizontal, Edit, Trash2 } from "lucide-react";
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
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const PlotsManagement = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const plots = [
    {
      id: "PLT001",
      title: "Green Valley - Plot 12",
      location: "OMR, Chennai",
      size: "1,200 sq.ft",
      price: "₹48 Lakhs",
      status: "available",
    },
    {
      id: "PLT002",
      title: "Sunrise Enclave - Plot 8",
      location: "ECR, Chennai",
      size: "1,800 sq.ft",
      price: "₹72 Lakhs",
      status: "sold",
    },
    {
      id: "PLT003",
      title: "Lake View - Plot 23",
      location: "Whitefield, Bangalore",
      size: "2,400 sq.ft",
      price: "₹96 Lakhs",
      status: "available",
    },
    {
      id: "PLT004",
      title: "Highway Estate - Plot 5",
      location: "Hosur Road, Bangalore",
      size: "3,600 sq.ft",
      price: "₹1.8 Cr",
      status: "reserved",
    },
    {
      id: "PLT005",
      title: "Mountain View - Plot 17",
      location: "Coimbatore",
      size: "1,000 sq.ft",
      price: "₹20 Lakhs",
      status: "available",
    },
  ];

  const statusStyles = {
    available: "bg-success/10 text-success border-0",
    sold: "bg-destructive/10 text-destructive border-0",
    reserved: "bg-accent/10 text-accent border-0",
  };

  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div>
            <h1 className="text-2xl font-heading font-bold text-foreground">
              Plots Management
            </h1>
            <p className="text-muted-foreground">
              Manage all your plot listings and inventory
            </p>
          </div>
          <Button>
            <Plus className="w-4 h-4 mr-2" />
            Add New Plot
          </Button>
        </div>

        {/* Filters */}
        <Card className="p-4">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input
                placeholder="Search plots..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
            <Select>
              <SelectTrigger className="w-full md:w-40">
                <SelectValue placeholder="Location" />
              </SelectTrigger>
              <SelectContent className="bg-popover border-border">
                <SelectItem value="all">All Locations</SelectItem>
                <SelectItem value="chennai">Chennai</SelectItem>
                <SelectItem value="bangalore">Bangalore</SelectItem>
                <SelectItem value="coimbatore">Coimbatore</SelectItem>
              </SelectContent>
            </Select>
            <Select>
              <SelectTrigger className="w-full md:w-40">
                <SelectValue placeholder="Status" />
              </SelectTrigger>
              <SelectContent className="bg-popover border-border">
                <SelectItem value="all">All Status</SelectItem>
                <SelectItem value="available">Available</SelectItem>
                <SelectItem value="sold">Sold</SelectItem>
                <SelectItem value="reserved">Reserved</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </Card>

        {/* Table */}
        <Card>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Plot ID</TableHead>
                <TableHead>Title</TableHead>
                <TableHead>Location</TableHead>
                <TableHead>Size</TableHead>
                <TableHead>Price</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="w-12"></TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {plots.map((plot) => (
                <TableRow key={plot.id}>
                  <TableCell className="font-medium text-foreground">
                    {plot.id}
                  </TableCell>
                  <TableCell>{plot.title}</TableCell>
                  <TableCell className="text-muted-foreground">
                    {plot.location}
                  </TableCell>
                  <TableCell>{plot.size}</TableCell>
                  <TableCell className="font-medium">{plot.price}</TableCell>
                  <TableCell>
                    <Badge className={statusStyles[plot.status as keyof typeof statusStyles]}>
                      {plot.status}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="icon">
                          <MoreHorizontal className="w-4 h-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end" className="bg-popover border-border">
                        <DropdownMenuItem>
                          <Edit className="w-4 h-4 mr-2" />
                          Edit
                        </DropdownMenuItem>
                        <DropdownMenuItem className="text-destructive">
                          <Trash2 className="w-4 h-4 mr-2" />
                          Delete
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
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

export default PlotsManagement;
