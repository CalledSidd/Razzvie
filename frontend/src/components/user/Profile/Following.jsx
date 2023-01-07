import React, { useContext, useEffect, useState } from "react";
import AuthContext from "../../../context/AuthContext";
import useAxios from "../../../utils/useAxios";
import Profile from "./UserProfile";

const Following = () => {
  let API =  useAxios() 
  let {user} = useContext(AuthContext)
  const id = user.user_id 
  const [following, setFollowing] = useState([])
  useEffect(() => {
    Following()
  }, [])

  const Following = () => {
    API.get(`following/${id}`,
    ).then((response) => {
      setFollowing(response.data)
    }).catch((err) => {
      console.log(err)
    })
  }
  return (
    <div>
      <Profile />
      <div className="flex w-4/5 ml-48">
        <div className="w-full h-full content-center">
          <div className="flex justify-evenly items-center bg-black w-3/5 h-screen max-h-[550px] mt-3 ml-56">
          <p className="text-white">{following.name}</p>
          {
              following.map((data, index) => {
                return (
                  <>
                  <span className="text-white">{data.name}</span>
                  </>
                )
              })
            }
          </div>
        </div>
      </div>
    </div>
  );
};

export default Following;
