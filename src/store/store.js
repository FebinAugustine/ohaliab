import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "../features/theme/themeSlice";
// If you're using Tanstack Query for other data, you'd add its reducer and middleware here
// import { pokemonApi } from '../services/pokemonApi'; // Example for RTK Query API slice

export const store = configureStore({
  reducer: {
    theme: themeReducer,
  },
});
