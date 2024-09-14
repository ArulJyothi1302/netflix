import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addnowPlayingMovie } from "../utils/movielistSlice";
import { MOVIE_OPT } from "../utils/constants";

const useNowPlayingMovie = () => {
  const dispatch = useDispatch();
  const nowPlayingMovie = useSelector((store) => store.movies.nowPlayingMovie);
  const getNowPlayingMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1",
      MOVIE_OPT
    );
    const json = await data.json();
    dispatch(addnowPlayingMovie(json.results));
  };
  useEffect(() => {
    !nowPlayingMovie && getNowPlayingMovies();
  }, []);
};
export default useNowPlayingMovie;
