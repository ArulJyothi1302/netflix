import React from "react";
import { IMG_CDN_URL } from "./utils/constants";

const MovieCards = ({ poster }) => {
  if (!poster) return null;
  return (
    <div className="">
      <div>
        <div className="w-36 md:w-48 pr-4">
          <img
            className="rounded-md cursor-pointer"
            alt="MovieName"
            src={IMG_CDN_URL + poster}
          />
        </div>
      </div>
    </div>
  );
};

export default MovieCards;
