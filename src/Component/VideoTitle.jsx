import React from "react";

const VideoTitle = ({ title, des }) => {
  return (
    // Movie Title and Description
    <div className="absolute bg-gradient-to-r from-black w-full aspect-video pt-[20%] px-24 text-white">
      <h1 className="text-5xl font-bold">{title}</h1>
      <p className="mx-2 my-6 w-1/3 text-md">{des}</p>
      <div className="my-4">
        <button className="mx-2 bg-white  p-4 px-12 rounded-lg text-black text-lg font-semibold hover:opacity-80">
          ▶️ Play
        </button>
        <button className="mx-2 bg-gray-600 p-4 px-12 rounded-lg text-white text-lg font-semibold">
          ℹ️ More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
