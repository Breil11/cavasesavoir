import React from 'react';
import { ChefHat, Instagram, Facebook } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center mb-4">
              <ChefHat className="h-8 w-8 text-amber-500" />
              <span className="ml-2 text-xl font-semibold">Gourmet Delights</span>
            </div>
            <p className="text-gray-400 mb-4">
              Exceptional catering services for all occasions. Making your events memorable with exquisite cuisine and impeccable service.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-amber-500 transition">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-amber-500 transition">
                <Facebook className="h-6 w-6" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#home" className="text-gray-400 hover:text-amber-500 transition">Home</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-amber-500 transition">Services</a></li>
              <li><a href="#menu" className="text-gray-400 hover:text-amber-500 transition">Menu</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-amber-500 transition">Contact</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <ul className="space-y-2 text-gray-400">
              <li>123 Culinary Avenue</li>
              <li>Foodie City, FC 12345</li>
              <li>(555) 123-4567</li>
              <li>info@gourmetdelights.com</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Gourmet Delights. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}