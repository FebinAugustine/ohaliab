import { createSlice } from "@reduxjs/toolkit";

// Get initial mode from localStorage or default to 'light'
const getInitialMode = () => {
  if (typeof window !== "undefined") {
    const savedMode = localStorage.getItem("themeMode");
    if (savedMode === "light" || savedMode === "dark") {
      return savedMode;
    }
  }
  // Optionally, detect system preference
  if (
    typeof window !== "undefined" &&
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches
  ) {
    return "dark";
  }
  return "light"; // Default to light if no preference or no localStorage
};

const initialState = {
  mode: getInitialMode(),
};

export const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    toggleTheme: (state) => {
      state.mode = state.mode === "light" ? "dark" : "light";
      // Persist to localStorage whenever the theme changes
      if (typeof window !== "undefined") {
        localStorage.setItem("themeMode", state.mode);
      }
    },
    setTheme: (state, action) => {
      // action.payload will be 'light' or 'dark'
      state.mode = action.payload;
      // Persist to localStorage whenever the theme changes
      if (typeof window !== "undefined") {
        localStorage.setItem("themeMode", state.mode);
      }
    },
  },
});

export const { toggleTheme, setTheme } = themeSlice.actions;
export default themeSlice.reducer;
