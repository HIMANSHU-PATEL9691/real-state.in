import { Search, Download } from "lucide-react";
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

const Transactions = () => {
  const transactions = [
    {
      id: "TXN001",
      customer: "Rajesh Kumar",
      plot: "Green Valley - Plot 12",
      amount: "₹48,00,000",
      type: "Full Payment",
      date: "2025-01-15",
      status: "completed",
    },
    {
      id: "TXN002",
      customer: "Priya Sharma",
      plot: "Sunrise Enclave - Plot 8",
      amount: "₹10,00,000",
      type: "Booking Amount",
      date: "2025-01-18",
      status: "completed",
    },
    {
      id: "TXN003",
      customer: "Amit Patel",
      plot: "Lake View - Plot 23",
      amount: "₹15,00,000",
      type: "Booking Amount",
      date: "2025-01-20",
      status: "pending",
    },
    {
      id: "TXN004",
      customer: "Sneha Reddy",
      plot: "Highway Estate - Plot 5",
      amount: "₹1,80,00,000",
      type: "Full Payment",
      date: "2025-01-10",
      status: "completed",
    },
    {
      id: "TXN005",
      customer: "Vikram Singh",
      plot: "Mountain View - Plot 17",
      amount: "₹5,00,000",
      type: "Booking Amount",
      date: "2025-01-21",
      status: "pending",
    },
  ];

  const statusStyles = {
    completed: "bg-success/10 text-success border-0",
    pending: "bg-accent/10 text-accent border-0",
    failed: "bg-destructive/10 text-destructive border-0",
  };

  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div>
            <h1 className="text-2xl font-heading font-bold text-foreground">
              Transactions
            </h1>
            <p className="text-muted-foreground">
              Track all payment transactions and history
            </p>
          </div>
          <Button variant="outline">
            <Download className="w-4 h-4 mr-2" />
            Export
          </Button>
        </div>

        {/* Search */}
        <Card className="p-4">
          <div className="relative max-w-md">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input placeholder="Search transactions..." className="pl-10" />
          </div>
        </Card>

        {/* Table */}
        <Card>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Transaction ID</TableHead>
                <TableHead>Customer</TableHead>
                <TableHead>Plot</TableHead>
                <TableHead>Amount</TableHead>
                <TableHead>Type</TableHead>
                <TableHead>Date</TableHead>
                <TableHead>Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {transactions.map((txn) => (
                <TableRow key={txn.id}>
                  <TableCell className="font-medium text-foreground">
                    {txn.id}
                  </TableCell>
                  <TableCell>{txn.customer}</TableCell>
                  <TableCell className="text-muted-foreground">
                    {txn.plot}
                  </TableCell>
                  <TableCell className="font-semibold text-foreground">
                    {txn.amount}
                  </TableCell>
                  <TableCell>{txn.type}</TableCell>
                  <TableCell className="text-muted-foreground">
                    {txn.date}
                  </TableCell>
                  <TableCell>
                    <Badge className={statusStyles[txn.status as keyof typeof statusStyles]}>
                      {txn.status}
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

export default Transactions;
