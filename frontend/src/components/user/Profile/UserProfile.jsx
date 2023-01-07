import React, { useContext, useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import Axios from "axios"
import AuthContext from '../../../context/AuthContext'
import useAxios from '../../../utils/useAxios'



const Profile = () => {

  let API = useAxios()
  let {user, authTokens} = useContext(AuthContext)
  const [userdata, setUserdata] = useState([])
  const id  = user.user_id

  useEffect(() => {
    UserPro()
  }, [])

  const UserPro = () =>{
      API.get( `profile/${id}` ,
      ).then((response) => {
        console.log(response.data, "This is the response data")
        setUserdata(response.data)
      }).catch((err) => {
        console.log(err)
      });
      } 
    


  return (
    <>
    <div className='flex w-4/5 ml-48'>
      <div className='w-full h-full content-center'>
          <div className='flex justify-evenly items-center bg-black w-full h-32 mt-3 '>
            <div className='flex items-center'>
            <img className='w-16 h-16 rounded-full border-2 ' src='https://img.freepik.com/premium-photo/beauty-portrait-blonde-woman-hair-beautiful-blond-dyed-hair-girl-closeup-face-beautiful-makeup-illustration_86390-7133.jpg?w=2000'></img>
            <h1 className='text-white text-2xl p-10'>@{user.username}</h1>
            </div>
            <NavLink to='/profile'>
            <div className='grid  text-center w-24 h-32'>
            <h1 className='text-white text-2xl opacity-25 mt-7 cursor-pointer'>Posts</h1>
            <h1 className='text-white text-2xl'>{userdata.count}</h1>
            </div>
            </NavLink>
            <NavLink to='/following'>
            <div className='grid  text-center w-24 h-32 cursor-pointer'>
            <h1 className='text-white text-2xl opacity-25 mt-7'>Following</h1>
            <h1 className='text-white text-2xl'>{userdata.following}</h1>
            </div>
            </NavLink>
            <NavLink to='/followers'>
            <div className='grid  text-center w-24 h-32 cursor-pointer'>
            <h1 className='text-white text-2xl opacity-25 mt-7'>Followers</h1>
            <h1 className='text-white text-2xl'>{userdata.follower}</h1>
            </div>
            </NavLink>
          </div>
      </div>
    </div>
  </>
  )
}

export default Profile