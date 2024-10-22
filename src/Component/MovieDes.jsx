import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { IMG_CDN_URL } from "./utils/constants";

const MovieDes = () => {
  const navigate = useNavigate();
  const goBack = () => {
    navigate("/browse");
  };
  const location = useLocation();
  const { title, poster, desc, rd } = location.state || {};
  return (
    <div className="bg-black text-white">
      <div className="">
        <img className="mx-auto my-0" src={IMG_CDN_URL + poster} alt={title} />
      </div>
      <div className="flex justify-center">
        <button
          className="bg-black opacity-70 rounded-lg absolute top-0 text-white py-4 px-10"
          onClick={goBack}
        >
          Back
        </button>
      </div>
      <div className="w-1/3 mx-auto my-0">
        <h1 className="inline-block font-bold p-4 text-3xl">{title}</h1>
        <h3 className="p-4 text-2xl">Released:{rd}</h3>
        <h1 className="p-4 text-2xl">Description</h1>
        <p className="py-2 px-4">{desc}</p>
      </div>
    </div>
  );
};

export default MovieDes;
