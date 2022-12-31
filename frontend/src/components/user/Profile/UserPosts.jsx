import React from "react";
import Profile from "./UserProfile";

const UserPosts = () => {
  return (
    <div>
      <Profile />
      <div className="flex w-4/5 ml-48">
        <div className="w-full h-full content-center">
          <div className="flex justify-evenly items-center bg-black w-full h-screen mt-3 "></div>
        </div>
      </div>
    </div>
  );
};

export default UserPosts;
