// src/components/Header.js
import React from "react";

const Header = () => {
  return (
    <header className="fixed top-0 w-full bg-white shadow-md z-10">
      <div className="container mx-auto flex justify-between items-center p-4">
        <h1 className="text-2xl font-bold">Sushi Landing Page</h1>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <a href="#hero" className="hover:text-gray-700">
                Home
              </a>
            </li>
            <li>
              <a href="#sushi" className="hover:text-gray-700">
                Sushi
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-gray-700">
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
