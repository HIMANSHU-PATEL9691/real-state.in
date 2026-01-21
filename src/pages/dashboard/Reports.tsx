import { Download, TrendingUp, TrendingDown, DollarSign, Users } from "lucide-react";
import DashboardLayout from "@/components/DashboardLayout";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
} from "recharts";

const Reports = () => {
  const salesData = [
    { month: "Jan", sales: 12, revenue: 48 },
    { month: "Feb", sales: 8, revenue: 32 },
    { month: "Mar", sales: 15, revenue: 60 },
    { month: "Apr", sales: 10, revenue: 40 },
    { month: "May", sales: 18, revenue: 72 },
    { month: "Jun", sales: 14, revenue: 56 },
  ];

  const locationData = [
    { name: "Chennai", value: 45 },
    { name: "Bangalore", value: 32 },
    { name: "Hyderabad", value: 28 },
    { name: "Coimbatore", value: 18 },
  ];

  const COLORS = ["hsl(var(--primary))", "hsl(var(--accent))", "hsl(var(--success))", "hsl(var(--chart-4))"];

  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div>
            <h1 className="text-2xl font-heading font-bold text-foreground">
              Reports
            </h1>
            <p className="text-muted-foreground">
              Analytics and performance insights
            </p>
          </div>
          <div className="flex items-center gap-3">
            <Select defaultValue="6months">
              <SelectTrigger className="w-40">
                <SelectValue />
              </SelectTrigger>
              <SelectContent className="bg-popover border-border">
                <SelectItem value="30days">Last 30 Days</SelectItem>
                <SelectItem value="3months">Last 3 Months</SelectItem>
                <SelectItem value="6months">Last 6 Months</SelectItem>
                <SelectItem value="1year">Last Year</SelectItem>
              </SelectContent>
            </Select>
            <Button variant="outline">
              <Download className="w-4 h-4 mr-2" />
              Export
            </Button>
          </div>
        </div>

        {/* KPI Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <Card className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Total Revenue</p>
                <p className="text-2xl font-bold text-foreground">₹3.08 Cr</p>
              </div>
              <div className="flex items-center text-success text-sm">
                <TrendingUp className="w-4 h-4 mr-1" />
                +12%
              </div>
            </div>
          </Card>
          <Card className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Plots Sold</p>
                <p className="text-2xl font-bold text-foreground">77</p>
              </div>
              <div className="flex items-center text-success text-sm">
                <TrendingUp className="w-4 h-4 mr-1" />
                +8%
              </div>
            </div>
          </Card>
          <Card className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Avg. Sale Price</p>
                <p className="text-2xl font-bold text-foreground">₹40L</p>
              </div>
              <div className="flex items-center text-destructive text-sm">
                <TrendingDown className="w-4 h-4 mr-1" />
                -3%
              </div>
            </div>
          </Card>
          <Card className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Conversion Rate</p>
                <p className="text-2xl font-bold text-foreground">24%</p>
              </div>
              <div className="flex items-center text-success text-sm">
                <TrendingUp className="w-4 h-4 mr-1" />
                +5%
              </div>
            </div>
          </Card>
        </div>

        {/* Charts */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Sales Trend */}
          <Card className="p-6">
            <h3 className="text-lg font-semibold text-foreground mb-4">Sales Trend</h3>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={salesData}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                <XAxis dataKey="month" stroke="hsl(var(--muted-foreground))" />
                <YAxis stroke="hsl(var(--muted-foreground))" />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "hsl(var(--popover))",
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
          </Card>

          {/* Revenue by Month */}
          <Card className="p-6">
            <h3 className="text-lg font-semibold text-foreground mb-4">Revenue (in Lakhs)</h3>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={salesData}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                <XAxis dataKey="month" stroke="hsl(var(--muted-foreground))" />
                <YAxis stroke="hsl(var(--muted-foreground))" />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "hsl(var(--popover))",
                    border: "1px solid hsl(var(--border))",
                    borderRadius: "8px",
                  }}
                />
                <Bar dataKey="revenue" fill="hsl(var(--accent))" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </Card>

          {/* Location Distribution */}
          <Card className="p-6">
            <h3 className="text-lg font-semibold text-foreground mb-4">Plots by Location</h3>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={locationData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                  outerRadius={100}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {locationData.map((_, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip
                  contentStyle={{
                    backgroundColor: "hsl(var(--popover))",
                    border: "1px solid hsl(var(--border))",
                    borderRadius: "8px",
                  }}
                />
              </PieChart>
            </ResponsiveContainer>
          </Card>

          {/* Agent Performance */}
          <Card className="p-6">
            <h3 className="text-lg font-semibold text-foreground mb-4">Top Agents</h3>
            <div className="space-y-4">
              {[
                { name: "Suresh M", sales: 18, revenue: "₹72L" },
                { name: "Anita R", sales: 15, revenue: "₹60L" },
                { name: "Ravi K", sales: 12, revenue: "₹48L" },
                { name: "Priya S", sales: 10, revenue: "₹40L" },
              ].map((agent, index) => (
                <div key={agent.name} className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary font-semibold text-sm">
                      {index + 1}
                    </div>
                    <div>
                      <p className="font-medium text-foreground">{agent.name}</p>
                      <p className="text-sm text-muted-foreground">{agent.sales} sales</p>
                    </div>
                  </div>
                  <p className="font-semibold text-foreground">{agent.revenue}</p>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Reports;
