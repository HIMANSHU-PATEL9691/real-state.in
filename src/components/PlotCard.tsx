import { Link } from "react-router-dom";
import { MapPin, Maximize, Check } from "lucide-react";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export interface Plot {
  id: string;
  title: string;
  location: string;
  area: string;
  price: string;
  pricePerSqft: string;
  status: "available" | "sold" | "reserved";
  image: string;
  features: string[];
  isApproved?: boolean;
}

interface PlotCardProps {
  plot: Plot;
  index?: number;
}

const PlotCard = ({ plot, index = 0 }: PlotCardProps) => {
  const statusStyles = {
    available: "bg-success text-success-foreground",
    sold: "bg-destructive text-destructive-foreground",
    reserved: "bg-accent text-accent-foreground",
  };

  const statusLabels = {
    available: "Available",
    sold: "Sold",
    reserved: "Reserved",
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.4 }}
      className="card-elevated overflow-hidden group"
    >
      {/* Image */}
      <div className="relative h-48 md:h-56 overflow-hidden">
        <img
          src={plot.image}
          alt={plot.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
        
        {/* Status Badge */}
        <Badge className={`absolute top-3 left-3 ${statusStyles[plot.status]}`}>
          {statusLabels[plot.status]}
        </Badge>

        {/* Approved Badge */}
        {plot.isApproved && (
          <Badge className="absolute top-3 right-3 bg-primary text-primary-foreground">
            <Check className="w-3 h-3 mr-1" />
            DTCP Approved
          </Badge>
        )}

        {/* Price */}
        <div className="absolute bottom-3 left-3 right-3">
          <div className="glass rounded-lg px-3 py-2">
            <p className="text-lg font-heading font-bold text-foreground">{plot.price}</p>
            <p className="text-xs text-muted-foreground">{plot.pricePerSqft}</p>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-4 md:p-5">
        <h3 className="font-heading font-semibold text-foreground line-clamp-1 mb-2">
          {plot.title}
        </h3>

        <div className="flex items-center gap-2 text-muted-foreground mb-3">
          <MapPin className="w-4 h-4 text-primary" />
          <span className="text-sm">{plot.location}</span>
        </div>

        <div className="flex items-center gap-2 text-muted-foreground mb-4">
          <Maximize className="w-4 h-4 text-primary" />
          <span className="text-sm">{plot.area}</span>
        </div>

        {/* Features */}
        <div className="flex flex-wrap gap-2 mb-4">
          {plot.features.slice(0, 3).map((feature) => (
            <span
              key={feature}
              className="text-xs px-2 py-1 rounded-full bg-muted text-muted-foreground"
            >
              {feature}
            </span>
          ))}
        </div>

        {/* CTA */}
        <Button asChild variant="outline" className="w-full">
          <Link to={`/plots/${plot.id}`}>View Details</Link>
        </Button>
      </div>
    </motion.div>
  );
};

export default PlotCard;
