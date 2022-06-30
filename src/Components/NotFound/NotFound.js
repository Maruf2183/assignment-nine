import React from 'react';

import { NavLink } from 'react-router-dom';

const NotFound = () => {
    return (
        <div>
         <div className='go-home-button border-opacity-100 '>  <NavLink className='-mt-52 bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow no-underline'  to='/'> Go Home</NavLink></div>
            <img className=' md:w-6/12  sm:w-full mx-auto border-opacity-100  ' src="https://i.ibb.co/5FfYYgX/2446910-ai.png" alt="" />
            
        </div>
    );
};

export default NotFound;