import { Plot } from "@/components/PlotCard";

import plot1 from "@/assets/plot-1.jpg";
import plot2 from "@/assets/plot-2.jpg";
import plot3 from "@/assets/plot-3.jpg";
import plot4 from "@/assets/plot-4.jpg";

export const samplePlots: Plot[] = [
  {
    id: "1",
    title: "Premium Corner Plot in Green Valley",
    location: "OMR, Chennai",
    area: "1,200 sq.ft",
    price: "₹48 Lakhs",
    pricePerSqft: "₹4,000/sq.ft",
    status: "available",
    image: plot1,
    features: ["DTCP Approved", "Corner Plot", "Road Facing"],
    isApproved: true,
  },
  {
    id: "2",
    title: "Gated Community Plot - Phase 2",
    location: "Whitefield, Bangalore",
    area: "2,400 sq.ft",
    price: "₹96 Lakhs",
    pricePerSqft: "₹4,000/sq.ft",
    status: "available",
    image: plot2,
    features: ["RERA Approved", "Gated", "24/7 Security"],
    isApproved: true,
  },
  {
    id: "3",
    title: "Agricultural Land - Investment Plot",
    location: "Shamshabad, Hyderabad",
    area: "5,000 sq.ft",
    price: "₹75 Lakhs",
    pricePerSqft: "₹1,500/sq.ft",
    status: "available",
    image: plot3,
    features: ["Clear Title", "Fertile Land", "Water Access"],
    isApproved: false,
  },
  {
    id: "4",
    title: "Commercial Plot - NH Highway",
    location: "Hosur Road, Bangalore",
    area: "3,600 sq.ft",
    price: "₹1.8 Cr",
    pricePerSqft: "₹5,000/sq.ft",
    status: "reserved",
    image: plot4,
    features: ["Highway Access", "Commercial Zone", "High Visibility"],
    isApproved: true,
  },
  {
    id: "5",
    title: "Villa Plot in Sunrise Enclave",
    location: "ECR, Chennai",
    area: "1,800 sq.ft",
    price: "₹72 Lakhs",
    pricePerSqft: "₹4,000/sq.ft",
    status: "sold",
    image: plot1,
    features: ["Beach Nearby", "Villa Community", "Club House"],
    isApproved: true,
  },
  {
    id: "6",
    title: "Budget Friendly Residential Plot",
    location: "Coimbatore",
    area: "800 sq.ft",
    price: "₹16 Lakhs",
    pricePerSqft: "₹2,000/sq.ft",
    status: "available",
    image: plot2,
    features: ["DTCP Approved", "Temple Nearby", "School Zone"],
    isApproved: true,
  },
];

export const locations = [
  {
    id: "chennai",
    name: "Chennai",
    plotsCount: 156,
    startingPrice: "₹16 Lakhs",
    image: plot1,
  },
  {
    id: "bangalore",
    name: "Bangalore",
    plotsCount: 243,
    startingPrice: "₹25 Lakhs",
    image: plot2,
  },
  {
    id: "hyderabad",
    name: "Hyderabad",
    plotsCount: 189,
    startingPrice: "₹18 Lakhs",
    image: plot3,
  },
  {
    id: "coimbatore",
    name: "Coimbatore",
    plotsCount: 87,
    startingPrice: "₹12 Lakhs",
    image: plot4,
  },
];
