import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-yellow-500 text-white shadow-md">
      <div className="container mx-auto px-4 py-2 flex justify-between items-center">
        <Link to="/" className="text-lg font-bold hover:underline">
          CoffeeVerse
        </Link>
        <ul className="flex space-x-4">
          <li>
            <Link
              to="/"
              className="hover:text-gray-200 transition duration-300"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/recipes"
              className="hover:text-gray-200 transition duration-300"
            >
              Show Recipes
            </Link>
          </li>
          <li>
            <Link
              to="/add"
              className="hover:text-gray-200 transition duration-300"
            >
              Add Recipe
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className="hover:text-gray-200 transition duration-300"
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
