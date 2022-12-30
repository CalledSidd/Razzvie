import React, { useContext } from 'react'
import AuthContext from '../../../context/AuthContext'

const Settings = () => {
  let {user, logout} = useContext(AuthContext)
  return (
    <>
    <div className='flex w-4/5 ml-48'>
      <div className='w-full h-full content-center'>
        <div className='h-full ml-24'>
          <h1 className='text-white text-2xl text-center'>Settings</h1>

          <button onClick={logout} className='bg-black text-white'>Logout</button>
        </div>
      </div>
    </div>
  </>
  )
}

export default Settings