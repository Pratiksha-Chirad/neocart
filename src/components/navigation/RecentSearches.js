import React from 'react';

const RecentSearches = ({ onSearchItemClick }) => {
    const recentItems = [
        { icon: 'ri-drop-line', color: 'primary', name: 'Organic Milk' },
        { icon: 'ri-scissors-line', color: 'secondary', name: 'Shampoo' },
        { icon: 'ri-heart-line', color: 'pink-500', bgColor: 'pink-100', name: 'Baby Formula' }
    ];

    return (
        <div className="bg-gray-50 rounded-2xl p-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
                <i className="ri-time-line text-primary"></i>
                Recent Searches
            </h3>
            <div className="space-y-3">
                {recentItems.map((item, index) => (
                    <div
                        key={index}
                        className="flex items-center justify-between p-3 bg-white rounded-lg hover:bg-gray-50 cursor-pointer transition-colors"
                        onClick={() => onSearchItemClick(item.name)}
                    >
                        <div className="flex items-center gap-3">
                            <div className={`w-8 h-8 flex items-center justify-center bg-${item.color === 'primary' || item.color === 'secondary' ? item.color + '/10' : item.bgColor} rounded-full`}>
                                <i className={`${item.icon} text-${item.color}`}></i>
                            </div>
                            <span className="font-medium text-gray-700">{item.name}</span>
                        </div>
                        <i className="ri-arrow-right-line text-gray-400"></i>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default RecentSearches;