// src/components/Header.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import 'remixicon/fonts/remixicon.css';

function Header() {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const toggleMobileMenu = () => {
    setShowMobileMenu(!showMobileMenu);
  };

  return (
    <header className="bg-white shadow-sm border-b border-gray-100 sticky top-0 z-50">
      <div className="w-full px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 relative flex items-center justify-center">
              <div className="absolute w-8 h-8 bg-primary transform rotate-45 rounded-lg"></div>
              <div className="absolute w-8 h-8 bg-secondary/80 transform rotate-12 rounded-lg"></div>
              <i className="ri-shopping-cart-line text-white text-lg relative z-10"></i>
            </div>
            <span className="font-['Poppins'] font-bold text-2xl text-primary">NeoCart</span>
          </div>
          <nav className={`${showMobileMenu ? 'block' : 'hidden'} md:flex items-center space-x-8`}>
            <Link to="/journey-planner" className="text-gray-600 hover:text-primary transition-colors font-medium">Journey Planner</Link>
            <Link to="/ar-product-configurator" className="text-gray-600 hover:text-primary transition-colors font-medium">Virtual Configurator</Link>
            <Link to="/post-purchase-dashboard" className="text-gray-600 hover:text-primary transition-colors font-medium">Purchases</Link>
            <Link to="/community" className="text-gray-600 hover:text-primary transition-colors font-medium">Community</Link>
            <Link to="/navigation" className="text-gray-600 hover:text-primary transition-colors font-medium">In-Store Navigation</Link>

            <div className="relative group">
              <Link to="#" className="flex items-center gap-2 text-gray-600 hover:text-primary transition-colors font-medium">
                <i className="ri-robot-line text-lg"></i>
                Talk to Neo
              </Link>
              <div className="absolute hidden group-hover:block bg-white shadow-lg rounded-lg py-2 px-4 whitespace-nowrap -left-4 mt-1">
                <p className="text-sm text-gray-600">Your AI Shopping Assistant</p>
              </div>
            </div>
          </nav>
          <div className="flex items-center space-x-4">
            <button className="w-10 h-10 flex items-center justify-center text-gray-600 hover:text-primary transition-colors">
              <i className="ri-user-line text-xl"></i>
            </button>
            <button 
              className="md:hidden w-10 h-10 flex items-center justify-center text-gray-600"
              onClick={toggleMobileMenu}
            >
              <i className="ri-menu-line text-xl"></i>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;