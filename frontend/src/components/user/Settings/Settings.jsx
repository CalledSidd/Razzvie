import React, { useContext, useState } from 'react'
import AuthContext from '../../../context/AuthContext'

const Settings = () => {
  let { user, logout } = useContext(AuthContext)
  const {userModal, setUserModal} = useState(false)
  return (
    <>
      <div className='w-4/5 ml-48 '>
        <div className='w-full h-full content-center'>
          <div className='w-60 h-9 mt-8 border border-white rounded-lg ml-12'>
            <label className='text-white p-12 align-middle'>Change Username</label>
          </div>
          <div className='w-60 h-9 mt-8 border border-white rounded-lg ml-12'>
            <label className='text-white p-12 align-middle'>Change Email</label>
          </div>
          <div className='w-60 h-9 mt-8 border border-white rounded-lg ml-12'>
            <label className='text-white p-12 align-middle'>Change Password</label>
          </div>
          <div className='w-60 h-9 border mt-8 border-red-600 text-red-600 rounded-lg hover:bg-red-600 hover:text-white ml-12'>
            <label className= 'p-12 align-middle'>Deactivate account</label>
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