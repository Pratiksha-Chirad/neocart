import React from 'react';

const DeviceStatus = ({ device }) => {
  const { icon, iconBg, iconColor, name, status, statusIndicator, buttons } = device;

  return (
    <div className="device-status bg-white/50 rounded-xl p-4 hover:bg-white/70 transition-colors cursor-pointer">
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center space-x-3">
          <div className={`w-10 h-10 ${iconBg} rounded-lg flex items-center justify-center`}>
            <i className={`${icon} ${iconColor}`}></i>
          </div>
          <div>
            <h4 className="font-medium text-gray-900">{name}</h4>
            <p className="text-sm text-gray-500">{status}</p>
          </div>
        </div>
        <div className={`w-3 h-3 ${statusIndicator} rounded-full ${['bg-yellow-400', 'bg-red-400'].includes(statusIndicator) ? 'animate-pulse' : ''}`}></div>
      </div>
      <div className="flex space-x-2">
        {buttons.map((button, index) => (
          <button 
            key={index}
            className={`${button.bg} ${button.textColor} px-3 py-1 rounded text-xs ${button.hoverBg} transition-colors !rounded-button whitespace-nowrap`}
            onClick={button.action}
          >
            {button.text}
          </button>
        ))}
      </div>
    </div>
  );
};

export default DeviceStatus;