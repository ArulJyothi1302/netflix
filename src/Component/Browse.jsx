import React from "react";
import Header from "./Header";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import useNowPlayingMovie from "./hooks/useNowPlayingMovie";
import usePopularMovies from "./hooks/usePopularMovies";
import useUpcomingMovie from "./hooks/useUpcomingMovie";
import useTopRated from "./hooks/useTopRated";
import { useSelector } from "react-redux";
import GptSearch from "./GptSearch";

const Browse = () => {
  useNowPlayingMovie();
  usePopularMovies();
  useUpcomingMovie();
  useTopRated();
  const gptsearch = useSelector((store) => store.gpt.show);
  return (
    <>
      <div>
        <Header />
        {gptsearch ? (
          <GptSearch />
        ) : (
          <>
            <MainContainer />
            <SecondaryContainer />
          </>
        )}
      </div>
    </>
  );
};

export default Browse;
