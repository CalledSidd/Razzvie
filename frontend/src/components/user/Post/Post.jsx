import React, { useContext, useEffect, useState } from "react";
import Axios from "axios";
import AuthContext from "../../../context/AuthContext";
import { AiOutlineHeart, AiOutlineUser, AiOutlineCompass, AiOutlineDelete } from "react-icons/ai";
import { RiRefreshFill, RiSendPlane2Fill } from "react-icons/ri";
import { useNavigate, useParams } from "react-router-dom";
import useAxios from "../../../utils/useAxios";
import { format } from "timeago.js";

const Post = () => {
  let { user, authTokens } = useContext(AuthContext);
  const [post, setPost] = useState([]);
  const [likes, setLikes] = useState([])
  const { post_id } = useParams();
  const [postuser, setPostuser] = useState("");
  const [AllComment, setAllComment] = useState("")
  const [comment, Setcomment] = useState("")
  const [state, Setstate] = useState(0)
  const navigate = useNavigate()
  useEffect(() => {
    if (!authTokens) {
      navigate('/login')
    }
    ViewPost();
    comments();
  }, [ comment, state]);

  console.log(post_id);
  let API = useAxios();
  const baseUrl = 'http://127.0.0.1:8000/'

  const ViewPost = () => {
    API.get(`post/${post_id}`,
    ).then((response) => {
      console.log(user.username, "This is the username of the current user")
      console.log(response);
      setLikes(response.data.likes)
      setPostuser(response.data.user);
      setPost(response.data);
    })
      .catch((err) => {
        console.log(err);
      });
  };

  const LikePost = () => {
    API.post(`likepost/${post_id}`,
    ).then((response) => {
      Setstate(Math.random())
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
        setAllComment(response.data)
      })
  }

  const NewComment = (id) => {
    let data = {
      'comment' : comment,
      'post' : post_id,
    }
    console.log(data, "this is the dataa")
    Axios.post(baseUrl + 'comments/' + post_id, data, {
      headers : {
        Authorization : `Bearer ${authTokens.access}`
      },
    }).then((response) => {
      Setstate(Math.random())
      Setcomment("")
      console.log(response)
    }).catch((err) => {
      console.lof(err)
    })
  }

  const deleteComment= (id) =>{
    API.delete('deletecomment/'+id).then((response) => {
      console.log(response.data)
      console.log("Deleted Comment");
      Setstate(Math.random())
    })
  }

  const DeletePost = () => {
    API.delete(`deletepost/${post_id}`).then((response) => {
      console.log(response.data)
      console.log("Deleted Post")
      Setstate(Math.random())
      navigate('/')
    })

  }


  return (
    <>
      <div className="bg-black flex w-10/12 h-screen max-h-[650px] mt-5 ml-44">
        <div className=" w-full h-full">
          <img className="h-full w-fit object-cover" src={post.image} />
        </div>
        <div className=" w-full h-full p-3">
          <div className="flex justify-around p-3 bg-[#272727]">
            <img className="h-10 w-10 rounded-full bg-white" src={postuser.pfp}></img>
            <p className="text-white text-xl font-mono pr-28">{postuser.username}</p>
            { (user.username === postuser.username) &&
              <p className="text-white mt-2" onClick={DeletePost}><AiOutlineDelete/></p>
            }
            <p className="text-white text-xl font-mono">{post.title}</p>
            <p className="text-white text-sm font-mono pt-2 opacity-50 ">{format(post.posted_at)}</p>
          </div>
          <div className="w-full h-[450px] overflow-auto mb-3 scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-[#272727] overflow-y-scroll scrollbar-thumb-rounded-full scrollbar-track-rounded-t-0">
            <div className="mt-3">
              {
                AllComment ? AllComment.map((comments) => {
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
                                { (user.username === comments.user.username) &&
                                <p className="text-white mt-2" onClick={() => deleteComment(comments.id)}><AiOutlineDelete/></p>
                                }
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
          <div className="w-full h-24">
            <div className="h-10 flex">
              <div className="flex justify-evenly" onClick={LikePost}>
                <span className="text-white text-3xl"><AiOutlineHeart /></span>
                <span className="text-white">{likes}</span>
              </div>
              <input className="w-11/12 h-full bg-[#272727] text-white mt-14 rounded-lg text-left"
                type='text'
                placeholder="Add New Comment"
                value={comment}
                onChange={(e) => Setcomment(e.target.value)}
              ></input>
              <span className="text-white text-3xl mt-12 p-3" onClick={NewComment}><RiSendPlane2Fill /></span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Post;
