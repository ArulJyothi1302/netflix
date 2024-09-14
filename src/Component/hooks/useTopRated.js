import { useDispatch, useSelector } from "react-redux";
import { MOVIE_OPT } from "../utils/constants";
import { addTopRatedMovie } from "../utils/movielistSlice";
import { useEffect } from "react";
const useTopRated = () => {
  const dispatch = useDispatch();
  const topRatedMovies = useSelector((store) => store.movies.TopRatedMovies);

  const getTopRatedMovie = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1",
      MOVIE_OPT
    );
    const json = await data.json();
    dispatch(addTopRatedMovie(json.results));
  };
  useEffect(() => {
    !topRatedMovies && getTopRatedMovie();
  }, []);
};

export default useTopRated;
