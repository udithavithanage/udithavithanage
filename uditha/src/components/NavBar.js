import React, { useState } from "react";
import { Link } from "react-scroll";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-primary text-white fixed w-full z-50 shadow-lg">
      <div className="container mx-auto flex justify-between items-center px-6 py-4">
        {/* Logo */}
        <div className="text-2xl font-bold tracking-wide">VCU</div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6">
          {["Home", "About", "Projects", "Skills", "Contact"].map((item) => (
            <li key={item}>
              <Link
                to={item.toLowerCase()}
                smooth={true}
                duration={500}
                className="cursor-pointer hover:text-accent transition-transform transform hover:scale-110"
              >
                {item}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            className="text-2xl focus:outline-none"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isOpen ? "✖" : "☰"}
          </button>
        </div>
      </div>

      {/* Mobile Menu with Animation */}
      <div
        className={`fixed inset-0 bg-primary bg-opacity-95 transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out md:hidden -z-40`}
      >
        <ul className="flex flex-col items-center justify-center h-screen space-y-8 text-xl">
          {["Home", "About", "Projects", "Skills", "Contact"].map((item) => (
            <li key={item}>
              <Link
                to={item.toLowerCase()}
                smooth={true}
                duration={500}
                className="cursor-pointer hover:text-accent transition-transform transform hover:scale-110"
                onClick={toggleMenu} // Close menu on link click
              >
                {item}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;