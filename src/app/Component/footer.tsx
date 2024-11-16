// components/Footer.tsx
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className=" bg-gray-900 text-gray-300 py-8">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between space-y-6 md:space-y-0">
        
        {/* Company Info */}
        <div className="text-center md:text-left">
          <h2 className="text-white text-2xl font-semibold">Your Company</h2>
          <p className="text-sm mt-2">© 2024 My Portfolio. All rights reserved.</p>
        </div>

        {/* Navigation Links */}
        <ul className="flex flex-wrap justify-center md:justify-start space-x-6">
          <li>
            <a href="/about" className="hover:text-white transition-colors duration-200">About</a>
          </li>
          <li>
            <a href="/services" className="hover:text-white transition-colors duration-200">Services</a>
          </li>
          <li>
            <a href="/contact" className="hover:text-white transition-colors duration-200">Contact</a>
          </li>
        </ul>

        {/* Social Media Icons */}
        <div className="flex space-x-4">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors duration-200">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors duration-200">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors duration-200">
            <i className="fab fa-instagram"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
