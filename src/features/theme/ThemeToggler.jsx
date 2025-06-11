import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggleTheme } from "./themeSlice.js";

const ThemeToggler = () => {
  const dispatch = useDispatch();
  // No RootState type needed for JS
  const themeMode = useSelector((state) => state.theme.mode);

  const handleToggle = () => {
    dispatch(toggleTheme());
  };

  return (
    <button
      onClick={handleToggle}
      className="px-4 py-2 rounded-md bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50
                 dark:bg-indigo-600 dark:hover:bg-indigo-700 dark:focus:ring-indigo-600"
    >
      Switch to {themeMode === "light" ? "Dark" : "Light"} Mode
    </button>
  );
};

export default ThemeToggler;
