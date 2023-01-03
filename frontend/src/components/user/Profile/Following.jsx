import React from "react";
import Profile from "./UserProfile";

const Following = () => {
  return (
    <div>
      <Profile />
      <div className="flex w-4/5 ml-48">
        <div className="w-full h-full content-center">
          <div className="flex justify-evenly items-center bg-black w-3/5 h-screen max-h-[550px] mt-3 ml-56"></div>
        </div>
      </div>
    </div>
  );
};

export default Following;
