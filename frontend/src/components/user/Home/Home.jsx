import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AuthContext from "../../../context/AuthContext";


import Axios from 'axios';
import useAxios from "../../../utils/useAxios";


const HomePage = () => {

  let { user, authTokens } = useContext(AuthContext);
  const [post, setPost] = useState([]);
  let API = useAxios()




  const navigate = useNavigate();
  useEffect(() => {
    if (!authTokens) {
      console.log("Redirected to login")
      navigate("/login");
    } else {
      postlist()
    }
  }, []);


  function postlist() {
    API.get("home",
    ).then((response) => {
      console.log(response.data, "This is response")
      setPost(response.data)
    }).catch((err) => {
      console.log(err)
    });
  }
  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
      <div className="grid grid-cols-4 px-32 pr-14 content-center text-base max-w-[1500px] w-full ">
        {
          post ? post.map((postlist) => {
            return (
              <div className="rounded-xl shadow-md border border-gray-700 shadow-gray-800 flex items-center justify-center m-5">
                <Link to={`post/${postlist.id}`}>
                  <img
                    className="rounded-xl w-fit h-72 mt-5 p-8 object-cover"
                    src={postlist.image}
                    alt="post-image"
                  />
                  <p className="text-white text-lg font-mono flex justify-center">{postlist.user.username}</p>
                </Link>
              </div>
            )
          }) : <h1>No</h1>
        }
      </div>
    </>
  );
};

export default HomePage;
