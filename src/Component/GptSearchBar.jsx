import React from "react";
import language from "./utils/langConstants";
import { useSelector } from "react-redux";

const GptSearchBar = () => {
  const langs = useSelector((store) => store.config.lang);
  return (
    <div className="pt-[10%] flex justify-center">
      <form
        onSubmit={(e) => e.preventDefault()}
        className=" bg-blue-950 w-1/2 grid grid-flow-col rounded-lg"
      >
        <input
          className="p-4 m-4 rounded-lg col-span-9"
          type="text"
          placeholder={language[langs].placeholder}
        />
        <button className="bg-red-600 m-4 p-4 text-white font-semibold rounded-lg col-span-3">
          {language[langs].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
