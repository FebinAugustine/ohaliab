import React from "react";
import { NavLink } from "react-router-dom";

const Footer = () => {
  // Define common Tailwind classes for footer links
  const footerLinkClasses =
    "text-gray-600 hover:text-blue-500 dark:text-gray-400 dark:hover:text-blue-300 transition-colors duration-200";
  const footerActiveLinkClasses =
    "text-blue-700 dark:text-blue-400 font-semibold"; // Slightly different active style for footer

  return (
    <footer className="bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white py-8 px-4 sm:px-6 lg:px-8 mt-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Company Info & About Us */}
        <div className="col-span-1 md:col-span-1">
          <h3 className="text-xl font-bold mb-4">My Portfolio Solutions</h3>{" "}
          {/* Company Name */}
          <p className="text-gray-700 dark:text-gray-300 text-sm">
            We are a dedicated team of MERN stack experts, committed to
            delivering high-quality, scalable, and modern web solutions tailored
            to your business needs. Let's build something amazing together!
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `${footerLinkClasses} ${
                    isActive ? footerActiveLinkClasses : ""
                  }`
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/services"
                className={({ isActive }) =>
                  `${footerLinkClasses} ${
                    isActive ? footerActiveLinkClasses : ""
                  }`
                }
              >
                Services
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  `${footerLinkClasses} ${
                    isActive ? footerActiveLinkClasses : ""
                  }`
                }
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  `${footerLinkClasses} ${
                    isActive ? footerActiveLinkClasses : ""
                  }`
                }
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </div>

        {/* Legal Links */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Legal</h4>
          <ul className="space-y-2">
            <li>
              <NavLink
                to="/privacy-policy"
                className={({ isActive }) =>
                  `${footerLinkClasses} ${
                    isActive ? footerActiveLinkClasses : ""
                  }`
                }
              >
                Privacy Policy
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/terms-conditions"
                className={({ isActive }) =>
                  `${footerLinkClasses} ${
                    isActive ? footerActiveLinkClasses : ""
                  }`
                }
              >
                Terms & Conditions
              </NavLink>
            </li>
          </ul>
        </div>

        {/* Social Media & Address */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Connect With Us</h4>
          <div className="flex space-x-4 mb-4">
            {/* LinkedIn Icon */}
            <a
              href="https://linkedin.com/in/yourprofile"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400"
            >
              <svg fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6">
                <path d="M16.32 14.908c-.765-.316-1.571-.581-2.453-.787c-.882-.206-1.748-.309-2.614-.309c-1.397 0-2.628.265-3.693.795c-1.065.53-1.897 1.259-2.586 2.188c-.689.929-1.034 2.029-1.034 3.3c0 .285.029.54.088.765c.059.225.132.411.219.558c.088.147.19.25.309.309c.119.059.25.088.393.088h7.247c.285 0 .54-.029.765-.088c.225-.059.411-.132.558-.219c.147-.088.25-.19.309-.309c.059-.119.088-.25.088-.393v-3.791zm-4.32-6.529c-.765 0-1.428.265-1.989.795c-.561.53-1.002 1.259-1.323 2.188c-.321.929-.482 1.995-.482 3.197c0 .882.119 1.623.357 2.223c.238.6.571 1.056 1.002 1.368c.431.312.929.468 1.493.468c1.397 0 2.628-.265 3.693-.795c1.065-.53 1.897-1.259 2.586-2.188c.689-.929 1.034-2.029 1.034-3.3c0-.882-.119-1.623-.357-2.223c-.238-.6-.571-1.056-1.002-1.368c-.431-.312-.929-.468-1.493-.468zm-4.32-6.529zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zM12 20c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" />
              </svg>
            </a>
            {/* GitHub Icon */}
            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400"
            >
              <svg fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6">
                <path d="M12 .297c-6.63 0-12 5.373-12 12c0 5.303 3.438 9.797 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04c-3.338.724-4.042-1.61-4.042-1.61c-.546-1.387-1.333-1.758-1.333-1.758c-1.09-.745.083-.73.083-.73c1.205.085 1.838 1.238 1.838 1.238c1.07 1.835 2.809 1.305 3.492.997c.108-.775.418-1.305.762-1.605c-2.665-.3-5.466-1.334-5.466-5.93c0-1.31.465-2.38.123-3.22c-.11-.34-.48-1.52.103-3.17c0 0 .88-.227 2.885 1.1c.83-.23 1.71-.346 2.59-.35c.88.004 1.76.12 2.59.35c2.005-1.327 2.885-1.1 2.885-1.1c.583 1.65.213 2.83.103 3.17c.333.84.123 1.91.123 3.22c0 4.607-2.805 5.625-5.475 5.92c.43.37.81 1.096.81 2.215c0 1.605-.015 2.895-.015 3.285c0 .315.22.69.825.57C20.565 21.82 24 17.32 24 12.297c0-6.627-5.373-12-12-12z" />
              </svg>
            </a>
            {/* X (Twitter) Icon */}
            <a
              href="https://x.com/yourhandle"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400"
            >
              <svg fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.1l-5.21-6.874L4.929 21.75H1.62L9.833 12.43 1.62 2.25h3.308l5.215 6.868L18.244 2.25zm-2.885 15.3l-1.545-2.036-6.612-8.748L5.206 2.25h2.4l4.57 6.027 1.545 2.036 6.612 8.748h-2.4l-4.57-6.027z" />
              </svg>
            </a>
          </div>
          <address className="not-italic text-gray-700 dark:text-gray-300 text-sm">
            123 Web Dev Street
            <br />
            Kochi, Kerala, India - 682001
            <br />
            Email:{" "}
            <a href="mailto:info@myportfolio.com" className="hover:underline">
              info@myportfolio.com
            </a>
            <br />
            Phone:{" "}
            <a href="tel:+911234567890" className="hover:underline">
              +91 12345 67890
            </a>
          </address>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="border-t border-gray-300 dark:border-gray-700 mt-8 pt-6 text-center text-sm text-gray-600 dark:text-gray-400">
        &copy; {new Date().getFullYear()} My Portfolio Solutions. All rights
        reserved.
      </div>
    </footer>
  );
};

export default Footer;
