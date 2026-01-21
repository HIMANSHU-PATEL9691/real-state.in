import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, Calendar } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const Contact = () => {
  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      value: "+91 9691365052",
      href: "tel:+919691365052",
    },
    {
      icon: Mail,
      title: "Email",
      value: "patelhimanshu6006@gmail.com",
      href: "mailto:patelhimanshu6006@gmail.com",
    },
    {
      icon: MapPin,
      title: "Office",
      value: "Ganesh Ward Kareli High School Road, Kareli Main Rd, Kareli, Madhya Pradesh 487221",
      href: "#",
    },
    {
      icon: Clock,
      title: "Working Hours",
      value: "Mon - Sat: 9:00 AM - 7:00 PM",
      href: "#",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Header */}
      <section className="pt-28 pb-12 hero-gradient">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-2xl mx-auto"
          >
            <h1 className="text-3xl md:text-4xl font-heading font-bold text-primary-foreground mb-4">
              Contact Us
            </h1>
            <p className="text-primary-foreground/80">
              Have questions or want to schedule a site visit? We're here to help you
              find your perfect plot.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Info */}
            <div className="space-y-6">
              <h2 className="text-2xl font-heading font-bold text-foreground mb-6">
                Get in Touch
              </h2>
              {contactInfo.map((item) => (
                <motion.a
                  key={item.title}
                  href={item.href}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="flex items-start gap-4 p-4 rounded-xl bg-card border border-border hover:border-primary/30 transition-colors block"
                >
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <item.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">{item.title}</p>
                    <p className="text-foreground font-medium">{item.value}</p>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-2 bg-card rounded-2xl p-8 border border-border"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Calendar className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h2 className="text-xl font-heading font-semibold text-foreground">
                    Book a Site Visit
                  </h2>
                  <p className="text-sm text-muted-foreground">
                    Fill the form and our team will contact you shortly
                  </p>
                </div>
              </div>

              <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">
                    Full Name *
                  </label>
                  <Input placeholder="Enter your name" className="h-12" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">
                    Phone Number *
                  </label>
                  <Input placeholder="+91 9691365052" type="tel" className="h-12" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">
                    Email Address
                  </label>
                  <Input placeholder="you@example.com" type="email" className="h-12" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">
                    Preferred Location
                  </label>
                  <Select>
                    <SelectTrigger className="h-12">
                      <SelectValue placeholder="Select location" />
                    </SelectTrigger>
                    <SelectContent className="bg-popover border-border">
                      <SelectItem value="chennai">Chennai</SelectItem>
                      <SelectItem value="bangalore">Bangalore</SelectItem>
                      <SelectItem value="hyderabad">Hyderabad</SelectItem>
                      <SelectItem value="coimbatore">Coimbatore</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">
                    Budget Range
                  </label>
                  <Select>
                    <SelectTrigger className="h-12">
                      <SelectValue placeholder="Select budget" />
                    </SelectTrigger>
                    <SelectContent className="bg-popover border-border">
                      <SelectItem value="0-25L">Under ₹25 Lakhs</SelectItem>
                      <SelectItem value="25L-50L">₹25 - 50 Lakhs</SelectItem>
                      <SelectItem value="50L-1Cr">₹50 Lakhs - 1 Cr</SelectItem>
                      <SelectItem value="1Cr+">₹1 Crore+</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">
                    Preferred Visit Date
                  </label>
                  <Input type="date" className="h-12" />
                </div>
                <div className="md:col-span-2 space-y-2">
                  <label className="text-sm font-medium text-foreground">
                    Additional Message
                  </label>
                  <Textarea
                    placeholder="Tell us more about your requirements..."
                    rows={4}
                    className="resize-none"
                  />
                </div>
                <div className="md:col-span-2">
                  <Button size="lg" className="w-full md:w-auto">
                    <Calendar className="w-4 h-4 mr-2" />
                    Submit & Book Visit
                  </Button>
                </div>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
