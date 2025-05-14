import React from 'react';
import { Link } from 'react-router-dom';
import { assets } from '../assets/assets';

const Footer = () => {
  return (
    <footer className="mt-16 text-white bg-white/10 backdrop-blur p-6 sm:p-10 rounded-t-3xl">
      <div className="max-w-7xl mx-auto grid gap-8 sm:grid-cols-2 md:grid-cols-3">
        <div>
          <div className="flex items-center mb-4">
            <img src={assets.logo} alt="Logo" className="w-10 h-10 mr-2" />
            <h2 className="text-2xl font-semibold">Ink2Pic</h2>
          </div>
          <p className="opacity-80 text-sm">
            Create stunning AI-generated visuals from just a few words. Let your imagination take form with the power of artificial intelligence.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-2">Quick Links</h3>
          <ul className="space-y-1 text-sm opacity-90">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/buy">Pricing</Link></li>
            <li><Link to="/result">My Creations</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-2">Connect</h3>
          <ul className="space-y-1 text-sm opacity-90">
            <li><a href="mailto:tanishasonkar110@gmail.com">tanishasonkar110@gmail.com</a></li>
            <li><a href="https://www.linkedin.com/in/tanisha-sonkar-19a489289/">LinkedIn</a></li>
            <li><a href="https://github.com/Tanisha110">Github</a></li>
          </ul>
        </div>
      </div>

      <div className="text-center mt-10 text-sm opacity-60 border-t border-white pt-4">
        © {new Date().getFullYear()} Ink2Pic. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
