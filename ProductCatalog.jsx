import React, { useState } from "react";
import { motion } from "framer-motion";
import { ProductCanvas } from "./Product3D";

const products = [
  { id: 1, name: "Bag", description: "Bespoke Leather Bag", model: "/models/bag.glb" },
  { id: 2, name: "Watch", description: "Signature Timepiece", model: "/models/watch.glb" },
  { id: 3, name: "Necklace", description: "Exclusive Necklace", model: "/models/necklace.glb" },
];

const fadeInUp = { hidden: { opacity: 0, y: 50 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8 } } };

const ProductCatalog = () => {
  const [activeProduct, setActiveProduct] = useState(null);
  return (
    <section className="py-24 bg-gray-50 text-center">
      <h2 className="text-4xl font-serif mb-12">Collection</h2>
      <div className="grid md:grid-cols-3 gap-12 px-6">
        {products.map((p) => (
          <motion.div
            key={p.id}
            className="bg-white rounded-2xl shadow-2xl p-6 cursor-pointer hover:scale-105 transition"
            onClick={() => setActiveProduct(p)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInUp}
          >
            <ProductCanvas modelPath={p.model} />
            <h3 className="text-2xl font-semibold mt-4">{p.name}</h3>
            <p className="text-gray-700">{p.description}</p>
          </motion.div>
        ))}
      </div>
      {/* Optional Modal can be added here */}
    </section>
  );
};

export default ProductCatalog;
