import React from 'react';

const AlertCard = ({ alert }) => {
  const { type, icon, title, description, buttonText, buttonAction } = alert;
  
  const typeStyles = {
    red: {
      bg: 'bg-red-50/80',
      border: 'border-red-100/50',
      iconBg: 'bg-red-100',
      iconColor: 'text-red-600',
      titleColor: 'text-red-900',
      descColor: 'text-red-700',
      buttonBg: 'bg-red-600',
      buttonHover: 'hover:bg-red-700'
    },
    yellow: {
      bg: 'bg-yellow-50/80',
      border: 'border-yellow-100/50',
      iconBg: 'bg-yellow-100',
      iconColor: 'text-yellow-600',
      titleColor: 'text-yellow-900',
      descColor: 'text-yellow-700',
      buttonBg: 'bg-yellow-600',
      buttonHover: 'hover:bg-yellow-700'
    },
    green: {
      bg: 'bg-green-50/80',
      border: 'border-green-100/50',
      iconBg: 'bg-green-100',
      iconColor: 'text-green-600',
      titleColor: 'text-green-900',
      descColor: 'text-green-700',
      buttonBg: 'bg-green-600',
      buttonHover: 'hover:bg-green-700'
    },
    blue: {
      bg: 'bg-blue-50/80',
      border: 'border-blue-100/50',
      iconBg: 'bg-blue-100',
      iconColor: 'text-blue-600',
      titleColor: 'text-blue-900',
      descColor: 'text-blue-700',
      buttonBg: 'bg-blue-600',
      buttonHover: 'hover:bg-blue-700'
    }
  };
  
  const styles = typeStyles[type] || typeStyles.blue;

  return (
    <div className={`alert-card min-w-80 ${styles.bg} backdrop-blur-lg rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border ${styles.border}`}>
      <div className="flex items-start space-x-4">
        <div className={`w-12 h-12 ${styles.iconBg} rounded-full flex items-center justify-center`}>
          <i className={`${icon} ${styles.iconColor} text-xl ${type === 'red' ? 'animate-pulse' : ''}`}></i>
        </div>
        <div className="flex-1">
          <h3 className={`font-semibold ${styles.titleColor} mb-2`}>{title}</h3>
          <p className={`text-sm ${styles.descColor} mb-4`}>{description}</p>
          <button 
            className={`${styles.buttonBg} text-white px-4 py-2 rounded-button text-sm ${styles.buttonHover} transition-colors !rounded-button whitespace-nowrap`}
            onClick={buttonAction}
          >
            {buttonText}
          </button>
        </div>
      </div>
    </div>
  );
};

export default AlertCard;