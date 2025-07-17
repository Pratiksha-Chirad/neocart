import React, { useState } from 'react';

const ChatInterface = ({ isActive, onClose }) => {
  const [message, setMessage] = useState('');

  const handleSendMessage = () => {
    if (message.trim()) {
      // Logic to send message would go here
      setMessage('');
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && message.trim()) {
      handleSendMessage();
    }
  };

  return (
    <div className={`chat-interface fixed bottom-8 right-8 w-80 h-96 bg-white rounded-2xl shadow-2xl z-50 ${isActive ? 'active' : ''}`}>
      <div className="p-4 border-b border-gray-200 rounded-t-2xl bg-gradient-to-r from-primary to-secondary text-white">
        <div className="flex items-center justify-between">
          <h3 className="font-semibold">AI Assistant</h3>
          <button 
            className="w-6 h-6 flex items-center justify-center text-white/80 hover:text-white"
            onClick={onClose}
          >
            <i className="ri-close-line"></i>
          </button>
        </div>
      </div>
      
      <div className="p-4 h-64 overflow-y-auto">
        <div className="glass-card rounded-xl p-3 mb-4">
          <p className="text-sm text-gray-700">Want help choosing the right sofa for your wall color?</p>
        </div>
        
        <div className="flex flex-wrap gap-2 mb-4">
          <button className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm hover:bg-primary/20 transition-colors whitespace-nowrap !rounded-button">
            Color matching
          </button>
          <button className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm hover:bg-primary/20 transition-colors whitespace-nowrap !rounded-button">
            Size guide
          </button>
          <button className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm hover:bg-primary/20 transition-colors whitespace-nowrap !rounded-button">
            Style tips
          </button>
        </div>
      </div>
      
      <div className="p-4 border-t border-gray-200">
        <div className="flex gap-2">
          <input 
            type="text" 
            placeholder="Ask me anything..." 
            className="flex-1 px-3 py-2 border border-gray-300 rounded-lg text-sm outline-none focus:border-primary"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyPress={handleKeyPress}
          />
          <button 
            className="w-10 h-10 bg-primary text-white rounded-lg flex items-center justify-center hover:bg-primary/90 transition-colors"
            onClick={handleSendMessage}
          >
            <div className="w-4 h-4 flex items-center justify-center">
              <i className="ri-send-plane-line"></i>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatInterface;