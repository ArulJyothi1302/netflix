import React from "react";
import Login from "./Login";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Browse from "./Browse";
import PlayTrailer from "./PlayTrailer";
import MovieDes from "./MovieDes";

const Body = () => {
  const approuter = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/browse",
      element: <Browse />,
    },
    {
      path: "/trailer",
      element: <PlayTrailer />,
    },
    {
      path: "/MovieDes",
      element: <MovieDes />,
    },
  ]);

  return (
    <div>
      <RouterProvider router={approuter} />
    </div>
  );
};

export default Body;
