import React from "react";
import heroBgLight from "../assets/hero-bg-light.png"; // Path to your light mode background image
import heroBgDark from "../assets/hero-bg-dark.png"; // Path to your dark mode background image (optional, but good for dual themes)
import { useSelector } from "react-redux"; // To read the current theme mode
import { ArrowRightIcon } from "@heroicons/react/24/solid"; // Example icon for the button (install if needed)

// If you don't have Heroicons installed:
// npm install @heroicons/react

const Hero = () => {
  const themeMode = useSelector((state) => state.theme.mode);

  // Choose the background image based on the current theme
  const backgroundImage = themeMode === "dark" ? heroBgDark : heroBgLight;

  return (
    <section
      className="relative h-[60vh] md:h-[80vh] flex items-center justify-center text-center px-4 overflow-hidden"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Dark Overlay for Text Readability */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      {/* Hero Content */}
      <div className="relative z-10 text-white max-w-4xl mx-auto font-sans">
        <h1 className="font-sans font-semibold text-4xl sm:text-5xl md:text-6xl  leading-tight mb-4 drop-shadow-lg">
          Ohaliab Web Solutions
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl mb-8 font-light drop-shadow-md">
          Crafting Seamless Web Experiences with the MERN Stack.
        </p>
        <a
          href="#contact" // Link to your contact section or page
          className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md shadow-lg
                     text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500
                     dark:bg-indigo-600 dark:hover:bg-indigo-700 dark:focus:ring-indigo-500 transition-all duration-300 ease-in-out"
        >
          Let's Talk About Your Project
          <ArrowRightIcon className="ml-3 h-5 w-5" /> {/* Example icon */}
        </a>
      </div>
    </section>
  );
};

export default Hero;
