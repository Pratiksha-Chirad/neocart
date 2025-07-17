import React from 'react';
import ProductCard from './ProductCard';

const TrendingProducts = () => {
    const products = [
        {
            id: 1,
            title: "Premium Wireless Headphones",
            description: "Crystal clear sound quality with active noise cancellation",
            image: "https://readdy.ai/api/search-image?query=modern%20wireless%20headphones%20with%20sleek%20design%20on%20clean%20white%20background%2C%20professional%20product%20photography%2C%20minimalist%20aesthetic%2C%20soft%20lighting&width=300&height=200&seq=headphones1&orientation=landscape",
            rating: "4.8",
            price: "299",
            tags: [
                { name: "Viral", color: "pink" },
                { name: "TechTrend", color: "blue" }
            ]
        },
        {
            id: 2,
            title: "Organic Cotton T-Shirt",
            description: "Sustainably made with 100% organic cotton",
            image: "https://readdy.ai/api/search-image?query=sustainable%20eco-friendly%20cotton%20t-shirt%20on%20clean%20white%20background%2C%20organic%20fabric%20texture%2C%20natural%20lighting%2C%20minimalist%20product%20photography&width=300&height=200&seq=tshirt1&orientation=landscape",
            rating: "4.9",
            price: "45",
            tags: [
                { name: "EcoFriendly", color: "green" },
                { name: "Sustainable", color: "purple" }
            ]
        },
        {
            id: 3,
            title: "Latest Smartphone Pro",
            description: "Advanced camera system with AI photography",
            image: "https://readdy.ai/api/search-image?query=latest%20smartphone%20with%20modern%20design%20on%20clean%20white%20background%2C%20sleek%20technology%20device%2C%20professional%20product%20photography%2C%20minimalist%20style&width=300&height=200&seq=phone1&orientation=landscape",
            rating: "4.7",
            price: "999",
            tags: [
                { name: "NewRelease", color: "red" },
                { name: "TechGadget", color: "yellow" }
            ]
        }
    ];

    return (
        <section className="mb-16">
            <div className="flex items-center justify-between mb-8">
                <h2 className="text-3xl font-bold text-gray-800">Trending Products</h2>
                <div className="flex items-center space-x-2 text-gray-600">
                    <div className="w-6 h-6 flex items-center justify-center">
                        <i className="ri-fire-line text-orange-500"></i>
                    </div>
                    <span className="font-medium">Hot Right Now</span>
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {products.map(product => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        </section>
    );
};

export default TrendingProducts;