import React, { useState, useEffect } from 'react';

const VirtualAssistant = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAssistant = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div id="virtual-assistant" className="fixed bottom-6 right-6 z-50">
      <div 
        className="assistant-widget bg-white/90 backdrop-blur-lg rounded-2xl p-4 shadow-xl border border-white/20 max-w-80"
        style={{ 
          transform: isOpen ? 'translateY(0)' : 'translateY(100%)',
          opacity: isOpen ? 1 : 0
        }}
      >
        <div className="flex items-start space-x-3 mb-3">
          <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center animate-bounce">
            <i className="ri-robot-line text-white"></i>
          </div>
          <div className="flex-1">
            <h4 className="font-medium text-gray-900 mb-1">Smart Assistant</h4>
            <p className="text-sm text-gray-600">Hi! I noticed your AC efficiency is low. Want a cleanup appointment?</p>
          </div>
        </div>
        <div className="flex space-x-2">
          <button className="bg-primary text-white px-3 py-2 rounded-button text-sm hover:bg-primary/80 transition-colors flex-1 !rounded-button whitespace-nowrap">
            Yes, Schedule
          </button>
          <button className="bg-gray-100 text-gray-700 px-3 py-2 rounded-button text-sm hover:bg-gray-200 transition-colors flex-1 !rounded-button whitespace-nowrap">
            Not Now
          </button>
        </div>
      </div>
      <button 
        className="assistant-button w-14 h-14 bg-gradient-to-br from-primary to-secondary rounded-full shadow-lg flex items-center justify-center hover:shadow-xl transition-all duration-300 animate-bounce"
        onClick={toggleAssistant}
        style={{ transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}
      >
        <i className="ri-customer-service-2-line text-white text-xl"></i>
      </button>
    </div>
  );
};

export default VirtualAssistant;