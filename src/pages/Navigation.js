import React, { useState, useEffect } from 'react';
import NavigationHeader from '../components/navigation/NavigationHeader';
import FloatingBlobs from '../components/navigation/FloatingBlobs';
import SearchSection from '../components/navigation/SearchSection';
import ARNavigation from '../components/navigation/ARNavigation';
import FeedbackSection from '../components/navigation/FeedbackSection';
import StoreMap from '../components/navigation/StoreMap';
import RecentSearches from '../components/navigation/RecentSearches';
import NavigationTips from '../components/navigation/NavigationTips';
import Footer from "../components/Home/Footer";

const Navigation = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('');
    const [feedbackData, setFeedbackData] = useState({
        distance: "Ready to guide you",
        direction: "Search for an item to start navigation"
    });

    const handleSearch = (query) => {
        setSearchQuery(query);
        updateSearchResults(query);
    };

    const handleRecentItemClick = (itemName) => {
        setSearchQuery(itemName);
        updateSearchResults(itemName);
    };

    const updateSearchResults = (query) => {
        const lowerQuery = query.toLowerCase();
        let aisle = "General";
        let distance = Math.floor(Math.random() * 20) + 5;

        if (lowerQuery.includes("milk") || lowerQuery.includes("egg") || lowerQuery.includes("dairy")) {
            aisle = "Dairy & Eggs Aisle";
            distance = 8;
        } else if (lowerQuery.includes("shampoo") || lowerQuery.includes("soap") || lowerQuery.includes("personal")) {
            aisle = "Personal Care Aisle";
            distance = 12;
        } else if (lowerQuery.includes("baby") || lowerQuery.includes("formula") || lowerQuery.includes("diaper")) {
            aisle = "Baby Products Aisle";
            distance = 15;
        } else if (lowerQuery.includes("bread") || lowerQuery.includes("bakery")) {
            aisle = "Bakery Section";
            distance = 6;
        }

        setFeedbackData({
            distance: `Item found in ${aisle}`,
            direction: `Approximately ${distance} steps away - Ready to navigate`
        });
    };

    return (
        <div className="min-h-screen animated-gradient relative overflow-y-auto">
            <FloatingBlobs />
            <NavigationHeader />

            <div className="relative z-10">
                <header className="text-center py-8">
                    <div className="flex items-center justify-center gap-3">
                        <h1 className="text-4xl font-bold text-white">NeoCart</h1>
                        <span className="text-4xl">🛒</span>
                    </div>
                    <p className="text-white/80 mt-2 text-lg">Smart In-Store Navigation</p>
                </header>

                <div className="max-w-6xl mx-auto px-6 pb-8 overflow-y-auto">
                    <div className="bg-white/95 backdrop-blur-sm rounded-3xl shadow-2xl p-8">
                        <div className="grid lg:grid-cols-3 gap-8">
                            <div className="lg:col-span-2 space-y-6">
                                <SearchSection
                                    onSearch={handleSearch}
                                    setSelectedCategory={setSelectedCategory}
                                />

                                <ARNavigation
                                    searchQuery={searchQuery}
                                    feedbackData={feedbackData}
                                    setFeedbackData={setFeedbackData}
                                />

                                <FeedbackSection feedbackData={feedbackData} />
                            </div>

                            <div className="space-y-6">
                                <StoreMap />
                                <RecentSearches onSearchItemClick={handleRecentItemClick} />
                                <NavigationTips />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Navigation;