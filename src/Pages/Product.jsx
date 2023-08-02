import React from 'react';

const ProductPage = () => {
  return (
    <div className="container mx-auto p-4">
      <div className="max-w-md mx-auto bg-white rounded-lg overflow-hidden shadow-md">
        <img
          className="w-full h-64 object-cover object-center"
          src="https://via.placeholder.com/300"
          alt="Product"
        />
        <div className="px-6 py-4">
          <h2 className="text-gray-800 text-2xl font-bold mb-2">Product Name</h2>
          <p className="text-gray-600 text-sm">Product Description Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <div className="flex items-center mt-4">
            <span className="font-bold text-xl">$19.99</span>
            <button className="ml-auto bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Add to Cart</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
