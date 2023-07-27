import React from 'react'

const Header = () => {
  return (
    <div className='w-full h-12 bg-violet-400'>
      <div className='flex items-start pt-1  text-purple-200 text-2xl font-bold'>
        <button className=' hover:bg-purple-500 text-white   transition-colors duration-300 rounded-lg p-1 ml-10 '> 
            Home
        </button>
        <button className=' hover:bg-purple-500 text-white   transition-colors duration-300 rounded-lg p-1 ml-3 '> 
            Products
        </button>
        <button className=' hover:bg-purple-500 text-white   transition-colors duration-300 rounded-lg p-1 ml-3 '> 
            About
        </button>
      </div>
    </div>
  )
}

export default Header
