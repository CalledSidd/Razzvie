import React, { useContext, useEffect, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import AuthContext from "../../../context/AuthContext";
import useAxios from "../../../utils/useAxios";
import Profile from "./UserProfile";

const UserPosts = () => {

  let API = useAxios()
  let { user, authTokens } = useContext(AuthContext)
  const id = user.user_id
  const [post, setPostdata] = useState([])

  useEffect(() => {
    Post()
  }, [])


  const Post = () => {
    API.get(`userpost/${id}`,
    ).then((response) => {
      console.log(response.data)
      setPostdata(response.data)
    }).catch((err) => {
      console.log(err)
    });
  }
  return (
    <div>
      <Profile />
      <div className="flex w-4/5 ml-48">
        <div className="w-full h-full content-center">
          <div className="flex justify-evenly items-center bg-black w-full h-screen max-h-[550px] mt-3 ">
            <div className="grid grid-cols-4 px-40 content-center text-base max-w-[1500px] w-full ">
              {
                post ? post.map((postlist) => {
                  return (
                    <div className="rounded-xl">
                        <img
                          className="rounded-xl w-fit h-72 mt-5 p-8 object-cover"
                          src={postlist.image}
                          alt="post-image"
                        />
                    </div>
                  )
                }) : <h1>No</h1>
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserPosts;
