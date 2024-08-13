import React from "react";
import { NET_LOGO } from "./utils/constants";

const Header = () => {
  return (
    <div className="absolute px-8 py-2 bg-gradient-to-b from-black z-10">
      <img className="w-44 " src={NET_LOGO} alt="logo" />

      {/* <div>
            <button className='mx-4 px-4 py-2 rounded-lg bg-black border border-gray-600 text-white'>Enlish</button>
            <button className='mx-4 rounded-lg text-white p-2  bg-red-600 border border-white'>Sign In</button>
        </div>
        */}
    </div>
  );
};

export default Header;
