import React from 'react';

const NavigationTips = () => {
    return (
        <div className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl p-6 text-center">
            <div className="w-16 h-16 flex items-center justify-center bg-white rounded-full mx-auto mb-4">
                <i className="ri-magic-line text-primary text-2xl"></i>
            </div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
                AR Navigation Tips
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
                Hold your phone steady and follow the purple arrows. The
                system will guide you through the most efficient path to your
                destination.
            </p>
        </div>
    );
};

export default NavigationTips;