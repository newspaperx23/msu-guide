import React from 'react';

const Navbar = () => {
  return (
    <div className='rounded-2xl h-12 fixed top-4 left-1/2 transform -translate-x-1/2 justify-center items-center bg-black/40 backdrop-blur-md w-[70%] z-20'>
        <div className='flex justify-center items-center w-full h-full gap-5'>
            <a href="#" className='text-white text-lg font-thin hover:scale-110 transition-all'>MSU</a>
            <a href="#" className='text-white text-lg font-thin hover:scale-110 transition-all'>Places</a>
            <a href="#" className='text-white text-lg font-thin hover:scale-110 transition-all'>Contact</a>
            <a href="#" className='text-white text-lg font-thin hover:scale-110 transition-all'>Calendar</a>
        </div>
    </div>
  );
}

export default Navbar;
