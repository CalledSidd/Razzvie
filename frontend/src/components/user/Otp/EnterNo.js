import React from 'react'

const EnterNo = () => {
    return (
        <div className='bg-white min-h-screen'>
            <div className="relative flex flex-col justify-center min-h-screen overflow-hidden">
                <div className="w-full p-6 m-auto bg-white rounded-md  lg:max-w-xl">
                    <h1 className="text-3xl font-semibold text-center text-black ">
                        OTP Verification
                    </h1>
                    <form className="mt-6">
                        <div className="mb-2">
                            <label for="email" className="block text-sm font-semibold text-gray-800"> Enter Phone Number </label>
                            <input type="email" className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40" />
                        </div>
                        <div className="mt-6">
                            <button className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-black rounded-md hover:bg--600 focus:outline-none focus:bg-purple-600">
                                Send
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default EnterNo