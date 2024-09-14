import React from "react";
import GptSearchBar from "./GptSearchBar";
import MovieSuggestions from "./MovieSuggestions";
import { BG_URL } from "./utils/constants";

const GptSearch = () => {
  return (
    <div>
      <div className="fixed -z-10 ">
        <img src={BG_URL} alt="bg" />
      </div>
      <GptSearchBar />
      <MovieSuggestions />
    </div>
  );
};

export default GptSearch;
