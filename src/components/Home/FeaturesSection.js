// src/components/FeaturesSection.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import 'remixicon/fonts/remixicon.css';

function FeaturesSection() {
  const navigate = useNavigate();
  
  return (
    <section className="py-20 px-6 relative overflow-hidden" style={{ background: "linear-gradient(to right, #ffffff 50%, #f0f7ff 50%)" }}>
      <div className="floating-blob blob-3"></div>
      <div className="floating-blob blob-4"></div>
      <div className="max-w-6xl mx-auto relative">
        <div className="text-center mb-16 relative z-10">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Explore Our Smart Features</h2>
          <p className="text-xl text-gray-600">Choose your path to a smarter shopping experience</p>
        </div>
        <div className="grid md:grid-cols-2 gap-8 relative z-10">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group cursor-pointer hover:bg-white/90 hover:scale-[1.02]">
            <div className="w-16 h-16 flex items-center justify-center bg-blue-100 rounded-xl mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
              <i className="ri-todo-line text-2xl text-primary group-hover:text-white"></i>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Journey Planner</h3>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Have a goal like hosting a BBQ party or organizing your home office? Let our AI-powered planner create a personalized shopping journey with smart recommendations and timeline management.
            </p>
            <button 
              className="bg-primary text-white px-6 py-3 !rounded-button font-semibold hover:bg-blue-600 transition-colors whitespace-nowrap"
              onClick={() => navigate('/journey-planner')}
            >
              Plan a Goal
            </button>
          </div>
          
          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow group cursor-pointer">
            <div className="w-16 h-16 flex items-center justify-center bg-purple-100 rounded-xl mb-6 group-hover:bg-secondary group-hover:text-white transition-colors">
              <i className="ri-3d-view-line text-2xl text-secondary group-hover:text-white"></i>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Virtual Product Configurator</h3>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Visualize and personalize products in stunning 3D detail. See exactly how furniture fits in your space, customize colors and materials, and make confident purchase decisions.
            </p>
            <button 
              className="bg-secondary text-white px-6 py-3 !rounded-button font-semibold hover:bg-purple-600 transition-colors whitespace-nowrap"
              onClick={() => navigate('/ar-product-configurator')}
            >
              Try the Configurator
            </button>
          </div>
          
          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow group cursor-pointer">
            <div className="w-16 h-16 flex items-center justify-center bg-green-100 rounded-xl mb-6 group-hover:bg-green-500 group-hover:text-white transition-colors">
              <i className="ri-notification-3-line text-2xl text-green-500 group-hover:text-white"></i>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Proactive Support Dashboard</h3>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Get smart alerts, maintenance reminders, and personalized care tips for your recent purchases. Never miss warranty deadlines or important product updates again.
            </p>
            <button 
              className="bg-green-500 text-white px-6 py-3 !rounded-button font-semibold hover:bg-green-600 transition-colors whitespace-nowrap"
              onClick={() => navigate('/post-purchase-dashboard')}
            >
              Go to My Purchases
            </button>
          </div>
          
          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow group cursor-pointer">
            <div className="w-16 h-16 flex items-center justify-center bg-orange-100 rounded-xl mb-6 group-hover:bg-orange-500 group-hover:text-white transition-colors">
              <i className="ri-team-line text-2xl text-orange-500 group-hover:text-white"></i>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Community Discovery</h3>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Discover trending items loved by real users, read authentic reviews, ask questions, and get recommendations from a community of smart shoppers just like you.
            </p>
            <button 
              className="bg-orange-500 text-white px-6 py-3 !rounded-button font-semibold hover:bg-orange-600 transition-colors whitespace-nowrap"
              onClick={() => navigate('/community')}
            >
              Explore Community
            </button>
          </div>
          
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group cursor-pointer hover:bg-white/90 hover:scale-[1.02]">
            <div className="w-16 h-16 flex items-center justify-center bg-red-100 rounded-xl mb-6 group-hover:bg-red-500 group-hover:text-white transition-colors">
              <i className="ri-compass-line text-2xl text-red-500 group-hover:text-white"></i>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">In-Store Navigation</h3>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Effortlessly navigate our store! Access interactive maps and real-time product locations. Find items, departments, and services quickly for a smarter shopping experience.
            </p>
            <button 
              className="bg-red-500 text-white px-6 py-3 !rounded-button font-semibold hover:bg-red-600 transition-colors whitespace-nowrap"
              onClick={() => navigate('/navigation')}
            >
              Start Navigation
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FeaturesSection;