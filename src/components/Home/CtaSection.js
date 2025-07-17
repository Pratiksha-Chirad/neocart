// src/components/CtaSection.js
import React from 'react';

function CtaSection() {
  return (
    <section className="py-20 px-6 relative overflow-hidden" style={{ background: "linear-gradient(to right, #ffffff 50%, #f0f7ff 50%)" }}>
      <div className="floating-blob blob-5"></div>
      <div className="floating-blob blob-6"></div>
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <h2 className="text-4xl font-bold text-gray-900 mb-6">Ready to Transform Your Shopping Experience?</h2>
        <p className="text-xl text-gray-600 mb-12">
          Join thousands of smart shoppers who have already discovered the future of retail with our integrated assistant platform.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-primary text-white px-10 py-4 !rounded-button font-semibold hover:bg-blue-600 transition-colors text-lg whitespace-nowrap">
            Get Started Free
          </button>
          <button className="bg-white text-primary border-2 border-primary px-10 py-4 !rounded-button font-semibold hover:bg-primary hover:text-white transition-colors text-lg whitespace-nowrap">
            Watch Demo
          </button>
        </div>
      </div>
    </section>
  );
}

export default CtaSection;