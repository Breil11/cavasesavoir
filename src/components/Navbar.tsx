import React, { useState } from 'react';
import { ChefHat, Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-white/95 backdrop-blur-sm z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <ChefHat className="h-8 w-8 text-amber-600" />
            <span className="ml-2 text-xl font-semibold">Gourmet Delights</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-gray-700 hover:text-amber-600 transition">Home</a>
            <a href="#services" className="text-gray-700 hover:text-amber-600 transition">Services</a>
            <a href="#menu" className="text-gray-700 hover:text-amber-600 transition">Menu</a>
            <a href="#contact" className="text-gray-700 hover:text-amber-600 transition">Contact</a>
            <button className="bg-amber-600 text-white px-4 py-2 rounded-md hover:bg-amber-700 transition">
              Book Now
            </button>
          </div>

          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-700">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white shadow-lg">
            <a href="#home" className="block px-3 py-2 text-gray-700 hover:text-amber-600">Home</a>
            <a href="#services" className="block px-3 py-2 text-gray-700 hover:text-amber-600">Services</a>
            <a href="#menu" className="block px-3 py-2 text-gray-700 hover:text-amber-600">Menu</a>
            <a href="#contact" className="block px-3 py-2 text-gray-700 hover:text-amber-600">Contact</a>
            <button className="w-full text-left px-3 py-2 bg-amber-600 text-white rounded-md hover:bg-amber-700">
              Book Now
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}