import React from "react";
import Header from "./Header";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import useNowPlayingMovie from "./hooks/useNowPlayingMovie";
import usePopularMovies from "./hooks/usePopularMovies";
import useUpcomingMovie from "./hooks/useUpcomingMovie";
import useTopRated from "./hooks/useTopRated";

const Browse = () => {
  useNowPlayingMovie();
  usePopularMovies();
  useUpcomingMovie();
  useTopRated();
  return (
    <>
      <div>
        <Header />
        <MainContainer />
        <SecondaryContainer />
      </div>
    </>
  );
};

export default Browse;
