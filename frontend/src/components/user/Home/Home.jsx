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
      {/* <div className="grid grid-cols-2 px-40 content-center text-base max-w-[1800px] w-full -52">
    {
        post ? post.map((postlist) => {
          return(
          <div className="rounded-xl shadow-xl max-w-md ">
            <Link to={`post/${postlist.id}`}>
              <img
                className="rounded-xl w-auto h-96 mt-5"
                src={postlist.image}
                alt="post-image"
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
        )
      }) : <h1>No</h1>
      }
      </div> */}
      <section class="overflow-hidden text-gray-700">
  <div class="container px-5 py-2 mx-auto lg:pt-24 lg:px-32">
    <div class="flex flex-wrap -m-1 md:-m-2">
      <div class="flex flex-wrap w-1/2">
        <div class="w-1/2 p-1 md:p-2">
          <img alt="gallery" class="block object-cover object-center w-full h-full rounded-lg"
            src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(70).webp" />
        </div>
        <div class="w-1/2 p-1 md:p-2">
          <img alt="gallery" class="block object-cover object-center w-full h-full rounded-lg"
            src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(72).webp" />
        </div>
        <div class="w-full p-1 md:p-2">
          <img alt="gallery" class="block object-cover object-center w-full h-full rounded-lg"
            src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(73).webp" />
        </div>
      </div>
      <div class="flex flex-wrap w-1/2">
        <div class="w-full p-1 md:p-2">
          <img alt="gallery" class="block object-cover object-center w-full h-full rounded-lg"
            src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(74).webp" />
        </div>
        <div class="w-1/2 p-1 md:p-2">
          <img alt="gallery" class="block object-cover object-center w-full h-full rounded-lg"
            src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(75).webp" />
        </div>
        <div class="w-1/2 p-1 md:p-2">
          <img alt="gallery" class="block object-cover object-center w-full h-full rounded-lg"
            src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(77).webp" / >
        </div>
      </div>
    </div>
  </div>
</section>
      
      </>
  );
};

export default HomePage;
