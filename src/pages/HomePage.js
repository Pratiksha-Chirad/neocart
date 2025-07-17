import React from 'react';
import HeroSection from '../components/Home/HeroSection';
import FeaturesSection from '../components/Home/FeaturesSection';
import CtaSection from '../components/Home/CtaSection';
import Header from '../components/Home/Header';
import Footer from "../components/Home/Footer";

function HomePage() {
  return (
    <main>
        <Header />
      <HeroSection />
      <FeaturesSection />
      <CtaSection />
        <Footer />
    </main>
  );
}

export default HomePage;