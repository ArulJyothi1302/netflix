import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store?.movies);
  return (
    movies.nowPlayingMovie && (
      <div className=" bg-black ">
        <div className="-mt-60 pl-12 relative z-20">
          <MovieList title={"New Release"} movielist={movies.nowPlayingMovie} />
          <MovieList title={"Popular"} movielist={movies.PopularMovie} />
          <MovieList title={"Trending"} movielist={movies.nowPlayingMovie} />
          <MovieList title={"Top-Rated"} movielist={movies.TopRatedMovies} />
          <MovieList title={"Up-Coming"} movielist={movies.UpcomingMovie} />
          <MovieList title={"Horror"} movielist={movies.nowPlayingMovie} />
          <MovieList title={"Crime"} movielist={movies.nowPlayingMovie} />
          <MovieList title={"Romance"} movielist={movies.nowPlayingMovie} />
        </div>
      </div>
    )
  );
};

export default SecondaryContainer;
