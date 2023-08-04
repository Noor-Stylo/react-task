import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
  return (
    <div className='w-full h-14 bg-violet-400'>
      <div className='flex items-center justify-between pt-1 text-purple-200 text-2xl font-bold'>
        <div className='flex items-center'>
          <Link to='/Home'>
            <button className='hover:bg-purple-500 text-white transition-colors duration-300 rounded-lg px-2 py-1 ml-10'>
              Home
            </button>
          </Link>
          <Link to='/ProCards'>
          <button className='hover:bg-purple-500 text-white transition-colors duration-300 rounded-lg px-2 py-1 ml-3'>
            Products
          </button>
          </Link>
          <Link to='About'>
          <button className='hover:bg-purple-500 text-white transition-colors duration-300 rounded-lg px-2 py-1 ml-3'>
            About
          </button>
          </Link>
        </div>
        <div className='flex items-center'>
          <div className='relative mr-3'>
            <input
              type='text'
              className='focus:outline-none border-2 border-transparent rounded pl-4 pr-4 py-1 text-gray-500 placeholder-gray-200'
              id='Email'
              placeholder='Search Products'
            />
            <FontAwesomeIcon
              icon={faSearch}
              className='absolute right-3 top-2 text-gray-400'
            />
          </div>
          <Link to='/Logout'>
            <button className='hover:bg-purple-500 text-white transition-colors duration-300 rounded-lg px-2 py-1 mr-3'>
              Logout
            </button>
          </Link>
          <Link to='/Cart'><button className='flex hover:bg-purple-500 text-white transition-colors duration-300 rounded-lg px-2 py-1 mr-10'>
            <FontAwesomeIcon icon={faShoppingCart}  />
            <h6 className=' absolute text-[16px] text-gray-400 '>0</h6>
          </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
