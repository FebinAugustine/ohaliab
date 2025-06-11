import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Routes, Route, Link } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Hero from "./components/Hero";

// Create simple placeholder components for each page
const HomePage = () => (
  <>
    {" "}
    {/* Use a React Fragment to wrap multiple elements */}
    <Hero /> {/* Render the Hero component here */}
    <section
      id="home-content"
      className="p-6 my-4 bg-white rounded-lg shadow-md dark:bg-gray-700 mx-4 lg:mx-8"
    >
      <h2 className="text-xl font-semibold mb-2">
        A Bit More About My Services
      </h2>
      <p>
        Welcome to my portfolio! I specialize in creating dynamic, responsive,
        and robust web applications using the MERN stack. From sleek user
        interfaces to powerful backend APIs, I provide end-to-end development
        solutions. My focus is on delivering high-quality code and a seamless
        user experience.
      </p>
      {/* You can add more content here that appears below the hero on the home page */}
    </section>
  </>
);
const ServicesPage = () => (
  <section className="p-6 my-4 bg-white rounded-lg shadow-md dark:bg-gray-700">
    <h2 className="text-xl font-semibold mb-2">My Services</h2>
    <ul className="list-disc pl-5">
      <li>Full Stack Development</li>
      <li>Frontend Development (React, Redux)</li>
      <li>Backend Development (Node.js, Express, MongoDB)</li>
    </ul>
  </section>
);

const AboutPage = () => (
  <section className="p-6 my-4 bg-white rounded-lg shadow-md dark:bg-gray-700">
    <h2 className="text-xl font-semibold mb-2">About Me</h2>
    <p>
      I'm a MERN stack expert building awesome web applications. Learn more
      about my journey and skills!
    </p>
  </section>
);

const ContactPage = () => (
  <section className="p-6 my-4 bg-white rounded-lg shadow-md dark:bg-gray-700">
    <h2 className="text-xl font-semibold mb-2">Contact Me</h2>
    <p>
      Feel free to reach out for your web development needs! I'm excited to hear
      from you.
    </p>
    {/* Placeholder for your contact form or details */}
  </section>
);

function App() {
  const themeMode = useSelector((state) => state.theme.mode);

  useEffect(() => {
    if (themeMode === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [themeMode]);

  return (
    <div className="min-h-screen flex flex-col bg-white text-gray-900 transition-colors duration-300 ease-in-out dark:bg-gray-900 dark:text-white">
      <Header />

      <main className="flex-grow ">
        {/* Define your routes here */}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          {/* Add a catch-all route for 404 if desired */}
          {/* <Route path="*" element={<div>404 Not Found</div>} /> */}
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
