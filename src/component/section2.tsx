import React from 'react';
import sr from './leftimg.png';

export default function Sec2() {
  return (
    <section className="text-gray-600 body-font overflow-hidden">
      <div className="container px-2 py-3 mx-auto">
        <div className="lg:w-4/5 mx-auto flex flex-wrap items-center">
          <div className="lg:w-1/2 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0">
            <p className='font-serif font-bold text-left text-4xl'>Caring for your</p>
            <p className='font-serif font-bold text-left text-4xl text-green-600'>furry friends</p>
            <p className='font-serif font-bold text-left text-4xl'>like family</p>

            <div className="flex mt-4 items-center">
              <input type="text" className='rounded-full border border-orange-600 w-80' placeholder='   Search' />
              <button className="flex ml-auto text-white bg-orange-600 border-0 py-2 px-6 rounded-full focus:outline-none hover:bg-orange-900 rounded">
                Search
              </button>
            </div>
          </div>
          <img
            alt="ecommerce"
            className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded"
            src={sr}
          />
        </div>
      </div>
    </section>
  );
}
