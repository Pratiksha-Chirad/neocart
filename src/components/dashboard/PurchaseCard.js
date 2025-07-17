import React from 'react';

const StatusIndicator = ({ status }) => {
  const statusConfig = {
    'All Good': {
      bgColor: 'bg-green-400',
      textColor: 'text-green-600'
    },
    'Update Needed': {
      bgColor: 'bg-yellow-400',
      textColor: 'text-yellow-600'
    },
    'Maintenance Due': {
      bgColor: 'bg-red-400',
      textColor: 'text-red-600'
    }
  };

  const config = statusConfig[status] || statusConfig['All Good'];

  return (
    <div className="absolute top-2 right-2 flex items-center space-x-1">
      <div className={`w-3 h-3 ${config.bgColor} rounded-full animate-pulse`}></div>
      <span className={`text-xs ${config.textColor} font-medium`}>{status}</span>
    </div>
  );
};

const PurchaseCard = ({ product }) => {
  return (
    <div className="purchase-card bg-white/70 backdrop-blur-lg rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-white/20">
      <div className="relative mb-4">
        <img src={product.image} alt={product.name} className="w-full h-32 object-cover object-top rounded-lg" />
        <StatusIndicator status={product.status} />
      </div>
      <h3 className="font-semibold text-gray-900 mb-1">{product.name}</h3>
      <p className="text-sm text-gray-500 mb-3">Purchased: {product.purchaseDate}</p>
      <div className="flex items-center justify-between">
        <span className={`text-sm ${product.status === 'All Good' ? 'text-green-600' : product.status === 'Update Needed' ? 'text-yellow-600' : 'text-red-600'} font-medium`}>
          Smart Status: {product.status}
        </span>
        <button className="text-primary hover:text-primary/80 transition-colors !rounded-button whitespace-nowrap">
          <div className="w-5 h-5 flex items-center justify-center">
            <i className="ri-arrow-right-line"></i>
          </div>
        </button>
      </div>
    </div>
  );
};

export default PurchaseCard;