import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-gray-800 shadow-lg py-4 fixed w-full top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl text-white font-bold">Portfolio</div>
        <ul className="flex justify-center space-x-6">
          <li><a href="#home" className="text-white cursor-pointer font-bold block hover:text-purple-500 transition py-2 md:py-0 px-4">Home</a></li>
          <li><a href="#about" className="text-white cursor-pointer font-bold block hover:text-purple-500 transition py-2 md:py-0 px-4">About</a></li>
          <li><a href="#skills" className="text-white cursor-pointer font-bold block hover:text-purple-500 transition py-2 md:py-0 px-4">Skills</a></li>
          <li><a href="#projects" className="text-white cursor-pointer font-bold block hover:text-purple-500 transition py-2 md:py-0 px-4">Projects</a></li>
          <li><a href="#contact" className="text-white cursor-pointer font-bold block hover:text-purple-500 transition py-2 md:py-0 px-4">Contact</a></li>
        </ul>
      </div>
    </nav>
    
  );
};

export default Navbar;
