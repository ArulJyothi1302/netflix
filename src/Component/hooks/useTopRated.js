import { useDispatch } from "react-redux";
import { MOVIE_OPT } from "../utils/constants";
import { addTopRatedMovie } from "../utils/movielistSlice";
import { useEffect } from "react";
const useTopRated = () => {
  const dispatch = useDispatch();
  const getTopRatedMovie = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1",
      MOVIE_OPT
    );
    const json = await data.json();
    dispatch(addTopRatedMovie(json.results));
  };
  useEffect(() => {
    getTopRatedMovie();
  }, []);
};

export default useTopRated;
