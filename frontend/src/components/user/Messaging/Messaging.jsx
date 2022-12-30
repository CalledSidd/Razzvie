import React from 'react'

const Messaging = () => {
  return (
    <>
      <div className='flex w-4/5 ml-48 mt-5 h-screen max-h-[690px] border-2 border-gray-500 '>
        <div className='w-2/6 h-full content-center border-2 border-gray-500 border-t-0 border-l-0 border-b-0'>
          <div className='h-full w-full'>
            <div className=' w-auto h-12 bg-black'>
              <h1 className='text-white text-center font-mono text-xl pt-2'>WLOP</h1>
            </div>
          </div>
        </div>
        <div className='w-4/6 '>
          <div className=' w-auto h-12 bg-black'>
            <h1 className='text-white text-center font-mono text-xl pt-2'>CHAT</h1>
          </div>
        </div>
      </div>
    </>
  )
}

export default Messaging