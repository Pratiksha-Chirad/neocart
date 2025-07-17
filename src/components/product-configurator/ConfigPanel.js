import React, { useState } from 'react';

const ConfigPanel = ({ isActive, onClose }) => {
  const [size, setSize] = useState(100);
  const [positionX, setPositionX] = useState(50);
  const [positionY, setPositionY] = useState(50);

  return (
    <div className={`config-panel fixed top-0 right-0 w-96 h-full bg-white shadow-2xl z-50 ${isActive ? 'active' : ''}`}>
      <div className="p-6 border-b border-gray-200">
        <div className="flex items-center justify-between">
          <h3 className="text-xl font-semibold text-gray-800">Configure Product</h3>
          <button 
            className="w-8 h-8 flex items-center justify-center text-gray-500 hover:text-gray-700"
            onClick={onClose}
          >
            <i className="ri-close-line"></i>
          </button>
        </div>
      </div>
      
      <div className="p-6 overflow-y-auto h-full pb-32">
        <div className="mb-8">
          <h4 className="text-lg font-medium text-gray-800 mb-4">Colors & Materials</h4>
          <div className="grid grid-cols-4 gap-3">
            <div className="w-12 h-12 rounded-xl bg-gray-200 border-2 border-primary cursor-pointer"></div>
            <div className="w-12 h-12 rounded-xl bg-blue-200 border-2 border-transparent cursor-pointer hover:border-primary"></div>
            <div className="w-12 h-12 rounded-xl bg-green-200 border-2 border-transparent cursor-pointer hover:border-primary"></div>
            <div className="w-12 h-12 rounded-xl bg-pink-200 border-2 border-transparent cursor-pointer hover:border-primary"></div>
          </div>
        </div>
        
        <div className="mb-8">
          <h4 className="text-lg font-medium text-gray-800 mb-4">Style Variants</h4>
          <div className="grid grid-cols-2 gap-4">
            <div className="glass-card rounded-xl p-4 cursor-pointer border-2 border-primary">
              <img 
                src="https://readdy.ai/api/search-image?query=Modern%20furniture%20style%20variant%20with%20clean%20lines%20and%20minimalist%20design%2C%20contemporary%20home%20decor%20piece%20in%20neutral%20colors%2C%20sleek%20and%20sophisticated%20appearance&width=120&height=80&seq=variant1&orientation=landscape" 
                alt="Modern Style" 
                className="w-full h-16 object-cover object-top rounded-lg mb-2"
              />
              <p className="text-sm text-gray-700 text-center">Modern</p>
            </div>
            <div className="glass-card rounded-xl p-4 cursor-pointer border-2 border-transparent hover:border-primary">
              <img 
                src="https://readdy.ai/api/search-image?query=Classic%20furniture%20style%20variant%20with%20traditional%20design%20elements%2C%20elegant%20home%20decor%20piece%20with%20timeless%20appeal%2C%20sophisticated%20craftsmanship%20and%20refined%20details&width=120&height=80&seq=variant2&orientation=landscape" 
                alt="Classic Style" 
                className="w-full h-16 object-cover object-top rounded-lg mb-2"
              />
              <p className="text-sm text-gray-700 text-center">Classic</p>
            </div>
          </div>
        </div>
        
        <div className="mb-8">
          <h4 className="text-lg font-medium text-gray-800 mb-4">Size & Position</h4>
          <div className="space-y-4">
            <div>
              <label className="block text-sm text-gray-600 mb-2">Size</label>
              <input 
                type="range" 
                min="50" 
                max="150" 
                value={size} 
                onChange={(e) => setSize(e.target.value)} 
                className="w-full"
              />
            </div>
            <div>
              <label className="block text-sm text-gray-600 mb-2">Position X</label>
              <input 
                type="range" 
                min="0" 
                max="100" 
                value={positionX} 
                onChange={(e) => setPositionX(e.target.value)} 
                className="w-full"
              />
            </div>
            <div>
              <label className="block text-sm text-gray-600 mb-2">Position Y</label>
              <input 
                type="range" 
                min="0" 
                max="100" 
                value={positionY} 
                onChange={(e) => setPositionY(e.target.value)} 
                className="w-full"
              />
            </div>
          </div>
        </div>
        
        <div className="mb-8">
          <h4 className="text-lg font-medium text-gray-800 mb-4">Live Preview</h4>
          <div className="glass-card rounded-xl p-4">
            <div className="w-full h-32 bg-gray-100 rounded-lg flex items-center justify-center">
              <span className="text-gray-500">Preview will appear here</span>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 p-6 bg-white border-t border-gray-200">
        <div className="flex gap-3">
          <button 
            className="flex-1 px-4 py-3 bg-primary text-white rounded-button whitespace-nowrap !rounded-button hover:bg-primary/90 transition-colors"
            onClick={onClose}
          >
            Apply Changes
          </button>
          <button 
            className="px-4 py-3 text-gray-600 border border-gray-300 rounded-button whitespace-nowrap !rounded-button hover:bg-gray-50 transition-colors"
            onClick={onClose}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfigPanel;