import React from 'react';

const PredictionItem = ({ prediction, isLast = false }) => {
  const { icon, iconBg, iconColor, title, description, confidence, confidenceBg, confidenceColor, buttonText, buttonBg, buttonHoverBg } = prediction;

  return (
    <div className={`prediction-item ${!isLast ? 'border-b border-gray-100 pb-4' : ''}`}>
      <div className="flex items-start justify-between mb-2">
        <div className="flex items-center space-x-3">
          <div className={`w-8 h-8 ${iconBg} rounded-full flex items-center justify-center`}>
            <i className={`${icon} ${iconColor}`}></i>
          </div>
          <div>
            <h4 className="font-medium text-gray-900">{title}</h4>
            <p className="text-sm text-gray-600">{description}</p>
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <span className={`text-xs ${confidenceBg} ${confidenceColor} px-2 py-1 rounded-full`}>{confidence}% Confidence</span>
          <button className="text-primary hover:text-primary/80 !rounded-button whitespace-nowrap">
            <div className="w-5 h-5 flex items-center justify-center">
              <i className="ri-arrow-right-line"></i>
            </div>
          </button>
        </div>
      </div>
      <div className="ml-11">
        <button className={`${buttonBg} text-white px-4 py-2 rounded-button text-sm ${buttonHoverBg} transition-colors !rounded-button whitespace-nowrap`}>
          {buttonText}
        </button>
      </div>
    </div>
  );
};

export default PredictionItem;