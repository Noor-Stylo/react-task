import React, { useState } from 'react';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
const Cart = () => {
  const [cartItems, setCartItems] = useState([]);

  const removeFromCart = (productId) => {
    setCartItems((prevCartItems) => prevCartItems.filter((item) => item.id !== productId));
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const getTotalPrice = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <>
    <Header/>
    <div className="container mx-auto h-96 px-4 mt-6">
      <h2 className="text-3xl font-bold mb-6">Cart</h2>
      {cartItems.length === 0 ? (
        <p className="text-xl text-gray-600">Your cart is empty.</p>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {cartItems.map((item) => (
            <div key={item.id} className="bg-white rounded shadow-md p-4">
              <img className="w-24 h-24 mx-auto mb-4" src={item.image} alt={item.name} />
              <p className="font-bold text-lg">{item.name}</p>
              <p className="text-gray-600">${item.price}</p>
              <div className="mt-4 flex items-center justify-between">
                <button
                  className="bg-red-500 hover:bg-red-600 text-white px-2 py-1 rounded-full"
                  onClick={() => removeFromCart(item.id)}
                >
                  Remove
                </button>
                <div className="flex items-center">
                  <button
                    className="text-gray-600 px-2 py-1 rounded-full"
                    onClick={() =>
                      setCartItems((prevCartItems) =>
                        prevCartItems.map((i) =>
                          i.id === item.id ? { ...i, quantity: i.quantity - 1 } : i
                        )
                      )
                    }
                    disabled={item.quantity === 1}
                  >
                    -
                  </button>
                  <span className="mx-2">{item.quantity}</span>
                  <button
                    className="text-gray-600 px-2 py-1 rounded-full"
                    onClick={() =>
                      setCartItems((prevCartItems) =>
                        prevCartItems.map((i) =>
                          i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
                        )
                      )
                    }
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
      {cartItems.length > 0 && (
        <div className="mt-6 text-right">
          <p className="text-xl font-bold">Total: ${getTotalPrice().toFixed(2)}</p>
          <button
            className="mt-4 bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded"
            onClick={clearCart}
          >
            Clear Cart
          </button>
        </div>
      )}
    </div>
    <Footer/>
    </>
  );
};

export default Cart;

