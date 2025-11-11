import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [hoverPrograms, setHoverPrograms] = useState(false);
  const location = useLocation();

  // Detect if we are on Contact, Blog, or Blog Detail page
  const isLightPage =
    location.pathname === "/contact" ||
    location.pathname === "/blog" ||
    location.pathname.startsWith("/blog/") ||
    location.pathname === "/blog-details";

  // Dynamic colors based on route
  const textColor = isLightPage ? "text-gray-900" : "text-white";
  const hoverColor = isLightPage ? "hover:text-green-700" : "hover:text-green-300";
  const buttonBorder = isLightPage
    ? "border-green-700 text-green-700 hover:bg-green-700 hover:text-white"
    : "border-green-300 text-green-200 hover:bg-green-200 hover:text-gray-900";
  const navBg = isLightPage
    ? "bg-green-50/90 backdrop-blur-sm border-b border-gray-200"
    : "bg-white/10 backdrop-blur-md border-b border-white/20";

  return (
    <>
      {/* =================== MAIN NAVBAR =================== */}
      <motion.nav
        className={`fixed top-0 left-0 right-0 ${navBg} px-8 py-4 flex items-center justify-between w-full shadow-md z-50 transition-colors duration-300`}
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        {/* ✅ LOGO */}
        <Link to="/" className="flex items-center">
          <img
            src="/logo.png"
            alt="COS Logo"
            className="h-14 w-auto object-contain hover:opacity-90 transition-opacity"
          />
        </Link>

        {/* =================== NAV LINKS =================== */}
        <ul className={`hidden md:flex items-center space-x-10 text-sm font-medium ${textColor}`}>
          <li className={`${hoverColor} transition-colors`}>
            <Link to="/about-us">ABOUT US</Link>
          </li>

          {/* =================== PROGRAMS DROPDOWN =================== */}
          <li
            className="relative"
            onMouseEnter={() => setHoverPrograms(true)}
            onMouseLeave={() => setHoverPrograms(false)}
          >
            <span className={`${hoverColor} cursor-pointer transition-colors`}>
              PROGRAMS
            </span>

            <AnimatePresence>
              {hoverPrograms && (
                <motion.div
                  className={`absolute left-0 top-full w-[50vw] h-[400px] ${
                    isLightPage
                      ? "bg-green-50 border border-gray-200 text-gray-900"
                      : "bg-white/10 backdrop-blur-md border-b border-white/20 text-white"
                  } shadow-2xl z-40 flex items-start rounded-br-2xl`}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                >
                  {/* LEFT SIDE: PROGRAM LINKS */}
                  <div className="w-1/2 p-10 flex flex-col justify-center space-y-4">
                    <h4
                      className={`text-sm uppercase tracking-widest ${
                        isLightPage ? "text-green-700" : "text-green-200"
                      } font-semibold mb-2`}
                    >
                      Our Programs
                    </h4>
                    <Link
                      to="/adventurer"
                      className={`text-xl font-medium ${hoverColor} transition-colors`}
                    >
                      The Adventurer
                    </Link>
                    <Link
                      to="/tide-trail"
                      className={`text-xl font-medium ${hoverColor} transition-colors`}
                    >
                      Tide Trail
                    </Link>
                    <Link
                      to="/Himayalas"
                      className={`text-xl font-medium ${hoverColor} transition-colors`}
                    >
                      Himayalas
                    </Link>
                    <Link
                      to="/Payaniga"
                      className={`text-xl font-medium ${hoverColor} transition-colors`}
                    >
                      Payaniga
                    </Link>
                  </div>

                  {/* RIGHT SIDE: QUOTE + BUTTON */}
                  <div
                    className={`w-1/2 h-full flex flex-col justify-center items-center border-l ${
                      isLightPage ? "border-gray-300" : "border-white/20"
                    } px-8`}
                  >
                    <p
                      className={`${
                        isLightPage ? "text-gray-600" : "text-gray-300"
                      } text-sm italic`}
                    >
                      “Adventure begins where comfort ends.”
                    </p>
                    <Link
                      to="/about-us"
                      className={`mt-6 inline-flex items-center space-x-2 ${buttonBorder} font-semibold text-sm px-6 py-2 rounded-full transition`}
                    >
                      <span>Learn More</span>
                      <span>→</span>
                    </Link>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </li>

          <li className={`${hoverColor} transition-colors`}>
            <Link to="/blog">BLOG</Link>
          </li>

          {/* ✅ CONTACT BUTTON */}
          <li>
            <Link
              to="/contact"
              className={`inline-flex items-center space-x-2 border ${buttonBorder} font-semibold text-sm px-6 py-2 rounded-full transition`}
            >
              <span>CONTACT US</span>
            </Link>
          </li>
        </ul>

        {/* =================== MOBILE MENU BUTTON =================== */}
        <button
          className={`md:hidden ${textColor}`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </motion.nav>

      {/* =================== MOBILE MENU =================== */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className={`fixed top-0 left-0 w-full h-screen ${
              isLightPage ? "bg-green-50/95 text-gray-900" : "bg-black/70 text-white"
            } backdrop-blur-lg flex flex-col items-center justify-center space-y-8 z-40`}
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.4 }}
          >
            <button
              className={`absolute top-6 right-8 ${textColor}`}
              onClick={() => setMenuOpen(false)}
            >
              <X size={28} />
            </button>

            <Link
              to="/about-us"
              onClick={() => setMenuOpen(false)}
              className={`text-xl ${hoverColor} transition-colors`}
            >
              ABOUT US
            </Link>

            <Link
              to="/adventurer"
              onClick={() => setMenuOpen(false)}
              className={`text-xl ${hoverColor} transition-colors`}
            >
              PROGRAMS
            </Link>

            <Link
              to="/blog"
              onClick={() => setMenuOpen(false)}
              className={`text-xl ${hoverColor} transition-colors`}
            >
              BLOG
            </Link>

            <Link
              to="/contact"
              onClick={() => setMenuOpen(false)}
              className={`inline-flex items-center space-x-2 border ${buttonBorder} font-semibold text-sm px-6 py-2 rounded-full transition`}
            >
              <span>CONTACT US</span>
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
