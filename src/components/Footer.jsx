// components/Footer.js
import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaXTwitter,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="bg-gray-100 text-black pt-12 pb-6 w-screen">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between">
        {/* ✅ Logo Image (Replaces Text + Circle) */}
        <div className="flex items-center justify-center mb-4 md:mb-0">
          <img
            src="/logo.png" // <-- replace with your actual logo image path
            alt="Centre for Outdoor Studies Logo"
            className="h-15 w-auto object-contain hover:opacity-90 transition-opacity"
          />
        </div>

        {/* Nav Links */}
        <ul className="flex flex-wrap gap-6 font-medium text-sm justify-center mb-4 md:mb-0 text-black">
          <li>
            <a href="#" className="hover:text-green-700 transition-colors">
              About Us
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-green-700 transition-colors">
              Programs
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-green-700 transition-colors">
              Tours and Expeditions
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-green-700 transition-colors">
              Work with Us
            </a>
          </li>
        </ul>

        {/* Social Icons */}
        <div className="flex gap-4 text-xl text-gray-700">
          <a href="#" className="hover:text-green-700 transition-colors">
            <FaFacebookF />
          </a>
          <a href="#" className="hover:text-green-700 transition-colors">
            <FaInstagram />
          </a>
          <a href="#" className="hover:text-green-700 transition-colors">
            <FaXTwitter />
          </a>
          <a href="#" className="hover:text-green-700 transition-colors">
            <FaLinkedinIn />
          </a>
          <a href="#" className="hover:text-green-700 transition-colors">
            <FaYoutube />
          </a>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-300 mt-6 pt-4 text-center text-xs text-gray-600">
        © 2025 Centre for Outdoor Studies. All rights reserved.
      </div>
    </footer>
  );
}
