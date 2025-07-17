import React from 'react';

const FloatingElements = () => {
    return (
        <>
            <div className="floating-bg-element top-20 left-10 floating-icon">
                <div className="w-8 h-8 flex items-center justify-center text-2xl opacity-30">
                    <i className="ri-camera-line"></i>
                </div>
            </div>
            <div className="floating-bg-element top-40 right-20 floating-icon" style={{ animationDelay: '-2s' }}>
                <div className="w-8 h-8 flex items-center justify-center text-2xl opacity-30">
                    <i className="ri-shirt-line"></i>
                </div>
            </div>
            <div className="floating-bg-element top-60 left-1/4 floating-icon" style={{ animationDelay: '-4s' }}>
                <div className="w-8 h-8 flex items-center justify-center text-2xl opacity-30">
                    <i className="ri-smartphone-line"></i>
                </div>
            </div>
            <div className="floating-bg-element top-32 right-1/3 floating-icon" style={{ animationDelay: '-1s' }}>
                <div className="w-8 h-8 flex items-center justify-center text-2xl opacity-30">
                    <i className="ri-headphone-line"></i>
                </div>
            </div>
            <div className="bubble floating-bg-element bottom-0 left-10" style={{ animationDelay: '0s' }}>
                <div className="w-6 h-6 flex items-center justify-center text-xl text-pink-400">
                    <i className="ri-heart-fill"></i>
                </div>
            </div>
            <div className="bubble floating-bg-element bottom-0 right-20" style={{ animationDelay: '-3s' }}>
                <div className="w-6 h-6 flex items-center justify-center text-xl text-pink-400">
                    <i className="ri-heart-fill"></i>
                </div>
            </div>
            <div className="bubble floating-bg-element bottom-0 left-1/3" style={{ animationDelay: '-6s' }}>
                <div className="w-6 h-6 flex items-center justify-center text-xl text-pink-400">
                    <i className="ri-heart-fill"></i>
                </div>
            </div>
        </>
    );
};

export default FloatingElements;