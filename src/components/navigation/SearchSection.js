import React, { useState } from 'react';

const SearchSection = ({ onSearch, setSelectedCategory }) => {
    const [searchValue, setSearchValue] = useState('');
    const [activeCategory, setActiveCategory] = useState('');

    const handleSearch = (e) => {
        setSearchValue(e.target.value);
        if (e.target.value.trim()) {
            onSearch(e.target.value);
        }
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter' && searchValue.trim()) {
            e.preventDefault();
            onSearch(searchValue);
        }
    };

    const handleCategoryClick = (category) => {
        setActiveCategory(category);
        const categoryText = category.split(' ').slice(1).join(' ');
        setSearchValue(categoryText);
        setSelectedCategory(category);
        onSearch(categoryText);
    };

    return (
        <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-800">
                Find Your Item
            </h2>
            <div className="relative">
                <input
                    type="text"
                    placeholder="Search item (e.g., eggs, shampoo, baby food)"
                    className="w-full px-6 py-4 text-lg border-2 border-gray-200 rounded-xl focus:border-primary focus:outline-none transition-all duration-300 pr-16"
                    value={searchValue}
                    onChange={handleSearch}
                    onKeyPress={handleKeyPress}
                />
                <div className="absolute right-4 top-1/2 transform -translate-y-1/2 flex gap-2">
                    <button className="w-8 h-8 flex items-center justify-center text-gray-400 hover:text-primary transition-colors">
                        <i className="ri-mic-line text-xl"></i>
                    </button>
                    <button className="w-8 h-8 flex items-center justify-center text-gray-400 hover:text-primary transition-colors">
                        <i className="ri-search-line text-xl"></i>
                    </button>
                </div>
            </div>
            <div className="flex gap-3 overflow-x-auto pb-2">
                <button
                    className={`category-chip px-4 py-2 ${activeCategory === '🥛 Dairy & Eggs' ? 'bg-primary/10 text-primary' : 'bg-gray-100 text-gray-700 hover:bg-primary/10 hover:text-primary'} rounded-full whitespace-nowrap font-medium`}
                    onClick={() => handleCategoryClick('🥛 Dairy & Eggs')}
                >
                    🥛 Dairy & Eggs
                </button>
                <button
                    className={`category-chip px-4 py-2 ${activeCategory === '🧴 Personal Care' ? 'bg-primary/10 text-primary' : 'bg-gray-100 text-gray-700 hover:bg-primary/10 hover:text-primary'} rounded-full whitespace-nowrap font-medium`}
                    onClick={() => handleCategoryClick('🧴 Personal Care')}
                >
                    🧴 Personal Care
                </button>
                <button
                    className={`category-chip px-4 py-2 ${activeCategory === '👶 Baby Products' ? 'bg-primary/10 text-primary' : 'bg-gray-100 text-gray-700 hover:bg-primary/10 hover:text-primary'} rounded-full whitespace-nowrap font-medium`}
                    onClick={() => handleCategoryClick('👶 Baby Products')}
                >
                    👶 Baby Products
                </button>
                <button
                    className={`category-chip px-4 py-2 ${activeCategory === '🍞 Bakery' ? 'bg-primary/10 text-primary' : 'bg-gray-100 text-gray-700 hover:bg-primary/10 hover:text-primary'} rounded-full whitespace-nowrap font-medium`}
                    onClick={() => handleCategoryClick('🍞 Bakery')}
                >
                    🍞 Bakery
                </button>
                <button
                    className={`category-chip px-4 py-2 ${activeCategory === '🥫 Canned Goods' ? 'bg-primary/10 text-primary' : 'bg-gray-100 text-gray-700 hover:bg-primary/10 hover:text-primary'} rounded-full whitespace-nowrap font-medium`}
                    onClick={() => handleCategoryClick('🥫 Canned Goods')}
                >
                    🥫 Canned Goods
                </button>
            </div>
        </div>
    );
};

export default SearchSection;