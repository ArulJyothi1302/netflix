import React from "react";
import Header from "./Header";

const Browse = () => {
  return (
    <>
      <div className="">
        <Header />
      </div>
      <div className="absolute top-20 right-10 left-10 flex flex-col justify-center items-center">
        <h1 className="">Hello</h1>
        <h2>Welcome to Netflix</h2>
        <form>
          <fieldset className="p-2 bg-gray-400 rounded-lg">
            <label className="p-2 bg-slate-100 rounded-lg m-1">Name:</label>
            <input className="p-2 bg-slate-500 rounded-lg" type="text " />
          </fieldset>
        </form>
      </div>
    </>
  );
};

export default Browse;
