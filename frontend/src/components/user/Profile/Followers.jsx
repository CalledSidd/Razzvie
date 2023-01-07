import React, { useContext, useEffect, useState } from "react";
import AuthContext from "../../../context/AuthContext";
import useAxios from "../../../utils/useAxios";
import Profile from "./UserProfile";

const Followers = () => {
  let API = useAxios()
  let {user , authTokens} = useContext(AuthContext)
  const id = user.user_id 
  const [follower, setFollower] = useState([])
  useEffect(() => {
    Follower()
  }, [])


  const Follower = () => {
    API.get(`followers/${id}` ,
    ).then((response) => {
      console.log(response.data, "This is the number of followers of the user", user.username, id)
      setFollower(response.data)
      console.log(follower.name, ":This is follower")
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
            <p className="text-white">{follower.name}</p>
            {
              follower.map((data, index) => {
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

export default Followers;
