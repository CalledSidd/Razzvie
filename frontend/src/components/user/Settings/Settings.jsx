import React, { useContext } from 'react'
import AuthContext from '../../../context/AuthContext'

const Settings = () => {
  let {user, logout} = useContext(AuthContext)
  return (
    <>
    <div className='w-4/5 ml-48 '>
      <div className='w-full h-full content-center'>
        <div className='border border-white mt-2 h-screen max-h-[690px]'>
          <p className='text-white'>Change Username</p>
          <p className='text-white'>Change Email</p>
          <p className='text-white'>Change Password</p>
          <p className='text-white'>Change Date of Birth</p>
          <p className='text-white'>Upload Profile Photo</p>
          <div className='flex justify-end items-end h-96'>
          <button onClick={logout} className='bg-black text-white border w-20 h-10 mb-2 mr-6 border-white'>Logout</button>
          </div>
        </div>
      </div>
    </div>
  </>
  )
}
export default Settings