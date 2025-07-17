import React from 'react';
import FloatingElements from '../components/community/FloatingElements';
import HeroSection from '../components/community/HeroSection';
import TrendingProducts from '../components/community/TrendingProducts';
import Header from '../components/Home/Header';
import Footer from "../components/Home/Footer";

const Community = () => {
    return (

        <div className="min-h-screen">
            <Header />
            <FloatingElements />

            <main className="max-w-7xl mx-auto px-6 py-12">
                <HeroSection />
                <TrendingProducts />
                {/* More sections can be added here based on the full HTML */}
            </main>
            <Footer />
        </div>

    );
};

export default Community;