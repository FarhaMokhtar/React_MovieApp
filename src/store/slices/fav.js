import { createSlice } from "@reduxjs/toolkit";
import { useReducer } from "react";

const initialState = {
    value: 0,
    maxCounter: 100,
    favorites: [],
  };
const favMovies=createSlice({
    name:"fav",
    initialState,
    reducers:{
        increaseCounter: (state, action) => {
            state.value = action.payload;
          },
          decreaeCounter: (state, action) => {
            state.value = action.payload;
          },
          resetCounter: (state) => {
            state.value = 0;
          },
          increaseByCount: (state, action) => {
            state.value = state.value + action.payload;
          },
          addFavorite: (state, action) => {
            const movie = action.payload;
            if (!state.favorites.some((fav) => fav.id === movie.id)) {
              state.favorites.push(movie);
            }
          },
          removeFavorite: (state, action) => {
            const movieId = action.payload;
            state.favorites = state.favorites.filter((fav) => fav.id !== movieId);
          },

    }
}
);
export const {
    increaseCounter,
    decreaeCounter,
    resetCounter,
    increaseByCount,
    addFavorite,
    removeFavorite
  } = favMovies.actions;

export default favMovies.reducer;