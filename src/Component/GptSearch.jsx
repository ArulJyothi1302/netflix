import React from "react";
import GptSearchBar from "./GptSearchBar";
import MovieSuggestions from "./MovieSuggestions";
import { BG_URL } from "./utils/constants";

const GptSearch = () => {
  return (
    <>
      <div className="fixed -z-10 ">
        <img
          className="h-screen sm:h-fit md:h-fit lg:h-fit object-cover"
          src={BG_URL}
          alt="bg"
        />
      </div>
      <div>
        <GptSearchBar />
        <MovieSuggestions />
      </div>
    </>
  );
};

export default GptSearch;
