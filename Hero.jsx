import React from "react";
import { motion } from "framer-motion";

const Hero = () => (
  <section className="relative h-screen overflow-hidden">
    <motion.div
      className="absolute inset-0 bg-cover bg-center"
      style={{ backgroundImage: "url('/images/hero-bg.jpg')" }}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 2 }}
    />
    <div className="absolute inset-0 flex flex-col justify-center items-center text-center z-10 bg-black bg-opacity-40">
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-6xl md:text-8xl font-serif text-gold-500 mb-4"
      >
        KV
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="text-xl md:text-3xl text-white mb-6"
      >
        Exclusivity Redefined
      </motion.p>
      <motion.a
        href="#vip"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 1 }}
        className="bg-gold-500 text-black font-semibold py-3 px-8 rounded hover:bg-gold-400 transition"
      >
        Request Invitation
      </motion.a>
    </div>
  </section>
);

export default Hero;
