import React from 'react'
import { Link } from 'react-router-dom'

const Signup = () => {
    return (
        <div className='bg-white min-h-screen'>
            <div className="relative flex flex-col  justify-center min-h-screen overflow-hidden ">
                <div className="w-full p-6 m-auto bg-white rounded-md shadow-xl  lg:max-w-xl">
                    <h1 className="text-3xl font-semibold text-center text-black ">
                        Signup
                    </h1>
                    <form className="mt-6">
                        <div className="mb-2">
                            <label for="email" className="block text-sm font-semibold text-gray-800"> Full Name </label>
                            <input type="email" className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"/>
                        </div>
                        <div className="mb-2">
                            <label for="email" className="block text-sm font-semibold text-gray-800"> Username </label>
                            <input type="email" className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"/>
                        </div>
                        <div className="mb-2">
                            <label for="email" className="block text-sm font-semibold text-gray-800"> Email </label>
                            <input type="email" className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"/>
                        </div>
                        <div className="mb-2">
                            <label for="email" className="block text-sm font-semibold text-gray-800"> Phone </label>
                            <input type="email" className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"/>
                        </div>
                        <div className="mb-2">
                            <label for="password" className="block text-sm font-semibold text-gray-800">Password</label>
                            <input type="password" className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"/>
                        </div>
                        <div className="mb-2">
                            <label for="password" className="block text-sm font-semibold text-gray-800">Confirm Password</label>
                            <input type="password" className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"/>
                        </div>
                        <div className="mt-6">
                            <button className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-black rounded-md hover:bg--600 focus:outline-none focus:bg-purple-600">
                                Signup
                            </button>
                        </div>
                    </form>
                    
                    <p className="mt-8 text-xs font-light text-center text-gray-700">
                        {" "}
                        Already have an account?{" "}
                        <Link to='/login'>
                        <p className="font-medium text-black-600 hover:underline">
                            Login
                        </p>
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Signup