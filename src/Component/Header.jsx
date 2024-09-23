import React, { useEffect } from "react";
import { NET_LOGO, SUP_LANG } from "./utils/constants";
import { useNavigate } from "react-router-dom";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "./utils/firebase";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "./utils/userSlice";
import { toggleSearchPage } from "./utils/gptSearchSlice";
import { changeLang } from "./utils/configSlice";

const Header = () => {
  const user = useSelector((store) => store.user);
  const gptEnable = useSelector((store) => store.gpt.show);
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
  const handleGptSearch = () => {
    dispatch(toggleSearchPage());
  };
  const dispatch = useDispatch();
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const { uid, email, displayName, photoURL } = user;
        // ...
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
      } else {
        // User is signed out
        // ...
        dispatch(removeUser());
        navigate("/");
      }
    });

    return () => unsubscribe();
  }, [dispatch, navigate]);

  const handleLang = (e) => {
    dispatch(changeLang(e.target.value));
  };
  return (
    <>
      <div className="absolute w-full px-8 py-2 bg-gradient-to-b from-black z-10 flex flex-col md:flex-row  md:justify-between ">
        <img className="mx-auto md:mx-0 w-44" src={NET_LOGO} alt="logo" />

        {user && (
          <div className="right-0 top-5 bg-opacity-85 flex flex-wrap justify-center">
            {gptEnable && (
              <select
                className="px-4 m-4 bg-black text-white border border-1-white rounded-lg"
                onChange={handleLang}
              >
                {SUP_LANG.map((lang) => (
                  <option key={lang.identifier} value={lang.identifier}>
                    {lang.name}
                  </option>
                ))}
              </select>
            )}
            <button
              className="bg-violet-900 py-2 px-8 m-4 rounded-lg   text-white "
              onClick={handleGptSearch}
            >
              {gptEnable ? "Home Page" : "GPT Search"}
            </button>

            <img
              className="hidden md:block w-12 h-12 rounded-full  m-4"
              alt="userImg"
              src={user.photoURL}
            />

            <button
              className="rounded-lg text-white bg-red-700 p-2 m-4"
              onClick={handleSignout}
            >
              Sign Out
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default Header;
