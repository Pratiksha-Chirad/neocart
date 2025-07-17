import React from 'react';

const StoreMap = () => {
    return (
        <div className="bg-gray-50 rounded-2xl p-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
                <i className="ri-map-2-line text-primary"></i>
                Store Map
            </h3>
            <div className="relative bg-white rounded-xl p-4 h-64">
                <div className="absolute inset-4 bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg overflow-hidden">
                    <div className="grid grid-cols-4 gap-2 p-4 h-full">
                        <div className="bg-primary/20 rounded text-xs flex items-center justify-center font-medium">Dairy</div>
                        <div className="bg-gray-300 rounded text-xs flex items-center justify-center font-medium">Produce</div>
                        <div className="bg-gray-300 rounded text-xs flex items-center justify-center font-medium">Meat</div>
                        <div className="bg-gray-300 rounded text-xs flex items-center justify-center font-medium">Deli</div>
                        <div className="bg-gray-300 rounded text-xs flex items-center justify-center font-medium">Bakery</div>
                        <div className="bg-secondary/20 rounded text-xs flex items-center justify-center font-medium">Personal</div>
                        <div className="bg-gray-300 rounded text-xs flex items-center justify-center font-medium">Health</div>
                        <div className="bg-gray-300 rounded text-xs flex items-center justify-center font-medium">Baby</div>
                        <div className="bg-gray-300 rounded text-xs flex items-center justify-center font-medium">Frozen</div>
                        <div className="bg-gray-300 rounded text-xs flex items-center justify-center font-medium">Snacks</div>
                        <div className="bg-gray-300 rounded text-xs flex items-center justify-center font-medium">Drinks</div>
                        <div className="bg-gray-300 rounded text-xs flex items-center justify-center font-medium">Checkout</div>
                    </div>
                    <div className="absolute top-6 left-6 w-3 h-3 bg-blue-500 rounded-full pulse-dot"></div>
                    <div className="absolute bottom-6 right-6 w-3 h-3 bg-red-500 rounded-full pulse-dot"></div>
                    <svg className="absolute inset-0 w-full h-full pointer-events-none">
                        <path d="M 24 24 L 120 24 L 120 80 L 200 80" stroke="#8B5CF6" strokeWidth="3" fill="none" strokeDasharray="5,5" opacity="0.7" />
                    </svg>
                </div>
            </div>
        </div>
    );
};

export default StoreMap;