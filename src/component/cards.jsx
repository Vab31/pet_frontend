
import React from 'react';

const Card = ({ item }) => {
  return (
    <div className="flex flex-col p-4 border border-gray-300 rounded-lg shadow-md bg-orange-600">
      <img src={item.url} alt={item.title} className="w-full rounded object-cover mb-4" />
      <div className="flex flex-col items-center rounded-lg p-3 bg-green-600">
        <span className="text-lg font-semibold text-white">{item.title}</span>
        <span className="text-black font-bold">₹{item.price}</span>
        <a
          target="_blank"
          rel="noopener noreferrer"
          className="mt-2 text-blue-700 font-semibold hover:font-extrabold "
        >
          Buy Now
        </a>
      </div>
    </div>
  );
};

export default Card;
