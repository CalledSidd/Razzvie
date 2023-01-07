import React, { useContext, useState } from "react";
import AuthContext from "../../../context/AuthContext";

const NewPost = () => {
  let {user, authTokens} = useContext(AuthContext)
  const [post, setPost] = useState({
    title : "",
    image : "",
    user  : user.user_id,
  })
  const newpost = (e) => {
    e.PreventDefault();
    
  }
  return (
    <>
      <div className="flex w-4/5 ml-48">
        <div className="w-full h-full content-center">
          <div className="flex justify-evenly items-center w-3/5 h-screen max-h-[500px] mt-32 ml-60">
          <input type="file" className="h-7 w-28 l" /><hr/>
          <label className="text-white">Title</label>
          <input type='text' className="w-96 h-12 bg-white"/>
          <button className="bg-white w-12 ">Post</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default NewPost;
