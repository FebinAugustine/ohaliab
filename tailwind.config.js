/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        // Set Poppins as the default 'sans' font
        sans: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
};
