import React, { useState } from 'react';
import Header from '../components/Home/Header';
import Footer from '../components/Home/Footer';
import FloatingElements from '../components/product-configurator/FloatingElements';
import WelcomeSection from '../components/product-configurator/WelcomeSection';
import UploadSection from '../components/product-configurator/UploadSection';
import ProductsSection from '../components/product-configurator/ProductsSection';
import ConfigPanel from '../components/product-configurator/ConfigPanel';
import ChatInterface from '../components/product-configurator/ChatInterface';

const ARProductConfiguratorPage = () => {
    const [currentSection, setCurrentSection] = useState('welcome');
    const [configPanelActive, setConfigPanelActive] = useState(false);
    const [chatInterfaceActive, setChatInterfaceActive] = useState(false);
    const [chatBubbleVisible, setChatBubbleVisible] = useState(true);

    const goToUploadSection = () => {
        setCurrentSection('upload');
    };

    const goToProductsSection = () => {
        setCurrentSection('products');
    };

    const toggleConfigPanel = () => {
        setConfigPanelActive(!configPanelActive);
    };

    const handleChatBubbleClick = () => {
        setChatBubbleVisible(false);
        setChatInterfaceActive(true);
    };

    const handleCloseChat = () => {
        setChatInterfaceActive(false);
        setChatBubbleVisible(true);
    };

    return (
        <>
            <Header />
            <main className="gradient-bg min-h-screen">
                <FloatingElements />

                <div className="container mx-auto px-6 py-12">
                    {currentSection === 'welcome' && (
                        <WelcomeSection onNext={goToUploadSection} />
                    )}

                    {currentSection === 'upload' && (
                        <UploadSection onComplete={goToProductsSection} />
                    )}

                    {currentSection === 'products' && (
                        <ProductsSection onAddToRoom={toggleConfigPanel} />
                    )}
                </div>

                <ConfigPanel
                    isActive={configPanelActive}
                    onClose={() => setConfigPanelActive(false)}
                />

                {chatBubbleVisible && (
                    <div
                        className="chat-bubble fixed bottom-8 right-8 w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center cursor-pointer shadow-lg hover:shadow-xl transition-all duration-300 z-40"
                        onClick={handleChatBubbleClick}
                    >
                        <div className="w-6 h-6 flex items-center justify-center">
                            <i className="ri-chat-3-line"></i>
                        </div>
                    </div>
                )}

                <ChatInterface
                    isActive={chatInterfaceActive}
                    onClose={handleCloseChat}
                />
            </main>
            <Footer />

        </>
    );
};

export default ARProductConfiguratorPage;