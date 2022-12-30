import React from 'react'

const Notifications = ({ dataa }) => {
  console.log(dataa, "this is data passed from home,,,,, ")
  const [showModal, setShowModal] = React.useState(true);
  return (
    <>
      {showModal && 
        <>
          <div
            className="justify-start ml-28 mt-20 flex backdrop-blur-sm overflow-x-hidden  overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
          >
            <div className="fixed w-auto my-6 mx-auto max-w-xl bg-black ">
              {/*content*/}
              <div className="border-2 rounded-lg shadow-lg relative flex flex-col w-full outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid  border-slate-200 rounded-t">
                  <h6 className="text-xl font-semibold text-white">
                    Notifications
                  </h6>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-white opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    
                  </button>
                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto ">
                  <p className="my-4 text-white text-lg leading-relaxed">
                    I always felt like I could do anything. That’s the main
                    thing people are controlled by! Thoughts- their perception
                    of themselves! They're slowed down by their perception of
                    themselves. If you're taught you can’t do anything, you
                    won’t do anything. I was taught I could do everything.
                  </p>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}

                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      }   
    </>
  )
}

export default Notifications