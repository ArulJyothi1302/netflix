import React from "react";
import MovieCards from "./MovieCards";

const MovieList = ({ title, movielist }) => {
  return (
    <div className="pl-2 md:pl-12 text-white">
      <h1 className="py-6 text-lg md:text-3xl ">{title}</h1>

      <div className="flex overflow-x-scroll overflow-style-none">
        <div className="flex">
          {movielist?.map((movie) => (
            <MovieCards key={movie.id} poster={movie?.poster_path} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
