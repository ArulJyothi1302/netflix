import { useDispatch } from "react-redux";
import { MOVIE_OPT } from "../utils/constants";
import { addUpcomingMovie } from "../utils/movielistSlice";
import { useEffect } from "react";
const useUpcomingMovie = () => {
  const dispatch = useDispatch();
  const getUpcomingMovie = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1",
      MOVIE_OPT
    );
    const json = await data.json();
    dispatch(addUpcomingMovie(json.results));
  };
  useEffect(() => {
    getUpcomingMovie();
  }, []);
};

export default useUpcomingMovie;
