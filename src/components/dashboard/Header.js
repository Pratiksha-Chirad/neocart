import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="relative z-10 bg-white/80 backdrop-blur-lg border-b border-white/20 shadow-sm">
      <div className="w-full px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-8">
            <div className="font-['Pacifico'] text-2xl text-primary">Neocart</div>
            <nav className="hidden md:flex space-x-6">
              <Link to="/" className="text-gray-700 hover:text-primary transition-colors">Home</Link>
              <Link to="/journey-planner" className="text-gray-700 hover:text-primary transition-colors">Journey Planner</Link>
              <Link to="/ar-product-configurator" className="text-gray-700 hover:text-primary transition-colors">Virtual Configurator</Link>
              <Link to="/community" className="text-gray-700 hover:text-primary transition-colors">Community</Link>
              <Link to="/navigation" className="text-gray-700 hover:text-primary transition-colors">In-Store Navigation</Link>
              <div className="relative group">
                <a href="#" className="flex items-center gap-2 text-gray-600 hover:text-primary transition-colors font-medium">
                  <i className="ri-robot-line text-lg"></i>
                  Talk to Neo
                </a>
                <div className="absolute hidden group-hover:block bg-white shadow-lg rounded-lg py-2 px-4 whitespace-nowrap -left-4 mt-1">
                  <p className="text-sm text-gray-600">Your AI Shopping Assistant</p>
                </div>
              </div>
            </nav>
          </div>
          <div className="flex items-center space-x-4">
            <div className="w-8 h-8 flex items-center justify-center">
              <i className="ri-shopping-cart-line text-gray-600"></i>
            </div>
            <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
              <i className="ri-user-line text-white text-sm"></i>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;