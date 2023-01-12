import React, { useContext, useEffect, useState } from 'react'
import AuthContext from '../../../context/AuthContext'
import useAxios from '../../../utils/useAxios'

const Settings = () => {

  let API = useAxios()
  let { user, logout } = useContext(AuthContext)
  const id = user.user_id 
  const [data, setData] = useState("")
  useEffect(() => {
    UserData()
  }, [])
  function UserData() {
    API.get(`profile/${id}`, 
    ).then((response) => {
      setData(response.data)
      console.log(data)
    }).catch((err) => {
      console.log(err)
    });
  }

  return (
    <>
      <div className='w-4/5 ml-48 '>
        <div className='w-full h-full content-center'>
          <div className='h-12 w-52 mt-28'>
            <label>Change Username</label>
            <input className='w-full h-full rounded-lg' placeholder={user.username}/>
          </div>
          <div className='flex justify-end items-end h-80'>
          <div className='w-20 h-9 border border-red-600 text-red-600 rounded-lg mr-12 hover:bg-red-600 hover:text-white'>
            <button onClick={logout} className='pl-3.5 align-middle '>Logout</button>
          </div>
            {/* <button onClick={logout} className='bg-black text-white border w-20 h-10 mb-2 mr-6 border-white'>Logout</button> */}
          </div>
        </div>
      </div>
      
    </>
  )
  {/* Modal for User*/}
}
export default Settings