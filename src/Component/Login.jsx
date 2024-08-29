import React, { useEffect, useRef, useState } from "react";
import Header from "./Header";
import { checkvalidate } from "./utils/FormValidate";
import { auth } from "./utils/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "./utils/userSlice";
const Login = () => {
  const dispatch = useDispatch();

  const [isSignIn, setisSignIn] = useState(true);
  const [errmsg, setErrmsg] = useState(null);
  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);
  useEffect(() => {
    if (!auth.currentUser) {
      dispatch(removeUser());
    }
  }, [dispatch]);
  const handleLogin = () => {
    setisSignIn(!isSignIn);
    setErrmsg(null);
    const inputs = document.getElementsByTagName("input");
    for (let i = 0; i < inputs.length; i++) {
      inputs[i].value = "";
    }
  };
  const handlesin = () => {
    const mes = checkvalidate(
      email.current.value,
      password.current.value,
      name.current?.value
    );

    // console.log(name.current.value);
    console.log(mes);
    setErrmsg(mes);

    if (mes) return;
    if (!isSignIn) {
      // Sign Up
      createUserWithEmailAndPassword(
        auth,

        email.current.value,
        password.current.value,
        name.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value,
            photoURL: "https://avatars.githubusercontent.com/u/67818016?v=4",
          })
            .then(() => {
              // Profile updated!
              // ...
              const { uid, email, displayName, photoURL } = user;
              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                  photoURL: photoURL,
                })
              );
            })
            .catch((error) => {
              // An error occurred
              // ...
            });

          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrmsg(errorCode + "--" + errorMessage);
          // ..
        });
    } else {
      // Sign In
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log(user);
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrmsg(errorCode + " -- " + errorMessage);
        });
    }
  };

  return (
    <div className="">
      <Header />
      <div className="absolute">
        <img
          className="concord-img vlv-creative h-screen w-screen"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/b2c3e95b-b7b5-4bb7-a883-f4bfc7472fb7/19fc1a4c-82db-4481-ad08-3a1dffbb8c39/IN-en-20240805-POP_SIGNUP_TWO_WEEKS-perspective_WEB_24a485f6-1820-42be-9b60-1b066f1eb869_small.jpg"
          // srcset="https://assets.nflxext .com/ffe/siteui/vlv3/b2c3e95b-b7b5-4bb7-a883-f4bfc7472fb7/19fc1a4c-82db-4481-ad08-3a1dffbb8c39/IN-en-20240805-POP_SIGNUP_TWO_WEEKS-perspective_WEB_24a485f6-1820-42be-9b60-1b066f1eb869_small.jpg 1000w, https://assets.nflxext.com/ffe/siteui/vlv3/b2c3e95b-b7b5-4bb7-a883-f4bfc7472fb7/19fc1a4c-82db-4481-ad08-3a1dffbb8c39/IN-en-20240805-POP_SIGNUP_TWO_WEEKS-perspective_WEB_24a485f6-1820-42be-9b60-1b066f1eb869_medium.jpg 1500w, https://assets.nflxext.com/ffe/siteui/vlv3/b2c3e95b-b7b5-4bb7-a883-f4bfc7472fb7/19fc1a4c-82db-4481-ad08-3a1dffbb8c39/IN-en-20240805-POP_SIGNUP_TWO_WEEKS-perspective_WEB_24a485f6-1820-42be-9b60-1b066f1eb869_large.jpg 1800w"
          alt="bg"
        />
      </div>
      <div className="absolute my-36 w-4/12 sm:w-12/12  mx-auto right-0 left-0">
        <form
          onSubmit={(e) => e.preventDefault()}
          className="absolute sm:w-full bg-black bg-opacity-80 px-12 py-6  "
        >
          <h1 className="text-white text-left text-2xl font-bold">
            {isSignIn ? "Sign In" : "Sign Up"}
          </h1>
          {!isSignIn && (
            <input
              ref={name}
              className="text-gray-400  w-full p-2 my-2 bg-gray-700 border border-black rounded-lg"
              type="text"
              placeholder="Full Name"
            />
          )}

          <input
            ref={email}
            className="text-gray-400 w-full p-2 my-2 bg-gray-700 border border-black rounded-lg"
            type="text"
            placeholder="Email"
          />
          <input
            ref={password}
            className="bg-gray-700 w-full p-2 my-2 rounded-lg text-gray-400"
            type="password"
            placeholder="Password"
            required
          />
          {!isSignIn && (
            <>
              <div className="text-left py-2">
                <label className="text-white text-left">
                  Above 18 <input name="gender" type="radio" />
                </label>
                <label className="px-1 text-white">
                  Below 18 <input name="gender" className="" type="radio" />
                </label>
              </div>
            </>
          )}
          <p className="text-red-500 text-left text-lg font-semibold">
            {errmsg}
          </p>
          <button
            className="w-full p-2 my-4  rounded-lg  bg-red-600 text-white"
            type="submit"
            onClick={handlesin}
          >
            {isSignIn ? "Sign In" : "Sign Up"}
          </button>
          <p
            className="text-white text-left text-sm cursor-pointer"
            onClick={handleLogin}
          >
            {isSignIn
              ? "Are yo New to Netflix?SignUp"
              : "Already a User?SignIn"}
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
