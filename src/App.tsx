import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// 🔽 ADD THIS
import ScrollToTop from "@/components/ScrollToTop";

// Public Pages
import Home from "./pages/Home";
import Plots from "./pages/Plots";
import PlotDetails from "./pages/PlotDetails";
import Locations from "./pages/Locations";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

// Dashboard Pages
import DashboardHome from "./pages/dashboard/DashboardHome";
import PlotsManagement from "./pages/dashboard/PlotsManagement";
import DashboardLocations from "./pages/dashboard/DashboardLocations";
import Customers from "./pages/dashboard/Customers";
import SiteVisits from "./pages/dashboard/SiteVisits";
import Transactions from "./pages/dashboard/Transactions";
import Reports from "./pages/dashboard/Reports";
import Settings from "./pages/dashboard/Settings";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>

        {/* 🔽 ADD HERE */}
        <ScrollToTop />

        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<Home />} />
          <Route path="/plots" element={<Plots />} />
          <Route path="/plots/:id" element={<PlotDetails />} />
          <Route path="/locations" element={<Locations />} />
          <Route path="/locations/:id" element={<Locations />} />
          <Route path="/contact" element={<Contact />} />

          {/* Dashboard Routes */}
          <Route path="/dashboard" element={<DashboardHome />} />
          <Route path="/dashboard/plots" element={<PlotsManagement />} />
          <Route path="/dashboard/locations" element={<DashboardLocations />} />
          <Route path="/dashboard/customers" element={<Customers />} />
          <Route path="/dashboard/visits" element={<SiteVisits />} />
          <Route path="/dashboard/transactions" element={<Transactions />} />
          <Route path="/dashboard/reports" element={<Reports />} />
          <Route path="/dashboard/settings" element={<Settings />} />

          {/* Catch-all */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
