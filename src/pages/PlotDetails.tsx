import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  MapPin,
  Maximize,
  Check,
  Phone,
  Calendar,
  ArrowLeft,
  Share2,
  Heart,
  Droplets,
  Zap,
  Car,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { samplePlots } from "@/data/plots";

const PlotDetails = () => {
  const { id } = useParams();
  const plot = samplePlots.find((p) => p.id === id) || samplePlots[0];

  const amenities = [
    { icon: Car, label: "Road Access", available: true },
    { icon: Droplets, label: "Water Supply", available: true },
    { icon: Zap, label: "Electricity", available: true },
  ];

  const nearbyPlaces = [
    { name: "School", distance: "1.5 km" },
    { name: "Hospital", distance: "3 km" },
    { name: "Shopping Mall", distance: "2.5 km" },
    { name: "Bus Stop", distance: "500 m" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Breadcrumb */}
      <section className="pt-24 pb-4">
        <div className="container">
          <Link
            to="/plots"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Plots
          </Link>
        </div>
      </section>

      <section className="pb-12">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Image Gallery */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="relative rounded-2xl overflow-hidden"
              >
                <img
                  src={plot.image}
                  alt={plot.title}
                  className="w-full h-[400px] md:h-[500px] object-cover"
                />
                <div className="absolute top-4 left-4 flex gap-2">
                  <Badge
                    className={
                      plot.status === "available"
                        ? "bg-success text-success-foreground"
                        : plot.status === "sold"
                        ? "bg-destructive text-destructive-foreground"
                        : "bg-accent text-accent-foreground"
                    }
                  >
                    {plot.status.charAt(0).toUpperCase() + plot.status.slice(1)}
                  </Badge>
                  {plot.isApproved && (
                    <Badge className="bg-primary text-primary-foreground">
                      <Check className="w-3 h-3 mr-1" />
                      DTCP Approved
                    </Badge>
                  )}
                </div>
                <div className="absolute top-4 right-4 flex gap-2">
                  <button className="w-10 h-10 rounded-full bg-card/90 flex items-center justify-center hover:bg-card transition-colors">
                    <Share2 className="w-4 h-4" />
                  </button>
                  <button className="w-10 h-10 rounded-full bg-card/90 flex items-center justify-center hover:bg-card transition-colors">
                    <Heart className="w-4 h-4" />
                  </button>
                </div>
              </motion.div>

              {/* Title & Price */}
              <div>
                <h1 className="text-2xl md:text-3xl font-heading font-bold text-foreground mb-3">
                  {plot.title}
                </h1>
                <div className="flex flex-wrap items-center gap-4 text-muted-foreground mb-4">
                  <span className="flex items-center gap-1">
                    <MapPin className="w-4 h-4 text-primary" />
                    {plot.location}
                  </span>
                  <span className="flex items-center gap-1">
                    <Maximize className="w-4 h-4 text-primary" />
                    {plot.area}
                  </span>
                </div>
                <div className="flex items-baseline gap-2">
                  <span className="text-3xl font-heading font-bold text-primary">
                    {plot.price}
                  </span>
                  <span className="text-muted-foreground">
                    ({plot.pricePerSqft})
                  </span>
                </div>
              </div>

              {/* Features */}
              <div className="bg-card rounded-xl p-6 border border-border">
                <h2 className="text-lg font-heading font-semibold text-foreground mb-4">
                  Plot Features
                </h2>
                <div className="flex flex-wrap gap-2">
                  {plot.features.map((feature) => (
                    <Badge key={feature} variant="secondary" className="text-sm px-3 py-1">
                      <Check className="w-3 h-3 mr-1 text-success" />
                      {feature}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Amenities */}
              <div className="bg-card rounded-xl p-6 border border-border">
                <h2 className="text-lg font-heading font-semibold text-foreground mb-4">
                  Infrastructure & Amenities
                </h2>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {amenities.map((amenity) => (
                    <div
                      key={amenity.label}
                      className="flex items-center gap-3 p-3 rounded-lg bg-muted"
                    >
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                        <amenity.icon className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-foreground">
                          {amenity.label}
                        </p>
                        <p className="text-xs text-success">Available</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Nearby Places */}
              <div className="bg-card rounded-xl p-6 border border-border">
                <h2 className="text-lg font-heading font-semibold text-foreground mb-4">
                  Nearby Landmarks
                </h2>
                <div className="grid grid-cols-2 gap-4">
                  {nearbyPlaces.map((place) => (
                    <div
                      key={place.name}
                      className="flex items-center justify-between p-3 rounded-lg bg-muted"
                    >
                      <span className="text-sm text-foreground">{place.name}</span>
                      <span className="text-sm text-muted-foreground">
                        {place.distance}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="bg-card rounded-xl p-6 border border-border">
                <h2 className="text-lg font-heading font-semibold text-foreground mb-4">
                  Location on Map
                </h2>
                <div className="h-64 bg-muted rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="w-8 h-8 text-muted-foreground mx-auto mb-2" />
                    <p className="text-muted-foreground">Map view available on request</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Contact Form */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="bg-card rounded-xl p-6 border border-border sticky top-24"
              >
                <h3 className="text-lg font-heading font-semibold text-foreground mb-4">
                  Book a Site Visit
                </h3>
                <form className="space-y-4">
                  <Input placeholder="Your Name" className="h-12" />
                  <Input placeholder="Phone Number" type="tel" className="h-12" />
                  <Input placeholder="Email" type="email" className="h-12" />
                  <Textarea
                    placeholder="Message (Optional)"
                    rows={3}
                    className="resize-none"
                  />
                  <Button className="w-full" size="lg">
                    <Calendar className="w-4 h-4 mr-2" />
                    Schedule Visit
                  </Button>
                </form>

                <div className="mt-6 pt-6 border-t border-border">
                  <p className="text-sm text-muted-foreground mb-3">
                    Or contact us directly:
                  </p>
                  <Button variant="outline" className="w-full" size="lg" asChild>
                    <a href="tel:+919691365052">
                      <Phone className="w-4 h-4 mr-2" />
                      +91 9691365052
                    </a>
                  </Button>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PlotDetails;
