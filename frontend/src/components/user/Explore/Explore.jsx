import React,{useContext, useState, useEffect} from "react";
import AuthContext from "../../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import useAxios from "../../../utils/useAxios";
import { format } from "timeago.js";

const Explore = () => {
  const navigate = useNavigate()
  let {user, authTokens} = useContext(AuthContext)
  let API = useAxios()
  const [users, setUsers] = useState([])

  useEffect(() => {
    if (!authTokens) {
      console.log("Redirected to login")
      navigate("/login");
    } else {
      GETexplore()
    }
  }, []);

  const GETexplore = () => {
    API.get('explore').then((response)=>{
      console.log(response)
      setUsers(response.data)
    })
  }
  return (
    <>
    <div className="flex justify-evenly">
      {
        users ? users.map((user) => {
          return(
            <div className="bg-red-500 h-36 w-48 m-5 text-center">
              <p className="text-white">{user.username}</p>
              <img className="w-20 h-20 " src={user.pfp}/>
              <p className="text-white">{format(user.date_joined)}</p>
              <p className="text-white">{user.bio }</p>
            </div>
          )
        }) : <p className="text-white">No user</p>
      }
    </div>
    </>
  );
};

export default Explore;
