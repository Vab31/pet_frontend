import React from 'react'
import { Link } from 'react-router-dom';


export default function Nav() {
  return (
    <div>
    <header className="text-gray-600 body-font">
  <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
     
      <img src="https://see.fontimg.com/api/renderfont4/VGMDl/eyJyIjoiZnMiLCJoIjoyOSwidyI6MTAwMCwiZnMiOjI5LCJmZ2MiOiIjOENCOTRFIiwiYmdjIjoiI0ZGRkZGRiIsInQiOjF9/UGV0cGl3/paw-wow-block.png" className="ml-3 text-xl"/>

    <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center font-serif  text-base justify-center">
      <a className="mr-5 hover:text-gray-900 hover:font-semibold" href='/'>Home</a>
      <a className="mr-5 hover:text-gray-900 hover:font-semibold ">Second Link</a>
      <a className="mr-5 hover:text-gray-900 hover:font-semibold">Third Link</a>
      <a className="mr-5 hover:text-gray-900 hover:font-semibold">Fourth Link</a>
    </nav>

    <button className="inline-flex items-center border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">
      Button
   
    </button>
    <a href="/admin">
    <button className="inline-flex items-center ml-2 bg-orange-600  border-0 py-2 px-4 focus:outline-none hover:bg-orange-800 text-white rounded-md text-base mt-4 md:mt-0">
     
      DashBoard
  
    </button>
    </a>
  </div>
</header>
</div>
  );

}
