import React, { useRef, useState } from "react";
import language from "./utils/langConstants";
import { useDispatch, useSelector } from "react-redux";
import { MOVIE_OPT } from "./utils/constants";
import { addGptSearchedMovies } from "./utils/gptSearchSlice";
import openai from "./utils/openai";
import Shimmer from "./Shimmer";

const GptSearchBar = () => {
  const [err, setErr] = useState("");
  const dispatch = useDispatch();
  const langs = useSelector((store) => store.config.lang);
  const search = useRef(null);
  const searchedMovies = async (movies) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movies +
        "&include_adult=false&language=en-US&page=1",
      MOVIE_OPT
    );
    const json = await data.json();
    return json.results;
  };
  const handleGpptSearchClick = async () => {
    console.log(search.current.value);
    try {
      setErr("");
      const gptQuery =
        "Act as a Movie Recmmendation system and Suggest movies for the query: " +
        search.current.value +
        " only give me 5 movies, comma-sepratated like example result given ahead, Expample Result: GOAT, Jailer, Leo, Kaithi, Vikram";
      const chatCompletion = await openai.chat.completions.create({
        messages: [{ role: "user", content: gptQuery }],
        model: "gpt-3.5-turbo",
      });
      console.log(chatCompletion.choices);

      const moviedata = chatCompletion.choices[0]?.message?.content.split(",");
      const promiseArray = moviedata.map((movies) => searchedMovies(movies));
      const tmdbResult = await Promise.all(promiseArray);
      console.log(tmdbResult);
      dispatch(
        addGptSearchedMovies({ movieName: moviedata, movieResult: tmdbResult })
      );
    } catch (e) {
      console.log("Error has benn found:" + e);
      setErr("API Token has expired. Please wait for an Update.");
    }
  };
  return (
    <>
      <div className="pt-[50%] sm:pt-[25%]  md:pt-[10%] flex justify-center">
        <form
          onSubmit={(e) => e.preventDefault()}
          className=" bg-blue-950 w-full md:w-1/2 grid grid-flow-col rounded-lg"
        >
          <input
            ref={search}
            className="p-4 m-4 rounded-lg col-span-9"
            type="text"
            placeholder={language[langs].placeholder}
          />
          <button
            className="bg-red-600 m-4 p-4 text-white font-semibold rounded-lg col-span-3"
            onClick={handleGpptSearchClick}
          >
            {language[langs].search}
          </button>
        </form>
      </div>

      {err && (
        <div className="flex flex-col items-center justify-center">
          <div className=" w-1/2 text-white text-center m-4 p-4 font-bold bg-black">
            <h1>{err}</h1>
          </div>
          <Shimmer />;
        </div>
      )}
    </>
  );
};

export default GptSearchBar;
