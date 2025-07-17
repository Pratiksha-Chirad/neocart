import React from 'react';

const ProductCard = ({ product }) => {
    const { title, description, image, rating, price, tags } = product;

    return (
        <div className="glassmorphism rounded-2xl p-6 card-hover relative">
            <div className="absolute top-4 right-4 bg-green-500 text-white px-2 py-1 rounded-full text-sm font-medium">
                {rating}★
            </div>
            <div className="w-full h-48 rounded-xl mb-4 overflow-hidden">
                <img
                    src={image}
                    alt={title}
                    className="w-full h-full object-cover object-top"
                />
            </div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">{title}</h3>
            <p className="text-gray-600 text-sm mb-4">{description}</p>
            <div className="flex flex-wrap gap-2 mb-4">
                {tags.map((tag, index) => (
                    <span
                        key={index}
                        className={`bg-${tag.color}-100 text-${tag.color}-600 px-3 py-1 rounded-full text-xs font-medium`}
                    >
            #{tag.name}
          </span>
                ))}
            </div>
            <div className="text-2xl font-bold text-gray-800">${price}</div>
        </div>
    );
};

export default ProductCard;
