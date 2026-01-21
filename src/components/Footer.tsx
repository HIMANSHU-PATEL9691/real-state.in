import { Link } from "react-router-dom";
import { MapPin, Phone, Mail, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-sidebar text-sidebar-foreground">
      <div className="container py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-lg bg-sidebar-primary flex items-center justify-center">
                <MapPin className="w-5 h-5 text-sidebar-primary-foreground" />
              </div>
              <span className="text-xl font-heading font-bold text-card">PlotPrime</span>
            </Link>
            <p className="text-sidebar-foreground/70 text-sm leading-relaxed">
              Your trusted partner in finding verified plots and land at prime locations. 
              DTCP & RERA approved properties with complete legal documentation.
            </p>
            <div className="flex gap-3">
              {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-9 h-9 rounded-full bg-sidebar-accent flex items-center justify-center hover:bg-sidebar-primary transition-colors"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-semibold text-card mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { label: "Browse Plots", href: "/plots" },
                { label: "Locations", href: "/locations" },
                { label: "About Us", href: "/about" },
                { label: "Contact", href: "/contact" },
                { label: "Site Visit", href: "/contact" },
              ].map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className="text-sidebar-foreground/70 hover:text-sidebar-primary text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Locations */}
          <div>
            <h4 className="font-heading font-semibold text-card mb-4">Popular Locations</h4>
            <ul className="space-y-3">
              {["Chennai", "Bangalore", "Hyderabad", "Coimbatore", "Madurai"].map((loc) => (
                <li key={loc}>
                  <Link
                    to={`/locations/${loc.toLowerCase()}`}
                    className="text-sidebar-foreground/70 hover:text-sidebar-primary text-sm transition-colors"
                  >
                    Plots in {loc}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading font-semibold text-card mb-4">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 mt-1 text-sidebar-primary" />
                <span className="text-sidebar-foreground/70 text-sm">
                  123 Real Estate Tower,<br />
                  Anna Nagar, Chennai - 600040
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-sidebar-primary" />
                <a href="tel:+919691365052" className="text-sidebar-foreground/70 hover:text-sidebar-primary text-sm transition-colors">
                  +91 9691365052
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-sidebar-primary" />
                <a href="mailto:patelhimanshu6006@gmail.com" className="text-sidebar-foreground/70 hover:text-sidebar-primary text-sm transition-colors">
                  patelhimanshu6006@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-sidebar-border mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sidebar-foreground/60 text-sm">
            © 2026 Himanshu Patel . All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-sidebar-foreground/60 hover:text-sidebar-primary text-sm transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-sidebar-foreground/60 hover:text-sidebar-primary text-sm transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
