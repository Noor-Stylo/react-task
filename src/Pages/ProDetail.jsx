import React, { useState } from 'react';
import img1 from '../Assets/body 1 red.png';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import Cart from '../Pages/Cart';

const ProDetail = () => {
  const product = {
    name: 'Example Product',
    image: img1,
    price: 19.99,
    description: 'This is an example product description. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    rating: 4.5,
  };

  const [cartItems, setCartItems] = useState([]);

  const addToCart = () => {
    setCartItems([...cartItems, product]);
  };

  const removeFromCart = (index) => {
    const updatedCart = [...cartItems];
    updatedCart.splice(index, 1);
    setCartItems(updatedCart);
  };

  return (
    <>
      <Header />
      <div className="container h-auto py-8 bg-violet-200">
        <div className="flex flex-wrap">
          {/* Product Image */}
          <div className="w-full md:w-1/2 h-f p-4">
            <img src={product.image} alt={product.name} className="h-auto w-96 " />
          </div>

          {/* Product Details */}
          <div className="md:w-1/2 p-4 text-left mt-32">
            <h2 className="text-2xl font-bold mb-4">{product.name}</h2>
            <p className="text-gray-700 mb-4">{product.description}</p>
            <p className="text-xl font-bold mb-2">${product.price.toFixed(2)}</p>
            <div className="flex items-center mb-4">
              <span className="text-yellow-500 mr-1">&#9733;</span>
              <span>{product.rating}</span>
            </div>
            <button
              onClick={addToCart}
              className="bg-purple-500 hover:bg-purple-600 text-white px-4 py-2 rounded w-full"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
      <Footer />
      <Cart cartItems={cartItems} removeFromCart={removeFromCart} />
    </>
  );
};

export default ProDetail;
