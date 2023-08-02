import React from 'react'
import Data from '../Data/Data'
const ProCards = () => {
  return (
    <div className="container mx-auto p-4">
      <div className="flex flex-wrap">
        {Data.map((product) => (
          <div key={product.id} className="max-w-xs rounded overflow-hidden shadow-lg m-4">
            <img className="w-full" src={product.image} alt={product.name} />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">{product.name}</div>
              <p className="text-gray-700 text-base">{product.description}</p>
            </div>
            <div className="px-6 py-4">
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
                ${product.price}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ProCards
