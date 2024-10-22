import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addTrailerVideo } from "../utils/movielistSlice";
import { MOVIE_OPT } from "../utils/constants";
const useMovieTrailer = (movieId) => {
  const dispatch = useDispatch();
  const getTrailer = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/" +
        movieId +
        "/videos?language=en-US",
      MOVIE_OPT
    );
    const json = await data.json();
    const filterVideo = json.results.filter(
      (video) => video.type === "Trailer"
    );
    const trailer = filterVideo.length ? filterVideo[1] : json.results[0];
    dispatch(addTrailerVideo(trailer));
  };
  useEffect(() => {
    getTrailer();
  }, []);
};
export default useMovieTrailer;
