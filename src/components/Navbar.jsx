import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="bg-yellow-500 text-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold hover:underline">
          CoffeeVerse
        </Link>
        {/* Hamburger Button */}
        <div className="lg:hidden z-50">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <svg
                className="w-8 h-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="w-8 h-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>
        {/* Navigation Menu */}
        <ul
          className={`absolute lg:static top-16 left-0 w-full lg:w-auto bg-yellow-500 lg:bg-transparent lg:flex lg:items-center lg:space-x-6 text-center transform ${
            isMenuOpen
              ? "translate-y-0 opacity-100"
              : "-translate-y-full opacity-0"
          } transition-all duration-300 ease-in-out lg:opacity-100 lg:translate-y-0 z-40`}
        >
          <li className="py-2 lg:py-0">
            <Link
              to="/"
              className="block lg:inline-block hover:text-gray-200 transition duration-300"
              onClick={closeMenu}
            >
              Home
            </Link>
          </li>
          <li className="py-2 lg:py-0">
            <Link
              to="/recipes"
              className="block lg:inline-block hover:text-gray-200 transition duration-300"
              onClick={closeMenu}
            >
              Recipes
            </Link>
          </li>
          <li className="py-2 lg:py-0">
            <Link
              to="/add"
              className="block lg:inline-block hover:text-gray-200 transition duration-300"
              onClick={closeMenu}
            >
              Add Recipe
            </Link>
          </li>
          <li className="py-2 lg:py-0">
            <Link
              to="/about"
              className="block lg:inline-block hover:text-gray-200 transition duration-300"
              onClick={closeMenu}
            >
              About
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
