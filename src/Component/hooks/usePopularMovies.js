import { useDispatch, useSelector } from "react-redux";
import { MOVIE_OPT } from "../utils/constants";
import { addPopularMovie } from "../utils/movielistSlice";
import { useEffect } from "react";

const usePopularMovies = () => {
  const dispatch = useDispatch();
  const popularMovie = useSelector((store) => store.movies.PopularMovie);
  const getPopularMovie = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
      MOVIE_OPT
    );
    const json = await data.json();
    dispatch(addPopularMovie(json.results));
  };
  useEffect(() => {
    !popularMovie && getPopularMovie();
  }, []);
};

export default usePopularMovies;
