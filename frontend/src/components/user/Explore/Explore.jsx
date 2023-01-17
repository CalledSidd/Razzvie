import React,{useContext, useState, useEffect} from "react";
import AuthContext from "../../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import useAxios from "../../../utils/useAxios";

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
    <div className="flex justify-center">
      {
        users ? users.map((user) => {
          return(
            <div>
              <p className="text-white">{user.username} ,     </p>
            </div>
          )
        }) : <p className="text-white">No user</p>
      }
    </div>
    </>
  );
};

export default Explore;
