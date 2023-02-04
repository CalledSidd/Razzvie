import React, { useContext, useEffect, useState } from "react";
import AuthContext from "../../../context/AuthContext";
import useAxios from "../../../utils/useAxios";
import Profile from "./UserProfile";

const Following = () => {
  return (
    <div>
      <div className="flex w-4/5 ml-48">
        <div className="w-full h-full content-center">
          <div className="items-center bg-black w-3/5 h-[550px] mt-3 ml-56 ">
            <div className="flex justify-center">
          <p className="text-white text-2xl border-2 border-t-0 border-r-0 border-l-0 ">Following</p>
            </div>
            {/* {
              following.map((data, index) => {
                return (
                  <>
                  <p className="text-white text-center text-xl mt-5">{data.name}</p>
                  </>
                )
              })
            } */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Following;
