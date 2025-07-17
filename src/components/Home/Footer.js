// src/components/Footer.js
import React from 'react';
import { Link } from 'react-router-dom';
import 'remixicon/fonts/remixicon.css';

function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 relative flex items-center justify-center">
                <div className="absolute w-8 h-8 bg-primary transform rotate-45 rounded-lg"></div>
                <div className="absolute w-8 h-8 bg-secondary/80 transform rotate-12 rounded-lg"></div>
                <i className="ri-shopping-cart-line text-white text-lg relative z-10"></i>
              </div>
              <span className="font-['Poppins'] font-bold text-2xl text-primary">NeoCart</span>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Revolutionizing retail with smart technology and personalized experiences.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Features</h4>
            <ul className="space-y-2 text-gray-400">
              <li><Link to="/journey-planner" className="hover:text-white transition-colors">Journey Planner</Link></li>
              <li><Link to="/ar-product-configurator" className="hover:text-white transition-colors">3D Configurator</Link></li>
              <li><Link to="/post-purchase-dashboard" className="hover:text-white transition-colors">Smart Alerts</Link></li>
              <li><Link to="/community" className="hover:text-white transition-colors">Community</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Support</h4>
            <ul className="space-y-2 text-gray-400">
              <li><Link to="#" className="hover:text-white transition-colors">Help Center</Link></li>
              <li><Link to="#" className="hover:text-white transition-colors">Contact Us</Link></li>
              <li><Link to="#" className="hover:text-white transition-colors">Privacy Policy</Link></li>
              <li><Link to="#" className="hover:text-white transition-colors">Terms of Service</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Connect</h4>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 flex items-center justify-center bg-gray-800 rounded-lg hover:bg-primary transition-colors">
                <i className="ri-twitter-line"></i>
              </a>
              <a href="#" className="w-10 h-10 flex items-center justify-center bg-gray-800 rounded-lg hover:bg-primary transition-colors">
                <i className="ri-facebook-line"></i>
              </a>
              <a href="#" className="w-10 h-10 flex items-center justify-center bg-gray-800 rounded-lg hover:bg-primary transition-colors">
                <i className="ri-instagram-line"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
          <p>&copy; 2025 NeoCart. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;