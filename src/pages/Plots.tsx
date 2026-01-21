import { useState } from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SearchFilter, { SearchFilters } from "@/components/SearchFilter";
import PlotCard from "@/components/PlotCard";
import { samplePlots } from "@/data/plots";

const Plots = () => {
  const [filters, setFilters] = useState<SearchFilters>({
    location: "",
    plotSize: "",
    priceRange: "",
    status: "",
  });

  const handleSearch = (newFilters: SearchFilters) => {
    setFilters(newFilters);
    // In a real app, this would filter the plots
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Header */}
      <section className="pt-28 pb-8 bg-secondary/30">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-2">
              Browse All Plots
            </h1>
            <p className="text-muted-foreground">
              {samplePlots.length} verified plots available across multiple locations
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filters */}
      <section className="py-6 border-b border-border">
        <div className="container">
          <SearchFilter onSearch={handleSearch} variant="page" />
        </div>
      </section>

      {/* Plot Grid */}
      <section className="py-12">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {samplePlots.map((plot, index) => (
              <PlotCard key={plot.id} plot={plot} index={index} />
            ))}
          </div>

          {/* Load More */}
          <div className="text-center mt-12">
            <p className="text-muted-foreground mb-4">
              Showing {samplePlots.length} of {samplePlots.length} plots
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Plots;
