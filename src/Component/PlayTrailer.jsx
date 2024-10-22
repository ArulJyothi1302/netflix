import React from "react";
import { useSelector } from "react-redux";
import VideoBG from "./VideoBG";
import useNowPlayingMovie from "./hooks/useNowPlayingMovie";
import { useNavigate } from "react-router-dom";

const PlayTrailer = () => {
  const navigate = useNavigate();
  useNowPlayingMovie();
  const movtrailer = useSelector((store) => store.movies?.nowPlayingMovie);

  if (!movtrailer) return;
  const mainMovie = movtrailer[0];
  const { id } = mainMovie;

  const handleBack = () => {
    navigate("/browse");
  };

  return (
    <div className="w-full">
      <button
        className="bg-blue-900  my-3 p-4 rounded-lg  absolute top-0 text-white w-full"
        onClick={handleBack}
      >
        Back
      </button>
      <VideoBG movieId={id} />
    </div>
  );
};

export default PlayTrailer;
