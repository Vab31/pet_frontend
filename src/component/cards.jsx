
import React from 'react';

const Card = ({ item }) => {
  return (
    <div className="flex flex-col p-4 border border-gray-300 rounded-md shadow-md bg-orange-600">
      <img src={item.image} alt={item.name} className="w-full h-48 object-cover mb-4" />
      <div className="flex flex-col items-start">
        <span className="text-lg font-semibold">{item.name}</span>
        <span className="text-gray-500">${item.price}</span>
        <a
          href=""
          target="_blank"
          rel="noopener noreferrer"
          className="mt-2 text-blue-600 hover:underline"
        >
          Buy Now
        </a>
      </div>
    </div>
  );
};

export default Card;
