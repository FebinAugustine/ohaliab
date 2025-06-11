import React, { useState, useRef, useEffect } from "react";
import { NavLink } from "react-router-dom";
import ThemeToggler from "../features/theme/ThemeToggler";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null); // Ref for the mobile menu container
  const buttonRef = useRef(null); // NEW: Ref for the hamburger/close button

  // Define common Tailwind classes for navigation links
  const baseLinkClasses = "text-lg font-medium transition-colors duration-200";
  const defaultLinkClasses =
    "text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400";
  const activeLinkClasses =
    "text-blue-700 dark:text-blue-400 border-b-2 border-blue-700 dark:border-blue-400";

  // Classes for mobile menu links (vertical stack)
  const mobileLinkClasses =
    "block px-4 py-3 text-base font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200";
  const mobileActiveLinkClasses =
    "bg-gray-100 dark:bg-gray-700 text-blue-700 dark:text-blue-400";

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  // Effect to handle click outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      // IMPORTANT: Check if the click target is the button itself
      if (buttonRef.current && buttonRef.current.contains(event.target)) {
        return; // Do nothing if the click originated from the button
      }

      // If the menu is open AND the click is outside the menu container
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        closeMenu();
      }
    };

    if (isMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      document.addEventListener("touchstart", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    };
  }, [isMenuOpen]); // Re-run effect only when isMenuOpen changes

  return (
    <header className="flex justify-between items-center p-4 bg-gray-100 dark:bg-gray-800 shadow-md relative z-10">
      {/* Portfolio Title/Logo */}
      <div className="flex items-center">
        <NavLink
          to="/"
          className="text-2xl font-bold text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
          onClick={closeMenu}
        >
          Ohaliab
        </NavLink>
      </div>

      {/* Desktop Navigation Links (visible on md and up) */}
      <nav className="hidden md:flex space-x-6">
        <NavLink
          to="/"
          className={({ isActive }) =>
            `${baseLinkClasses} ${defaultLinkClasses} ${
              isActive ? activeLinkClasses : ""
            }`
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/services"
          className={({ isActive }) =>
            `${baseLinkClasses} ${defaultLinkClasses} ${
              isActive ? activeLinkClasses : ""
            }`
          }
        >
          Services
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            `${baseLinkClasses} ${defaultLinkClasses} ${
              isActive ? activeLinkClasses : ""
            }`
          }
        >
          About
        </NavLink>
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            `${baseLinkClasses} ${defaultLinkClasses} ${
              isActive ? activeLinkClasses : ""
            }`
          }
        >
          Contact
        </NavLink>
      </nav>

      {/* Theme Toggler and Mobile Menu Button */}
      <div className="flex items-center space-x-4">
        <ThemeToggler />
        {/* Mobile Hamburger Menu Button (visible only on small screens) */}
        <button
          ref={buttonRef} // Attach the ref here
          onClick={toggleMenu}
          className="md:hidden p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-700 dark:text-white"
          aria-label="Toggle navigation menu"
        >
          {isMenuOpen ? (
            // Close icon (X)
            <svg
              className="w-6 h-6"
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
              ></path>
            </svg>
          ) : (
            // Hamburger icon
            <svg
              className="w-6 h-6"
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
              ></path>
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Navigation Menu (visible when isMenuOpen is true) */}
      <div
        ref={menuRef} // Attach the menu ref here
        className={`md:hidden absolute top-full left-0 w-full bg-gray-50 dark:bg-gray-800 shadow-lg border-t border-gray-200 dark:border-gray-700 py-2
          transform transition-all ease-in-out duration-300 ${
            isMenuOpen
              ? "scale-y-100 opacity-100"
              : "scale-y-0 opacity-0 pointer-events-none"
          } origin-top`}
      >
        <NavLink
          to="/"
          className={({ isActive }) =>
            `${mobileLinkClasses} ${isActive ? mobileActiveLinkClasses : ""}`
          }
          onClick={closeMenu}
        >
          Home
        </NavLink>
        <NavLink
          to="/services"
          className={({ isActive }) =>
            `${mobileLinkClasses} ${isActive ? mobileActiveLinkClasses : ""}`
          }
          onClick={closeMenu}
        >
          Services
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            `${mobileLinkClasses} ${isActive ? mobileActiveLinkClasses : ""}`
          }
          onClick={closeMenu}
        >
          About
        </NavLink>
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            `${mobileLinkClasses} ${isActive ? mobileActiveLinkClasses : ""}`
          }
          onClick={closeMenu}
        >
          Contact
        </NavLink>
      </div>
    </header>
  );
};

export default Header;
