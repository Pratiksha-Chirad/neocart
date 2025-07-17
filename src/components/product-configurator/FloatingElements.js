import React from 'react';

const FloatingElements = () => {
  return (
    <>
      <div className="floating-element fixed top-20 left-10 w-16 h-16 opacity-20">
        <div className="w-full h-full flex items-center justify-center text-4xl">
          <i className="ri-sofa-line"></i>
        </div>
      </div>
      
      <div className="floating-element fixed top-32 right-20 w-12 h-12 opacity-20" style={{ animationDelay: '-2s' }}>
        <div className="w-full h-full flex items-center justify-center text-3xl">
          <i className="ri-lightbulb-line"></i>
        </div>
      </div>
      
      <div className="floating-element fixed bottom-40 left-20 w-14 h-14 opacity-20" style={{ animationDelay: '-4s' }}>
        <div className="w-full h-full flex items-center justify-center text-3xl">
          <i className="ri-armchair-line"></i>
        </div>
      </div>
      
      <div className="floating-element fixed bottom-60 right-10 w-10 h-10 opacity-20" style={{ animationDelay: '-1s' }}>
        <div className="w-full h-full flex items-center justify-center text-2xl">
          <i className="ri-plant-line"></i>
        </div>
      </div>
    </>
  );
};

export default FloatingElements;