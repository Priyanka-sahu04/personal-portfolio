import React, { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-800 shadow-lg py-4 fixed w-screen top-0 z-50">
      <div className="max-w-5xl mx-auto px-4 flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl text-white font-bold">Portfolio</div>
        
        {/* Hamburger Menu (Mobile) */}
        <button 
          className="md:hidden text-white" 
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
        
        {/* Navigation Links */}
        <ul className={`md:flex md:items-center md:space-x-6 absolute md:static bg-gray-800 md:bg-transparent w-full left-0 top-16 md:top-auto transition-all duration-300 ease-in-out md:justify-end ${isOpen ? "block" : "hidden"}`}>
          {[
            { name: "Home", href: "#home" },
            { name: "About", href: "#about" },
            { name: "Skills", href: "#skills" },
            { name: "Projects", href: "#projects" },
            { name: "Contact", href: "#contact" },
          ].map((link, index) => (
            <li key={index} className="text-center py-2 md:py-0">
              <a
                href={link.href}
                className="text-white block px-4 py-2 hover:text-purple-500 transition font-bold"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
