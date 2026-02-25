import React, { useState } from "react";
import { motion } from "framer-motion";

const fadeInUp = { hidden: { opacity: 0, y: 50 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8 } } };

const submitVIP = async (email) => new Promise((resolve) => setTimeout(() => resolve({ success: true }), 1000));

const VIPDashboard = () => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await submitVIP(email);
    if (res.success) setSubmitted(true);
  };

  return (
    <section id="vip" className="py-24 bg-black text-white text-center">
      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
        <h2 className="text-4xl md:text-5xl font-serif mb-6">VIP Access</h2>
        <p className="mb-8">Unlock private releases, bespoke services, and personalized experiences in our exclusive KV circle.</p>
        {!submitted ? (
          <form onSubmit={handleSubmit} className="flex flex-col md:flex-row justify-center items-center gap-4 mb-12">
            <input type="email" required placeholder="Enter your email" className="px-4 py-3 rounded text-black w-full md:w-auto" value={email} onChange={(e) => setEmail(e.target.value)} />
            <button className="bg-gold-500 text-black font-semibold py-3 px-6 rounded hover:bg-gold-400 transition">Request Invite</button>
          </form>
        ) : (
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-gold-500 font-semibold mb-12">VIP access granted. Enjoy your exclusive perks.</motion.p>
        )}
      </motion.div>
    </section>
  );
};

export default VIPDashboard;
