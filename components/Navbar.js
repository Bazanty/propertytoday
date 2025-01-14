'use client'
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="text-2xl font-bold text-blue-500">
          SkyProperty
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6">
          <a href="#home" className="text-gray-600 hover:text-blue-500">
            Home
          </a>
          <a href="#about" className="text-gray-600 hover:text-blue-500">
            About
          </a>
          <a href="#properties" className="text-gray-600 hover:text-blue-500">
            Properties
          </a>
          <a href="#contact" className="text-gray-600 hover:text-blue-500">
            Contact
          </a>
          <a href="#support" className="text-gray-600 hover:text-blue-500">
            Support
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="block md:hidden text-gray-600 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg
            className="w-6 h-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            />
          </svg>
        </button>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="absolute top-16 left-0 w-full bg-white shadow-md md:hidden">
            <div className="flex flex-col items-center space-y-4 py-4">
              <a href="#home" className="text-gray-600 hover:text-blue-500">
                Home
              </a>
              <a href="#about" className="text-gray-600 hover:text-blue-500">
                About
              </a>
              <a href="#properties" className="text-gray-600 hover:text-blue-500">
                Properties
              </a>
              <a href="#contact" className="text-gray-600 hover:text-blue-500">
                Contact
              </a>
              <a href="#support" className="text-gray-600 hover:text-blue-500">
                Support
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}