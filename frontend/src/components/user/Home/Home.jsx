import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AuthContext from "../../../context/AuthContext";


import Axios from 'axios';
import useAxios from "../../../utils/useAxios";


const HomePage = () => {

  let { user, authTokens } = useContext(AuthContext);
  const [post, setPost]  = useState([]);
  let Home = useAxios()




  const navigate = useNavigate();
  useEffect(() => {
    if (! authTokens) {
      console.log("Redirected to login")
      navigate("/login");
    }else{
      postlist()
    }
  }, []);


  function postlist() {
      Home.get( "home", 
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
    {
        post ? post.map((postlist) => {
          return(
          <div className="grid grid-cols-3 px-40 content-center pt-12 text-base max-w-[1800px] w-full">
          <div className="rounded-xl shadow-lg  max-w-md border border-gray-100">
            <Link to={`post/${postlist.id}`}>
              <img
                className="rounded-xl w-auto h-auto"
                src={postlist.image}
                alt="post-title"
              />
              <div className="w-50 h-16">
                <div className="w-10 h-10 mt-3 ml-5">
                  <img
                    className="w-10 bg-red-50 h-10 absolute rounded-full"
                    src="https://us.123rf.com/450wm/alexvolot/alexvolot2004/alexvolot200400026/alexvolot200400026.jpg?ver=6"
                  />
                  <div className=" w-80 h-10 ml-8">
                    <p className="text-center font-mono pt-2 text-white">
                        {postlist.title}
                    </p>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>
        )
        }) : <h1>No</h1>
      }
      
      </>
  );
};

export default HomePage;
