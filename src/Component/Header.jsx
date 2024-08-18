import React from "react";
import { NET_LOGO } from "./utils/constants";
import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "./utils/firebase";
import { useSelector } from "react-redux";

const Header = () => {
  const user = useSelector((store) => store.user);
  const navigate = useNavigate();
  const handleSignout = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        navigate("/err");
        console.log(error.message);
        // An error happened.
      });
  };
  return (
    <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10">
      <img className="w-44" src={NET_LOGO} alt="logo" />

      {user && (
        <header className="absolute right-0 top-5 bg-opacity-85 flex flex-wrap justify-end">
          <img className="w-8 h-8  m-4" alt="userImg" src={user.photoURL} />
          <h1 className="p-4 m-2 text-blue-800 font-extrabold">
            {user.displayName}
          </h1>
          <button className="rounded-full bg-gray-500 text-white p-2 m-2">
            profile
          </button>
          <button
            className="rounded-lg text-white bg-red-700 p-2 m-2"
            onClick={handleSignout}
          >
            Sign Out
          </button>
        </header>
      )}
    </div>
  );
};

export default Header;
