import React, { useState } from 'react';
import Container from './Container';
import logo from '../assets/logo.png';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Container className="p-5 flex items-center text-center justify-between max-w-screen-xl mx-auto">
    
      <div className="w-1/3 md:w-1/5">
        <img src={logo} alt="Logo" className="h-auto max-w-full" />
      </div>

      <div className="hidden md:block w-2/3">
        <ul className="flex gap-6 justify-center font-DMs text-[16px] font-semibold text-[#767676]">
          
<li className="hover:text-[#262626] duration-300 ease-in-out hover:font-bold">
  <Link to="/">Home</Link>
</li>
          <li className="hover:text-[#262626] duration-300 ease-in-out hover:font-bold">Shop</li>
          <li className="hover:text-[#262626] duration-300 ease-in-out hover:font-bold">About</li>
          <li className="hover:text-[#262626] duration-300 ease-in-out hover:font-bold">Contacts</li>
          <li className="hover:text-[#262626] duration-300 ease-in-out hover:font-bold">Journal</li>
        </ul>
      </div>

      {/* Mobile Menu Toggle Button */}
      <button className="md:hidden p-2" onClick={toggleMenu}>
        {isOpen ? (
          // Cross (X) Icon
          <svg
            className="w-6 h-6 text-[#767676]"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        ) : (
          // Hamburger Icon
          <svg
            className="w-6 h-6 text-[#767676]"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        )}
      </button>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-16 left-0 right-0 bg-gray-500 opacity-85 shadow-lg md:hidden z-10">
          <ul className="flex flex-col items-center p-6 space-y-4">
            <li className="text-[16px] font-bold text-[#F3F8FF] hover:text-black duration-300 ease-in-out">Home</li>
            <li className="text-[16px] font-bold text-[#F3F8FF] hover:text-black duration-300 ease-in-out">Shop</li>
            <li className="text-[16px] font-bold text-[#F3F8FF] hover:text-black duration-300 ease-in-out">About</li>
            <li className="text-[16px] font-bold text-[#F3F8FF] hover:text-black duration-300 ease-in-out">Contacts</li>
            <li className="text-[16px] font-bold text-[#F3F8FF] hover:text-black duration-300 ease-in-out">Journal</li>
          </ul>
        </div>
      )}
    </Container>
  );
};

export default Header;
