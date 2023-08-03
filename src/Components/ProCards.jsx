import React from 'react';
import { Link } from 'react-router-dom';
import  p1  from '../Assets/p1.png';
import  p2  from '../Assets/p2.png';
import  p3  from '../Assets/p3.png';
import  p4  from '../Assets/p4.png';
import  p5  from '../Assets/p5.png';
import  p6  from '../Assets/p6.png';
import  p7  from '../Assets/p7.png';
import  p8  from '../Assets/p8.png';
const Data = [
  {
    id: 1,
    name: 'Product 1',
    description: 'This is the description of product 1.',
    price: 19.99,
    image: p1,
  },
  {
    id: 2,
    name: 'Product 2',
    description: 'This is the description of product 2.',
    price: 29.99,
    image: p4,
  },
  {
    id: 3,
    name: 'Product 3',
    description: 'This is the description of product 3.',
    price: 15.99,
    image: p6,
  },
  {
    id: 4,
    name: 'Product 4',
    description: 'This is the description of product 4.',
    price: 24.99,
    image: p2,
  },
  {
    id: 5,
    name: 'Product 5',
    description: 'This is the description of product 5.',
    price: 39.99,
    image: p8,
  },
  {
    id: 6,
    name: 'Product 6',
    description: 'This is the description of product 6.',
    price: 17.99,
    image: p3,
  },
  {
    id: 7,
    name: 'Product 7',
    description: 'This is the description of product 7.',
    price: 21.99,
    image: p5,
  },
  {
    id: 8,
    name: 'Product 8',
    description: 'This is the description of product 8.',
    price: 33.99,
    image: p7,
  },
  // Add other products here...
];

const ProCards = () => {
  return (
    <Link to='/Product'>
    <div className="container ml-28 mb-10">
      <div className="flex flex-wrap">
        {Data.map((product) => (
          <div key={product.id} className="max-w-xs rounded overflow-hidden shadow-lg m-4">
            <img className="w-80 h-80 bg-white rounded" src={product.image} alt={product.name} />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">{product.name}</div>
              <p className="text-gray-700 text-base">{product.description}</p>
            </div>
            <div className="flex items-center mb-7 ml-10">
            <span className="font-bold text-xl">${product.price}</span>
            <button className="ml-16 bg-violet-400 hover:bg-purple-500 text-white  transition-colors duration-300 rounded-full font-bold py-2 px-4 ">Add to Cart</button>
          </div>
          </div>
        ))}
      </div>
    </div>
    </Link>
  );
};

export default ProCards;
