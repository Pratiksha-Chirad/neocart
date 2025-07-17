// src/components/Breadcrumb.js
import React from 'react';
import { Link } from 'react-router-dom';
import 'remixicon/fonts/remixicon.css';

function Breadcrumb() {
  return (
    <div className="bg-gray-50 border-b border-gray-100">
      <div className="max-w-6xl mx-auto px-6 py-3">
        <nav className="flex items-center space-x-2 text-sm">
          <Link to="/" className="text-primary hover:text-primary/80 transition-colors">Home</Link>
          <i className="ri-arrow-right-s-line text-gray-400"></i>
          <Link to="/" className="text-primary hover:text-primary/80 transition-colors">Smart Shopping</Link>
          <i className="ri-arrow-right-s-line text-gray-400"></i>
          <span className="text-gray-600">Personal Assistant</span>
        </nav>
      </div>
    </div>
  );
}

export default Breadcrumb;