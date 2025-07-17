import React from 'react';
import { Link } from 'react-router-dom';

const NavigationHeader = () => {
  return (
    <>
      <nav className="w-full fixed top-0 left-0 z-30 bg-gradient-to-r from-primary/90 to-secondary/90 shadow-lg backdrop-blur-md">
        <div className="max-w-6xl mx-auto px-6 flex items-center justify-between h-16">
          <div className="flex items-center gap-3">
            <span className="text-2xl font-bold text-white tracking-wide">NeoCart</span>
            <span className="text-2xl">🛒</span>
          </div>
          <ul className="hidden md:flex items-center gap-8">
            <li>
              <Link to="/" className="text-white/90 hover:text-white font-medium transition-colors">Home</Link>
            </li>
            <li>
              <Link to="/journey-planner" className="text-white/90 hover:text-white font-medium transition-colors">Journey Planner</Link>
            </li>
            <li>
              <Link to="/ar-product-configurator" className="text-white/90 hover:text-white font-medium transition-colors">Virtual Configurator</Link>
            </li>
            <li>
              <Link to="/post-purchase-dashboard" className="text-white/90 hover:text-white font-medium transition-colors">Purchases</Link>
            </li>
            <li>
              <Link to="/community" className="text-white/90 hover:text-white font-medium transition-colors">Community</Link>
            </li>
          </ul>
          <div className="flex items-center gap-4">
            <button className="bg-white/90 text-primary px-4 py-2 rounded-button font-semibold shadow hover:bg-white transition-all">
              <i className="ri-user-line mr-2"></i>Account
            </button>
            <button className="md:hidden text-white text-2xl focus:outline-none">
              <i className="ri-menu-line"></i>
            </button>
          </div>
        </div>
      </nav>
      <div className="h-16"></div>
    </>
  );
};

export default NavigationHeader;