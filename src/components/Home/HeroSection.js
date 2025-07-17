// src/components/HeroSection.js
import React from 'react';
import { useNavigate } from 'react-router-dom';

function HeroSection() {
  const navigate = useNavigate();
  
  return (
    <section className="hero-bg relative min-h-screen flex items-center">
      <div className="floating-blob blob-1"></div>
      <div className="floating-blob blob-2"></div>
      <div className="hero-left-image"></div>
      <div className="hero-right-image"></div>
      <div className="relative w-full px-6 py-20">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-2xl mx-auto text-center">
            <h1 className="font-['Poppins'] text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Welcome to <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">NeoCart</span>
            </h1>
            <p className="text-xl text-gray-600 mb-12 leading-relaxed">
              Experience the future of shopping with our AI-powered platform that learns and adapts to your unique style and needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                className="bg-gradient-to-r from-primary to-secondary text-white px-8 py-4 !rounded-button font-semibold hover:opacity-90 transition-opacity whitespace-nowrap"
                onClick={() => navigate('/journey-planner')}
              >
                Start Shopping Journey
              </button>
              <button className="bg-white text-gray-900 border-2 border-gray-200 px-8 py-4 !rounded-button font-semibold hover:border-primary transition-colors whitespace-nowrap">
                Watch How It Works
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;