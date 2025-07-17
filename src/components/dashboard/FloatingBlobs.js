import React, { useEffect } from 'react';

const FloatingBlobs = () => {
  useEffect(() => {
    const floatingBlobs = document.querySelectorAll('.floating-blob');
    
    floatingBlobs.forEach((blob, index) => {
      const animationDelay = index * 2;
      blob.style.animationDelay = `${animationDelay}s`;
      
      setInterval(() => {
        const randomX = Math.random() * 100;
        const randomY = Math.random() * 100;
        blob.style.transform = `translate(${randomX}px, ${randomY}px)`;
      }, 5000 + index * 1000);
    });
  }, []);

  return (
    <div className="animated-bg fixed inset-0 opacity-30 pointer-events-none">
      <div className="floating-blob absolute top-20 left-10 w-32 h-32 bg-blue-200 rounded-full blur-xl animate-pulse"></div>
      <div className="floating-blob absolute top-40 right-20 w-24 h-24 bg-purple-200 rounded-full blur-lg animate-bounce"></div>
      <div className="floating-blob absolute bottom-40 left-1/3 w-28 h-28 bg-pink-200 rounded-full blur-xl animate-pulse"></div>
    </div>
  );
};

export default FloatingBlobs;