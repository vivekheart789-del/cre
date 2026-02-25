import React from "react";
import Hero from "./components/Hero";
import ProductCatalog from "./components/ProductCatalog";
import VIPDashboard from "./components/VIPDashboard";
import Footer from "./components/Footer";

const KVFullShowroom = () => {
  return (
    <div className="font-sans text-gray-900 overflow-x-hidden">
      <Hero />
      <ProductCatalog />
      <VIPDashboard />
      <Footer />
    </div>
  );
};

export default KVFullShowroom;
