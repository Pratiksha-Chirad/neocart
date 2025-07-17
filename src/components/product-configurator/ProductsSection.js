import React from 'react';

const ProductsSection = ({ onAddToRoom }) => {
  const products = [
    {
      id: 1,
      name: "Modern Sectional Sofa",
      description: "Perfect for spacious living rooms with contemporary design",
      imageUrl: "https://readdy.ai/api/search-image?query=Modern%20sectional%20sofa%20in%20neutral%20beige%20color%20with%20clean%20lines%20and%20soft%20cushions%2C%20minimalist%20living%20room%20setting%20with%20white%20walls%20and%20natural%20lighting%2C%20contemporary%20furniture%20design%2C%20high-quality%20fabric%20upholstery%2C%20comfortable%20seating%20arrangement&width=320&height=200&seq=sofa1&orientation=landscape"
    },
    {
      id: 2,
      name: "Elegant Curtains",
      description: "Floor-to-ceiling design for enhanced room ambiance",
      imageUrl: "https://readdy.ai/api/search-image?query=Elegant%20floor-to-ceiling%20curtains%20in%20soft%20cream%20color%20with%20flowing%20fabric%2C%20modern%20window%20treatment%20in%20bright%20living%20room%2C%20natural%20light%20filtering%20through%2C%20minimalist%20interior%20design%2C%20high-quality%20textile%20materials&width=320&height=200&seq=curtains1&orientation=landscape"
    },
    {
      id: 3,
      name: "Accent Chair",
      description: "Comfortable seating with stylish curved design",
      imageUrl: "https://readdy.ai/api/search-image?query=Stylish%20accent%20chair%20in%20warm%20terracotta%20color%20with%20curved%20backrest%2C%20modern%20upholstered%20armchair%20in%20contemporary%20living%20space%2C%20comfortable%20single%20seating%20furniture%2C%20premium%20fabric%20finish%2C%20elegant%20design%20details&width=320&height=200&seq=chair1&orientation=landscape"
    },
    {
      id: 4,
      name: "Glass Coffee Table",
      description: "Sleek transparent design to open up your space",
      imageUrl: "https://readdy.ai/api/search-image?query=Modern%20glass%20coffee%20table%20with%20sleek%20metal%20legs%2C%20transparent%20rectangular%20table%20top%20in%20contemporary%20living%20room%2C%20minimalist%20furniture%20design%2C%20clean%20lines%20and%20geometric%20shape%2C%20sophisticated%20home%20decor%20piece&width=320&height=200&seq=table1&orientation=landscape"
    },
    {
      id: 5,
      name: "Abstract Wall Art",
      description: "Contemporary artwork to enhance your wall decor",
      imageUrl: "https://readdy.ai/api/search-image?query=Abstract%20modern%20wall%20art%20in%20soft%20neutral%20tones%2C%20contemporary%20framed%20artwork%20hanging%20on%20white%20wall%2C%20minimalist%20geometric%20design%2C%20elegant%20home%20decoration%2C%20sophisticated%20interior%20styling%2C%20artistic%20composition&width=320&height=200&seq=art1&orientation=landscape"
    }
  ];

  const categories = ["Sofa", "Curtains", "Chairs", "Coffee Table", "Wall Art"];

  return (
    <div className="max-w-6xl mx-auto mb-16">
      <h2 className="text-3xl font-semibold text-gray-800 text-center mb-8">Recommended Products</h2>
      
      <div className="flex gap-4 justify-center mb-8 flex-wrap">
        {categories.map((category, index) => (
          <span key={index} className="px-4 py-2 bg-white/50 backdrop-blur-sm rounded-full text-gray-700 font-medium">
            {category}
          </span>
        ))}
      </div>
      
      <div className="scroll-container overflow-x-auto pb-4">
        <div className="flex gap-6 min-w-max px-4">
          {products.map(product => (
            <div key={product.id} className="product-card glass-card rounded-2xl p-6 w-80 flex-shrink-0">
              <img 
                src={product.imageUrl} 
                alt={product.name} 
                className="w-full h-48 object-cover object-top rounded-xl mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{product.name}</h3>
              <p className="text-gray-600 text-sm mb-4">{product.description}</p>
              <div className="flex gap-3">
                <button 
                  className="add-to-room flex-1 px-4 py-2 bg-primary text-white rounded-button whitespace-nowrap !rounded-button hover:bg-primary/90 transition-colors"
                  onClick={onAddToRoom}
                >
                  Add to Room
                </button>
                <button className="px-4 py-2 text-primary border border-primary rounded-button whitespace-nowrap !rounded-button hover:bg-primary/10 transition-colors">
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductsSection;