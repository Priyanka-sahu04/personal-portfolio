import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Active link styling function
  const activeLink = (path) =>
    location.pathname === path ? 'text-white underline font-bold border-b-2 border-purple-500 md:border-none' : 'text-white';

  return (
    <nav className="bg-gray-800 shadow-lg py-4 fixed w-full top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl text-white font-bold">Portfolio</div>

        {/* Hamburger Menu */}
        <button 
          className="text-white md:hidden focus:outline-none" 
          onClick={toggleMenu}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Nav Links */}
        <ul className={`md:flex md:space-x-8 text-lg font-semibold md:static absolute bg-gray-800 w-full left-0 md:w-auto transition-all duration-300 ease-in ${isOpen ? 'top-16' : 'top-[-490px]'}`}>
          <li className="border-b md:border-none">
            <Link 
              to="/" 
              className={`cursor-pointer block hover:text-purple-500 transition py-2 md:py-0 px-4 ${activeLink("/")}`}
              onClick={toggleMenu}
            >
              Home
            </Link>
          </li>
          <li className="border-b md:border-none">
            <Link 
              to="/about" 
              className={`cursor-pointer block hover:text-purple-500 transition py-2 md:py-0 px-4 ${activeLink("/about")}`}
              onClick={toggleMenu}
            >
              About
            </Link>
          </li>
          <li className="border-b md:border-none">
            <Link 
              to="/projects" 
              className={`cursor-pointer block hover:text-purple-500 transition py-2 md:py-0 px-4 ${activeLink("/projects")}`}
              onClick={toggleMenu}
            >
              Projects
            </Link>
          </li>
          <li>
            <Link 
              to="/contact" 
              className={`cursor-pointer block hover:text-purple-500 transition py-2 md:py-0 px-4 ${activeLink("/contact")}`}
              onClick={toggleMenu}
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
