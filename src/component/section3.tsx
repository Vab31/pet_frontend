// src/components/CardList.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Card from './cards.jsx';

const CardList = () => {
  
    const [data, setData] = useState<Array<any>>([]); // Replace 'any' with the correct type if you have it

    useEffect(() => {
      // Fetch data from backend when component mounts
      axios.get('http://localhost:3002/data/val')
        .then((response) => {
          // Update state with fetched data
          console.log(response.data);
          setData(response.data);
        })
        .catch((error) => {
          console.error('Error fetching users:', error);
        });
    }, []);
// const data = [
//     {
//       id: 1,
//       name: "Product 1",
//       image: "https://via.placeholder.com/300",
//       price: 19.99,
//       link: "https://example.com/product1",
//     },
//     {
//       id: 2,
//       name: "Product 2",
//       image: "https://via.placeholder.com/300",
//       price: 29.99,
//       link: "https://example.com/product2",
//     },
//     {
//       id: 3,
//       name: "Product 3",
//       image: "https://via.placeholder.com/300",
//       price: 39.99,
//       link: "https://example.com/product3",
//     },
//     {
//       id: 3,
//       name: "Product 3",
//       image: "https://via.placeholder.com/300",
//       price: 39.99,
//       link: "https://example.com/product3",
//     },
//     {
//       id: 3,
//       name: "Product 3",
//       image: "https://via.placeholder.com/300",
//       price: 39.99,
//       link: "https://example.com/product3",
//     },
//     {
//       id: 3,
//       name: "Product 3",
//       image: "https://via.placeholder.com/300",
//       price: 39.99,
//       link: "https://example.com/product3",
//     },
//     {
//       id: 3,
//       name: "Product 3",
//       image: "https://via.placeholder.com/300",
//       price: 39.99,
//       link: "https://example.com/product3",
//     },
//     // Add more items if needed
//   ];

  return (
    <>
    <div className='text-green-600 text-5xl font-serif font-bold m-4'>
    Our Resource
</div>
    <div className="flex flex-wrap">
       
      {data.map(item => (
        <div key={item.id} className="w-full md:w-1/3 p-2">
          <Card item={item} />
        </div>
      ))}
    </div>
    </>
  );
};

export default CardList;
