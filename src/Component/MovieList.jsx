import React from "react";
import MovieCards from "./MovieCards";
import { useNavigate } from "react-router-dom";

const MovieList = ({ title, movielist }) => {
  const navigate = useNavigate();
  const handleClick = (movieName, date, img, des) => {
    navigate("/movieDes", {
      state: {
        title: movieName,
        desc: des,
        poster: img,
        rd: date,
      },
    });
  };
  return (
    <div className="pl-2 md:pl-12 sm:pt-20 md:pt-0 text-white">
      <h1 className="py-6 text-lg md:text-3xl ">{title}</h1>

      <div className="flex overflow-x-scroll overflow-style-none">
        <div className="flex">
          {movielist?.map((movie) => (
            <div
              key={movie.id}
              onClick={() =>
                handleClick(
                  movie.title,
                  movie.release_date,
                  movie.poster_path,
                  movie.overview
                )
              }
            >
              <MovieCards poster={movie?.poster_path} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
