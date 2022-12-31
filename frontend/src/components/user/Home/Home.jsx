import jwt_decode from "jwt-decode";
import React, { useContext, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AuthContext from "../../../context/AuthContext";




const HomePage = () => {
  let { authTokens } = useContext(AuthContext);
  const navigate = useNavigate();


  useEffect(() => {
    if (! authTokens) {
      console.log("Redirected to login")
      navigate("/login");
    } else {
    
    }
  }, []);
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
      <div className="grid grid-cols-3 px-40 content-center pt-12 text-base max-w-[1800px] w-full">
        <div className="rounded-xl shadow-lg  max-w-md border border-gray-100">
          <Link to="/post">
            <img
              className="rounded-xl w-auto h-auto"
              src="https://dezartinspire.com/wp-content/uploads/2021/07/5-digital-art-arabian-girl-by-wlop.webp"
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
                    Title For the Post
                  </p>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
};

export default HomePage;
