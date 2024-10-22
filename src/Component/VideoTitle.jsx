import React from "react";
import { useNavigate } from "react-router-dom";

const VideoTitle = ({ title, des }) => {
  const navigate = useNavigate();
  const handleClickPlay = () => {
    navigate("/trailer");
  };
  return (
    // Movie Title and Description
    <div className="absolute bg-gradient-to-r from-black w-full aspect-video pt-[20%] px-6 md:px-24 text-white">
      <h1 className="text-2xl md:text-5xl font-bold">{title}</h1>
      <p className="hidden md:block mx-2 my-6 w-1/3 text-md">{des}</p>
      <div className="my-2 md:my-0">
        <button
          className=" bg-white py-1 md:py-4 px-3 md:px-12 rounded-lg text-black text-lg font-semibold hover:opacity-80"
          onClick={handleClickPlay}
        >
          ▶️ Play
        </button>
        <button className="hidden md:inline-block mx-2 bg-gray-600 p-4 px-12 rounded-lg text-white text-lg font-semibold">
          ℹ️ More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
