import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addnowPlayingMovie } from "../utils/movielistSlice";
import { MOVIE_OPT } from "../utils/constants";

const useNowPlayingMovie = () => {
  const dispatch = useDispatch();
  const getNowPlayingMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1",
      MOVIE_OPT
    );
    const json = await data.json();
    dispatch(addnowPlayingMovie(json.results));
  };
  useEffect(() => {
    getNowPlayingMovies();
  }, []);
};
export default useNowPlayingMovie;
