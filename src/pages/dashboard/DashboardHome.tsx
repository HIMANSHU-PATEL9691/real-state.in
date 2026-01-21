import { MapPinned, Users, IndianRupee, Calendar, TrendingUp, TrendingDown } from "lucide-react";
import DashboardLayout from "@/components/DashboardLayout";
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
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const DashboardHome = () => {
  const stats = [
    {
      title: "Total Plots",
      value: "486",
      change: "+12%",
      trend: "up",
      icon: MapPinned,
      color: "text-primary",
      bgColor: "bg-primary/10",
    },
    {
      title: "Available Plots",
      value: "324",
      change: "-3%",
      trend: "down",
      icon: MapPinned,
      color: "text-success",
      bgColor: "bg-success/10",
    },
    {
      title: "Total Customers",
      value: "1,248",
      change: "+18%",
      trend: "up",
      icon: Users,
      color: "text-accent",
      bgColor: "bg-accent/10",
    },
    {
      title: "Total Revenue",
      value: "₹12.5 Cr",
      change: "+24%",
      trend: "up",
      icon: IndianRupee,
      color: "text-primary",
      bgColor: "bg-primary/10",
    },
  ];

  const salesData = [
    { month: "Jan", sales: 24 },
    { month: "Feb", sales: 18 },
    { month: "Mar", sales: 32 },
    { month: "Apr", sales: 28 },
    { month: "May", sales: 45 },
    { month: "Jun", sales: 38 },
  ];

  const recentVisits = [
    {
      id: 1,
      customer: "Rajesh Kumar",
      plot: "Green Valley - Plot 12",
      date: "2025-01-21",
      status: "completed",
      agent: "Suresh M",
    },
    {
      id: 2,
      customer: "Priya Sharma",
      plot: "Sunrise Enclave - Plot 8",
      date: "2025-01-21",
      status: "scheduled",
      agent: "Anita R",
    },
    {
      id: 3,
      customer: "Amit Patel",
      plot: "Lake View - Plot 23",
      date: "2025-01-20",
      status: "completed",
      agent: "Suresh M",
    },
    {
      id: 4,
      customer: "Sneha Reddy",
      plot: "Highway Estate - Plot 5",
      date: "2025-01-20",
      status: "cancelled",
      agent: "Ravi K",
    },
  ];

  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Header */}
        <div>
          <h1 className="text-2xl font-heading font-bold text-foreground">
            Dashboard Overview
          </h1>
          <p className="text-muted-foreground">
            Welcome back! Here's what's happening with your plots.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat) => (
            <Card key={stat.title} className="stat-card p-6">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">{stat.title}</p>
                  <p className="text-2xl font-heading font-bold text-foreground">
                    {stat.value}
                  </p>
                  <div className="flex items-center gap-1 mt-2">
                    {stat.trend === "up" ? (
                      <TrendingUp className="w-4 h-4 text-success" />
                    ) : (
                      <TrendingDown className="w-4 h-4 text-destructive" />
                    )}
                    <span
                      className={`text-sm font-medium ${
                        stat.trend === "up" ? "text-success" : "text-destructive"
                      }`}
                    >
                      {stat.change}
                    </span>
                    <span className="text-xs text-muted-foreground">vs last month</span>
                  </div>
                </div>
                <div className={`w-12 h-12 rounded-lg ${stat.bgColor} flex items-center justify-center`}>
                  <stat.icon className={`w-6 h-6 ${stat.color}`} />
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Charts & Tables */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Sales Chart */}
          <Card className="p-6">
            <h3 className="text-lg font-heading font-semibold text-foreground mb-4">
              Monthly Sales
            </h3>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={salesData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                  <XAxis
                    dataKey="month"
                    stroke="hsl(var(--muted-foreground))"
                    fontSize={12}
                  />
                  <YAxis stroke="hsl(var(--muted-foreground))" fontSize={12} />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "hsl(var(--card))",
                      border: "1px solid hsl(var(--border))",
                      borderRadius: "8px",
                    }}
                  />
                  <Line
                    type="monotone"
                    dataKey="sales"
                    stroke="hsl(var(--primary))"
                    strokeWidth={2}
                    dot={{ fill: "hsl(var(--primary))" }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </Card>

          {/* Recent Site Visits */}
          <Card className="p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-heading font-semibold text-foreground">
                Recent Site Visits
              </h3>
              <Calendar className="w-5 h-5 text-muted-foreground" />
            </div>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Customer</TableHead>
                  <TableHead>Status</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {recentVisits.map((visit) => (
                  <TableRow key={visit.id}>
                    <TableCell>
                      <div>
                        <p className="font-medium text-foreground">{visit.customer}</p>
                        <p className="text-xs text-muted-foreground">{visit.plot}</p>
                      </div>
                    </TableCell>
                    <TableCell>
                      <Badge
                        className={
                          visit.status === "completed"
                            ? "bg-success/10 text-success border-0"
                            : visit.status === "scheduled"
                            ? "bg-accent/10 text-accent border-0"
                            : "bg-destructive/10 text-destructive border-0"
                        }
                      >
                        {visit.status}
                      </Badge>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default DashboardHome;
