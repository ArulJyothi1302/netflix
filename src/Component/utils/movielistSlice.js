import { createSlice } from "@reduxjs/toolkit";

const movielistSlice = createSlice({
  name: "movies",
  initialState: {
    nowPlayingMovie: null,
    trailerVideo: null,
  },
  reducers: {
    addnowPlayingMovie: (state, action) => {
      state.nowPlayingMovie = action.payload;
    },
    addTrailerVideo: (state, action) => {
      state.trailerVideo = action.payload;
    },
  },
});
export const { addnowPlayingMovie, addTrailerVideo } = movielistSlice.actions;
export default movielistSlice.reducer;
