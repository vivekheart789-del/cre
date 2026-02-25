import React from "react";

const Footer = () => (
  <footer className="bg-gray-900 text-white py-12">
    <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
      <div>
        <h3 className="text-2xl font-serif mb-2">KV</h3>
        <p>Exclusivity Redefined</p>
      </div>
      <form className="flex flex-col md:flex-row gap-4">
        <input type="email" placeholder="Subscribe to newsletter" className="px-4 py-2 rounded text-black" />
        <button className="bg-gold-500 text-black font-semibold py-2 px-4 rounded hover:bg-gold-400 transition">Subscribe</button>
      </form>
    </div>
    <p className="text-gray-500 text-center mt-6">© {new Date().getFullYear()} KV. All rights reserved.</p>
  </footer>
);

export default Footer;
