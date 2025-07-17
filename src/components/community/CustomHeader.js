import React from 'react';
import { Link } from 'react-router-dom';

const CustomHeader = () => {
    return (
        <header className="sticky top-0 z-50 glassmorphism">
            <div className="max-w-7xl mx-auto px-6 py-4">
                <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                        <div className="w-10 h-10 flex items-center justify-center text-purple-600">
                            <i className="ri-shopping-cart-2-fill text-2xl"></i>
                        </div>
                        <div className="font-['Pacifico'] text-2xl text-purple-600">neocart</div>
                    </div>
                    <nav className="flex space-x-8">
                        <Link to="/" className="text-gray-700 hover:text-primary transition-colors">Home</Link>
                        <Link to="/journey-planner" className="text-gray-700 hover:text-primary transition-colors">Journey Planner</Link>
                        <Link to="/ar-product-configurator" className="text-gray-700 hover:text-primary transition-colors">Virtual Configurator</Link>
                        <Link to="/post-purchase-dashboard" className="text-primary font-medium">Purchases</Link>
                        <Link to="/navigation" className="text-gray-700 hover:text-primary transition-colors">In-Store Navigation</Link>
                        <div className="relative group">
                            <a href="#" className="flex items-center gap-2 text-gray-600 hover:text-primary transition-colors font-medium">
                                <i className="ri-robot-line text-lg"></i>
                                Talk to Neo
                            </a>
                            <div className="absolute hidden group-hover:block bg-white shadow-lg rounded-lg py-2 px-4 whitespace-nowrap -left-4 mt-1">
                                <p className="text-sm text-gray-600">Your AI Shopping Assistant</p>
                            </div>
                        </div>
                    </nav>
                    <div className="flex space-x-4">
                        <div className="w-10 h-10 flex items-center justify-center glassmorphism rounded-full floating-icon">
                            <i className="ri-search-line text-gray-700"></i>
                        </div>
                        <div className="w-10 h-10 flex items-center justify-center glassmorphism rounded-full floating-icon" style={{ animationDelay: '-1s' }}>
                            <i className="ri-notification-line text-gray-700"></i>
                        </div>
                        <div className="w-10 h-10 flex items-center justify-center glassmorphism rounded-full floating-icon" style={{ animationDelay: '-2s' }}>
                            <i className="ri-user-line text-gray-700"></i>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default CustomHeader;