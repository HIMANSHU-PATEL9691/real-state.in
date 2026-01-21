import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { MapPin, Shield, FileCheck, Users, ArrowRight, CheckCircle } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SearchFilter from "@/components/SearchFilter";
import PlotCard from "@/components/PlotCard";
import { Button } from "@/components/ui/button";
import { samplePlots, locations } from "@/data/plots";
import heroImage from "@/assets/hero-plot.jpg";

const Home = () => {
  const featuredPlots = samplePlots.slice(0, 4);

  const stats = [
    { value: "500+", label: "Verified Plots" },
    { value: "50+", label: "Locations" },
    { value: "10K+", label: "Happy Customers" },
    { value: "15+", label: "Years Experience" },
  ];

  const features = [
    {
      icon: Shield,
      title: "100% Verified",
      description: "Every plot is verified for legal compliance and clear title documentation.",
    },
    {
      icon: FileCheck,
      title: "DTCP/RERA Approved",
      description: "All our plots come with proper government approvals and clearances.",
    },
    {
      icon: Users,
      title: "Expert Guidance",
      description: "Our experienced agents guide you through every step of the buying process.",
    },
  ];

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Premium land plots"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 hero-overlay" />
        </div>

        {/* Content */}
        <div className="container relative z-10 pt-20">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card/20 backdrop-blur-sm text-card text-sm font-medium mb-6">
                <CheckCircle className="w-4 h-4" />
                Trusted by 10,000+ Happy Customers
              </span>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-card leading-tight mb-6">
                Buy Verified Plots & Land at{" "}
                <span className="text-accent">Prime Locations</span>
              </h1>

              <p className="text-lg md:text-xl text-card/80 mb-8 max-w-2xl">
                Discover DTCP & RERA approved plots with complete legal documentation. 
                Your dream land investment starts here.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild variant="hero" size="xl">
                  <Link to="/plots">
                    Browse Plots
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Link>
                </Button>
                <Button asChild variant="hero-outline" size="xl">
                  <Link to="/contact">Book Site Visit</Link>
                </Button>
              </div>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12"
            >
              {stats.map((stat, i) => (
                <div key={i} className="text-center md:text-left">
                  <p className="text-3xl md:text-4xl font-heading font-bold text-card">
                    {stat.value}
                  </p>
                  <p className="text-sm text-card/70">{stat.label}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Search Section */}
      <section className="relative z-20 -mt-16 pb-12">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <SearchFilter />
          </motion.div>
        </div>
      </section>

      {/* Featured Plots */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-10">
            <div>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-2">
                Featured Plots
              </h2>
              <p className="text-muted-foreground">
                Handpicked premium plots at the best locations
              </p>
            </div>
            <Button asChild variant="outline">
              <Link to="/plots">
                View All Plots
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredPlots.map((plot, index) => (
              <PlotCard key={plot.id} plot={plot} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 md:py-24 bg-secondary/50">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
              Why Choose PlotPrime?
            </h2>
            <p className="text-muted-foreground">
              We make buying land simple, secure, and transparent
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-card rounded-2xl p-8 text-center shadow-card"
              >
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                  <feature.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-heading font-semibold text-foreground mb-3">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Locations */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-10">
            <div>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-2">
                Popular Locations
              </h2>
              <p className="text-muted-foreground">
                Explore plots in top cities and regions
              </p>
            </div>
            <Button asChild variant="outline">
              <Link to="/locations">
                All Locations
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {locations.map((location, i) => (
              <motion.div
                key={location.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <Link
                  to={`/locations/${location.id}`}
                  className="group block card-elevated overflow-hidden"
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={location.image}
                      alt={location.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4">
                      <h3 className="text-xl font-heading font-bold text-card mb-1">
                        {location.name}
                      </h3>
                      <div className="flex items-center justify-between text-sm text-card/80">
                        <span className="flex items-center gap-1">
                          <MapPin className="w-3 h-3" />
                          {location.plotsCount} Plots
                        </span>
                        <span>From {location.startingPrice}</span>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 hero-gradient">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary-foreground mb-4">
              Ready to Find Your Perfect Plot?
            </h2>
            <p className="text-primary-foreground/80 mb-8">
              Schedule a free site visit with our experts and see the properties firsthand.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild variant="hero-outline" size="xl">
                <Link to="/contact">Book Site Visit</Link>
              </Button>
              <Button asChild size="xl" className="bg-card text-primary hover:bg-card/90">
                <a href="tel:+919691365052">Call Now</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
