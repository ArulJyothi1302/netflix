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
    addPopularMovie: (state, action) => {
      state.PopularMovie = action.payload;
    },
    addUpcomingMovie: (state, action) => {
      state.UpcomingMovie = action.payload;
    },
    addTopRatedMovie: (state, action) => {
      state.TopRatedMovies = action.payload;
    },
    addTrailerVideo: (state, action) => {
      state.trailerVideo = action.payload;
    },
  },
});
export const {
  addnowPlayingMovie,
  addTrailerVideo,
  addPopularMovie,
  addUpcomingMovie,
  addTopRatedMovie,
} = movielistSlice.actions;
export default movielistSlice.reducer;
