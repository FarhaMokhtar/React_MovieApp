import { configureStore } from "@reduxjs/toolkit";
import favMovies from "./slices/fav";

export default configureStore({
  reducer: {
    movfav: favMovies,
  },
});