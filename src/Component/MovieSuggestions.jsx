import React from "react";
import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const MovieSuggestions = () => {
  const { movieName, movieResult } = useSelector((store) => store.gpt);
  if (!movieName) return null;
  return (
    <div className="bg-black p-4 m-4 text-white bg-opacity-90">
      <div>
        {movieName.map((movieName, index) => (
          <MovieList
            key={movieName}
            title={movieName}
            movielist={movieResult[index]}
          />
        ))}
      </div>
    </div>
  );
};

export default MovieSuggestions;
