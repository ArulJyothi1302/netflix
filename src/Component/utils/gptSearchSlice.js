import { createSlice } from "@reduxjs/toolkit";

const gptSearchSlice = createSlice({
  name: "gpt",
  initialState: {
    show: false,
    movieName: null,
    movieResult: null,
  },
  reducers: {
    toggleSearchPage: (state) => {
      state.show = !state.show;
    },
    addGptSearchedMovies: (state, action) => {
      const { movieName, movieResult } = action.payload;
      state.movieName = movieName;
      state.movieResult = movieResult;
    },
  },
});
export const { toggleSearchPage, addGptSearchedMovies } =
  gptSearchSlice.actions;
export default gptSearchSlice.reducer;
