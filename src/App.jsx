import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import ThemeToggler from "./features/theme/ThemeToggler"; // Ensure this component exists

function App() {
  // No need for RootState type in JS
  const themeMode = useSelector((state) => state.theme.mode);

  useEffect(() => {
    // Apply the 'dark' class to the HTML element based on themeMode
    if (themeMode === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [themeMode]);

  return (
    // Tailwind's dark mode works by looking for the 'dark' class on a parent.
    // Ensure your root div or main layout components use Tailwind classes.
    <div className="min-h-screen bg-white text-gray-900 transition-colors duration-300 ease-in-out dark:bg-gray-900 dark:text-white">
      <header className="flex justify-between items-center p-4 bg-gray-100 dark:bg-gray-800 shadow-md">
        <h1 className="text-2xl font-bold">My Portfolio</h1>
        <ThemeToggler />
      </header>
      <main className="p-4">
        <section className="p-6 my-4 bg-white rounded-lg shadow-md dark:bg-gray-700">
          <h2 className="text-xl font-semibold mb-2">About Me</h2>
          <p>I'm a MERN stack expert building awesome web applications.</p>
        </section>
        <section className="p-6 my-4 bg-white rounded-lg shadow-md dark:bg-gray-700">
          <h2 className="text-xl font-semibold mb-2">My Services</h2>
          <ul className="list-disc pl-5">
            <li>Full Stack Development</li>
            <li>Frontend Development (React, Redux)</li>
            <li>Backend Development (Node.js, Express, MongoDB)</li>
          </ul>
        </section>
      </main>
    </div>
  );
}

export default App;
