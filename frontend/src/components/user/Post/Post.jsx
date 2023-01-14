import React, { useContext, useEffect, useState } from "react";
import Axios from "axios";
import AuthContext from "../../../context/AuthContext";
import { AiOutlineHeart, AiOutlineUser, AiOutlineCompass } from "react-icons/ai";
import { useNavigate, useParams } from "react-router-dom";
import useAxios from "../../../utils/useAxios";
import { format } from "timeago.js";

const Post = () => {
  const navigate = useNavigate()
  useEffect(() => {
    if (!authTokens) {
      navigate('/login')
    }
    ViewPost();
    comments();
  }, []);

  let { authTokens } = useContext(AuthContext);
  const [post, setPost] = useState([]);
  const [likes, setLikes] = useState([])
  const { post_id } = useParams();
  const [postuser, setPostuser] = useState("");
  const [NewComment, setNewComment] = useState("")
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
    console.log("IN LIKE POST")
    API.post(`likepost/${post_id}`,
    ).then((response) => {
      console.log(response.data)
      setLikes(response.data)
    }).catch((error) => {
      console.log(error)
    })
  }

  const comments = () => {
    API.get(`comments/${post_id}`)
      .then((response) => {
        console.log(response.data)
        setNewComment(response.data)
      })

  }
  console.log("Commmmmmetss ", NewComment);
  return (
    <>
      {/* <div className="flex w-4/5 ml-48">
        <div className="w-full h-full content-center">
          <div className="flex justify-start bg-black w-full h-screen max-h-[600px] mt-10">
            <img className=" h-full w-3/5 max-w-fit" src={post.image}></img>
            <div className="w-full h-14 flex justify-around pt-5">
              <p className="text-white font-mono text-xl">{postuser.username}</p>
              <p className="text-white font-mono text-xl pl-5">{post.title}</p>
              <p className="text-white opacity-50 p">{format(post.posted_at)}</p>
              </div>
              <div className="w-full border border-white flex">
              <div onClick={LikePost}>
              <span className="flex justify-center text-white text-3xl pt-20 items-center" ><AiOutlineHeart /></span>
              <span className="text-white opacity-50 pt-7">{post.likes}</span>
              {
              NewComment ? NewComment.map((comments) => {
                return(
                  <p className="text-white">{comments?.comment}, {format(comments?.created_at)}</p>
                  
                )
              }) : <p className="text-white">No comments</p>
            }
            </div>
            </div>
          </div>
        </div>
      </div> */}
      {/* <div className="flex justify-center mt-5">
        <div className="flex  w-10/12 align-center ml-20 h-full bg-black ">
          <div className="w-full h-screen max-h-[670px]">
            <img className=" h-full w-full max-w-fit" src={post.image}></img>
          </div>
          <div className="flex justify-around w-full h-12 border-b border-white mt-3">
            <div className="h-10 w-10 rounded-full bg-white"></div>
            <p className="text-white text-xl font-mono pr-28">{postuser.username}</p>
            <p className="text-white text-xl font-mono">{post.title}</p>
            <p className="text-white text-sm font-mono pt-2 opacity-50 ">{format(post.posted_at)}</p>
          </div>
        </div>
      </div> */}
      <div className="bg-black flex w-10/12 h-screen max-h-[650px] mt-5 ml-44">
        <div className=" w-full h-full">
          <img className="h-full w-fit" src={post.image} />
        </div>
        <div className=" w-full h-full p-3">
          <div className="flex justify-around p-3 bg-[#272727]">
            <div className="h-10 w-10 rounded-full bg-white"></div>
            <p className="text-white text-xl font-mono pr-28">{postuser.username}</p>
            <p className="text-white text-xl font-mono">{post.title}</p>
            <p className="text-white text-sm font-mono pt-2 opacity-50 ">{format(post.posted_at)}</p>
          </div>
          <div className="w-full h-[450px] overflow-auto mb-3 scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-[#272727] overflow-y-scroll scrollbar-thumb-rounded-full scrollbar-track-rounded-t-0">
            <div className="mt-3">
              {
                NewComment ? NewComment.map((comments) => {
                  return (
                    <div className="border border-[#272727] p-2 ">
                      <ul class="max-w-full divide-y divide-gray-200 dark:divide-gray-700">
                        <li class="pb-3 sm:pb-4">
                          <div class="flex items-center space-x-4">
                            <div class="flex-shrink-0">
                              <img class="w-8 h-8 rounded-full" src="https://picsum.photos/200/300" alt="Neil image" />
                            </div>
                            <div class="flex-1 min-w-0">
                              <p class="text-sm font-medium text-gray-900 truncate dark:text-white">
                                {comments.comment}
                              </p>
                              <p class="text-sm text-gray-500 truncate dark:text-gray-400">
                                {comments.user.username}
                              </p>
                            </div>
                            <div class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                              {format(comments.created_at)}
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>
                  )
                }) : <p className="text-white">No comments</p>
              }
            </div>
          </div>
          <div className="bg-red-300 w-full h-24">
          </div>
        </div>
      </div>
    </>
  );
};

export default Post;
