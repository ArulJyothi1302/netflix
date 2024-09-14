import React from "react";
import { IMG_CDN_URL } from "./utils/constants";

const MovieCards = ({ poster }) => {
  if (!poster) return null;
  return (
    <div className="">
      <div className="pl-2">
        <div className="w-36">
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
