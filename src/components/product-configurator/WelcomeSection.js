import React, { useState } from 'react';

const WelcomeSection = ({ onNext }) => {
  const [taskInput, setTaskInput] = useState('');

  const handleNext = () => {
    if (taskInput.trim()) {
      onNext();
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && taskInput.trim()) {
      onNext();
    }
  };

  return (
    <div className="max-w-4xl mx-auto text-center mb-16">
      <h1 className="text-5xl font-bold text-gray-800 mb-8">Interactive Virtual Product Configurator</h1>
      
      <div className="glass-card rounded-3xl p-12 glow-border mb-8">
        <div className="w-8 h-8 flex items-center justify-center text-2xl text-primary mb-6 mx-auto">
          <i className="ri-edit-line"></i>
        </div>
        <h2 className="text-2xl font-semibold text-gray-700 mb-6">What would you like to do today?</h2>
        
        <div className="relative">
          <input 
            type="text" 
            placeholder="Customize my living room"
            className="w-full px-6 py-4 text-lg rounded-2xl border-none outline-none bg-white/50 backdrop-blur-sm text-gray-800 placeholder-gray-500"
            value={taskInput}
            onChange={(e) => setTaskInput(e.target.value)}
            onKeyPress={handleKeyPress}
          />
        </div>
        
        <button 
          className="mt-8 px-8 py-4 bg-gradient-to-r from-primary to-secondary text-white font-semibold rounded-button whitespace-nowrap !rounded-button hover:shadow-lg transition-all duration-300"
          onClick={handleNext}
        >
          Next
          <div className="w-4 h-4 inline-flex items-center justify-center ml-2">
            <i className="ri-arrow-right-line"></i>
          </div>
        </button>
      </div>
    </div>
  );
};

export default WelcomeSection;