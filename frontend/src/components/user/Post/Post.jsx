import React, { useContext, useEffect, useState } from "react";
import Axios from "axios";
import AuthContext from "../../../context/AuthContext";
import { AiOutlineHeart, AiOutlineUser,AiOutlineCompass } from "react-icons/ai";
import { useParams } from "react-router-dom";
import useAxios from "../../../utils/useAxios";
import { format } from "timeago.js";

const Post = () => {
  useEffect(() => {
    ViewPost();
  }, []);

  let { authTokens } = useContext(AuthContext);
  const [post, setPost] = useState([]);
  const [likes, setLikes] = useState(0)
  const { post_id } = useParams();
  const [postuser, setPostuser] = useState("");
  console.log(post_id);
  let API = useAxios();

  const ViewPost = () => {
    API.get(`post/${post_id}`, 
    ).then((response) => {
        console.log(response);
        setPostuser(response.data.user);
        setPost(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const LikePost = () => {
    API.patch(`likepost/${post_id}`, 
    ).then((response) => {
      console.log(response)
    })
  }

  return (
    <>
      <div className="flex w-4/5 ml-48">
        <div className="w-full h-full content-center">
          <div className="flex justify-start bg-black w-full h-screen max-h-[600px] mt-10">
            <img className=" h-full w-3/5 min-w-fit max-w-fit" src={post.image}></img>
            <div className=" w-full h-20 text-center rounded-2xl pt-5 mt-9">
              <p className="text-white font-mono text-xl">{postuser.username}</p>
              <p className="text-white font-mono text-xl pt-16">{post.title}</p>
              <p className="text-white opacity-25 pt-7">{format(post.posted_at)}</p>
              <div onClick={LikePost}>
              <span className="flex justify-center text-white text-3xl pt-20 items-center" ><AiOutlineHeart /></span>
              </div>
              <span className="text-white opacity-25 pt-7">{post.likes}</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Post;
