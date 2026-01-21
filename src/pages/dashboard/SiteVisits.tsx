import { Search, Calendar as CalendarIcon } from "lucide-react";
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

const SiteVisits = () => {
  const visits = [
    {
      id: 1,
      customer: "Rajesh Kumar",
      plot: "Green Valley - Plot 12",
      date: "2025-01-22",
      time: "10:00 AM",
      agent: "Suresh M",
      status: "scheduled",
    },
    {
      id: 2,
      customer: "Priya Sharma",
      plot: "Sunrise Enclave - Plot 8",
      date: "2025-01-21",
      time: "2:00 PM",
      agent: "Anita R",
      status: "completed",
    },
    {
      id: 3,
      customer: "Amit Patel",
      plot: "Lake View - Plot 23",
      date: "2025-01-21",
      time: "11:00 AM",
      agent: "Suresh M",
      status: "completed",
    },
    {
      id: 4,
      customer: "Sneha Reddy",
      plot: "Highway Estate - Plot 5",
      date: "2025-01-20",
      time: "4:00 PM",
      agent: "Ravi K",
      status: "cancelled",
    },
    {
      id: 5,
      customer: "Vikram Singh",
      plot: "Mountain View - Plot 17",
      date: "2025-01-23",
      time: "9:00 AM",
      agent: "Anita R",
      status: "scheduled",
    },
  ];

  const statusStyles = {
    scheduled: "bg-accent/10 text-accent border-0",
    completed: "bg-success/10 text-success border-0",
    cancelled: "bg-destructive/10 text-destructive border-0",
  };

  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-heading font-bold text-foreground">
              Site Visits
            </h1>
            <p className="text-muted-foreground">
              Manage and track site visit schedules
            </p>
          </div>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <CalendarIcon className="w-4 h-4" />
            Today: Jan 21, 2025
          </div>
        </div>

        {/* Filters */}
        <Card className="p-4">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input placeholder="Search visits..." className="pl-10" />
            </div>
            <Select>
              <SelectTrigger className="w-full md:w-40">
                <SelectValue placeholder="Status" />
              </SelectTrigger>
              <SelectContent className="bg-popover border-border">
                <SelectItem value="all">All Status</SelectItem>
                <SelectItem value="scheduled">Scheduled</SelectItem>
                <SelectItem value="completed">Completed</SelectItem>
                <SelectItem value="cancelled">Cancelled</SelectItem>
              </SelectContent>
            </Select>
            <Select>
              <SelectTrigger className="w-full md:w-40">
                <SelectValue placeholder="Agent" />
              </SelectTrigger>
              <SelectContent className="bg-popover border-border">
                <SelectItem value="all">All Agents</SelectItem>
                <SelectItem value="suresh">Suresh M</SelectItem>
                <SelectItem value="anita">Anita R</SelectItem>
                <SelectItem value="ravi">Ravi K</SelectItem>
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
                <TableHead>Plot</TableHead>
                <TableHead>Date & Time</TableHead>
                <TableHead>Agent</TableHead>
                <TableHead>Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {visits.map((visit) => (
                <TableRow key={visit.id}>
                  <TableCell className="font-medium text-foreground">
                    {visit.customer}
                  </TableCell>
                  <TableCell className="text-muted-foreground">
                    {visit.plot}
                  </TableCell>
                  <TableCell>
                    <div>
                      <p className="text-foreground">{visit.date}</p>
                      <p className="text-sm text-muted-foreground">{visit.time}</p>
                    </div>
                  </TableCell>
                  <TableCell>{visit.agent}</TableCell>
                  <TableCell>
                    <Badge className={statusStyles[visit.status as keyof typeof statusStyles]}>
                      {visit.status}
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

export default SiteVisits;
