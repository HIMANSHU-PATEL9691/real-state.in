import { useState } from "react";
import { Search, Mail, Phone } from "lucide-react";
import DashboardLayout from "@/components/DashboardLayout";
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
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const Customers = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const customers = [
    {
      id: 1,
      name: "Rajesh Kumar",
      email: "rajesh@email.com",
      phone: "+91 9691365052",
      leadStatus: "converted",
      interestedIn: "Chennai",
      lastContact: "2025-01-20",
    },
    {
      id: 2,
      name: "Priya Sharma",
      email: "priya@email.com",
      phone: "+91 87654 32109",
      leadStatus: "visited",
      interestedIn: "Bangalore",
      lastContact: "2025-01-21",
    },
    {
      id: 3,
      name: "Amit Patel",
      email: "amit@email.com",
      phone: "+91 76543 21098",
      leadStatus: "new",
      interestedIn: "Hyderabad",
      lastContact: "2025-01-21",
    },
    {
      id: 4,
      name: "Sneha Reddy",
      email: "sneha@email.com",
      phone: "+91 65432 10987",
      leadStatus: "visited",
      interestedIn: "Chennai",
      lastContact: "2025-01-19",
    },
    {
      id: 5,
      name: "Vikram Singh",
      email: "vikram@email.com",
      phone: "+91 54321 09876",
      leadStatus: "new",
      interestedIn: "Coimbatore",
      lastContact: "2025-01-21",
    },
  ];

  const statusStyles = {
    new: "bg-accent/10 text-accent border-0",
    visited: "bg-primary/10 text-primary border-0",
    converted: "bg-success/10 text-success border-0",
  };

  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Header */}
        <div>
          <h1 className="text-2xl font-heading font-bold text-foreground">
            Customers
          </h1>
          <p className="text-muted-foreground">
            Manage leads and customer relationships
          </p>
        </div>

        {/* Filters */}
        <Card className="p-4">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input
                placeholder="Search customers..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
            <Select>
              <SelectTrigger className="w-full md:w-40">
                <SelectValue placeholder="Lead Status" />
              </SelectTrigger>
              <SelectContent className="bg-popover border-border">
                <SelectItem value="all">All Status</SelectItem>
                <SelectItem value="new">New</SelectItem>
                <SelectItem value="visited">Visited</SelectItem>
                <SelectItem value="converted">Converted</SelectItem>
              </SelectContent>
            </Select>
            <Select>
              <SelectTrigger className="w-full md:w-40">
                <SelectValue placeholder="Location" />
              </SelectTrigger>
              <SelectContent className="bg-popover border-border">
                <SelectItem value="all">All Locations</SelectItem>
                <SelectItem value="chennai">Chennai</SelectItem>
                <SelectItem value="bangalore">Bangalore</SelectItem>
                <SelectItem value="hyderabad">Hyderabad</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </Card>

        {/* Table */}
        <Card>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Customer</TableHead>
                <TableHead>Contact</TableHead>
                <TableHead>Interested In</TableHead>
                <TableHead>Lead Status</TableHead>
                <TableHead>Last Contact</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {customers.map((customer) => (
                <TableRow key={customer.id}>
                  <TableCell>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-semibold">
                        {customer.name.charAt(0)}
                      </div>
                      <div>
                        <p className="font-medium text-foreground">{customer.name}</p>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="space-y-1">
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Mail className="w-3 h-3" />
                        {customer.email}
                      </div>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Phone className="w-3 h-3" />
                        {customer.phone}
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>{customer.interestedIn}</TableCell>
                  <TableCell>
                    <Badge className={statusStyles[customer.leadStatus as keyof typeof statusStyles]}>
                      {customer.leadStatus}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-muted-foreground">
                    {customer.lastContact}
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

export default Customers;
