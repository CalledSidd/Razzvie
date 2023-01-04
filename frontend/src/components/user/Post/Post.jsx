import React, { useContext, useEffect, useState } from "react";
import Axios from "axios";
import AuthContext from "../../../context/AuthContext";
import { useParams } from "react-router-dom";
import useAxios from "../../../utils/useAxios";
import { format } from "timeago.js";

const Post = () => {
  useEffect(() => {
    ViewPost();
  }, []);

  let { authTokens } = useContext(AuthContext);
  const [post, setPost] = useState([]);
  const { post_id } = useParams();
  const [postuser, setPostuser] = useState("");
  console.log(post_id);
  let Post = useAxios();

  const ViewPost = () => {
    Post.get(`post/${post_id}`, {}
    ).then((response) => {
        console.log(response);
        setPostuser(response.data.user);
        setPost(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <div className="flex w-4/5 ml-48">
        <div className="w-full h-full content-center">
          <div className="flex justify-start bg-black w-11/12 h-screen max-h-[600px] mt-10 ml-24">
            <img className=" h-full w-3/5" src={post.image}></img>
            <div className=" w-full h-20 text-center rounded-2xl pt-5 mt-9">
            <img className="w-10 bg-red-50 h-10 absolute rounded-full ml-36" src="https://us.123rf.com/450wm/alexvolot/alexvolot2004/alexvolot200400026/alexvolot200400026.jpg?ver=6" />
              <p className="text-white font-mono text-xl">{postuser.username}</p>
              <p className="text-white font-mono text-xl pt-16">{post.title}</p>
              <p className="text-white opacity-25 pt-7">{format(post.posted_at)}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Post;
