import axios from 'axios'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Signup = () => {
    const navigete                 = useNavigate()
    const [name, setName]          = useState("")
    const [username, setUsername]  = useState("")
    const [email, setEmail]        = useState("")
    const [phone, setPhone]        = useState("")
    const [state, setState]        = useState("")
    const [password, setPassword]  = useState("")
    const [password2, setPassword2]= useState("")
    console.log(state)
    let Signup = async (e) => {
        e.preventDefault()
        if (password.length < 3) {
            alert("there must be a password")
        }
        else if(password !== password2 ){
            alert("Wrong Passwords")
        }
        else{
            await axios.post("http://127.0.0.1:8000/account/signup", {
            "name"     : name,
            "username" : username,
            "email"    : email,
            "phone"    : phone,
            "state"    : state,
            "password" : password
            
        }).then((response)=>{
            console.log(response)
            if(response.data === 200){
                navigete('')
            }
        })
    }
    }
    return (
        <div className='bg-white min-h-screen'>
            <div className="relative flex flex-col  justify-center min-h-screen overflow-hidden ">
            <h1 className='text-5xl text-center mt-36 font-mono text-black'>Razzvie</h1>
                <div className="w-full p-6 m-auto bg-white rounded-md shadow-xl  lg:max-w-xl">
                    <h1 className="text-3xl font-semibold text-center text-black ">
                        Signup
                    </h1>
                    <form className="mt-6" onSubmit={Signup}>
                        <div className="mb-2">
                            <label for="email" className="block text-sm font-semibold text-gray-800"> Full Name </label>
                            <input type="text" onChange={(e)=>{
                                setName(e.target.value)
                            }
                            } className="block w-full px-4 py-2 mt-2 text-black bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40" />
                        </div>
                        <div className="mb-2">
                            <label for="email" className="block text-sm font-semibold text-gray-800"> Username </label>
                            <input type="text" onChange={(e)=>{
                                setUsername(e.target.value)
                            }} className="block w-full px-4 py-2 mt-2 text-black bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40" />
                        </div>
                        <div className="mb-2">
                            <label for="email" className="block text-sm font-semibold text-gray-800"> Email </label>
                            <input type="email" onChange={(e)=>{
                                setEmail(e.target.value)
                            }} className="block w-full px-4 py-2 mt-2 text-black bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40" />
                        </div>
                        <div className="mb-2">
                            <label for="email" className="block text-sm font-semibold text-gray-800"> Phone </label>
                            <input type="number" onChange={(e)=>{
                                setPhone(e.target.value)
                            }} className="block w-full px-4 py-2 mt-2 text-black bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40" />
                        </div>
                        <div className="mb-2">
                            <label for="" className="block text-sm font-semibold text-gray-800">State</label>
                            <select type="password" onChange={(e)=>{
                                setState(e.target.value)
                            }} className="block w-full px-4 py-2 mt-2 text-black bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40">
                                <option selected disabled>Select a State</option>
                                <option value='Punjab'>Punjab</option>
                                <option value='Assam'>Assam</option>
                                <option value='Bihar'>Bihar</option>
                                <option value='Mizoram'>Mizoram</option>
                                <option value='Goa'>Goa</option>
                                <option value='Tamil Nadu'>Tamil Nadu</option>
                                <option value='Maharashtra'>Maharashtra</option>
                                <option value='Uttar Pradesh'>Uttar Pradesh</option>
                                <option value='Nagaland'>Nagaland</option>
                                <option value='Telangana'>Telangana</option>
                                <option value='Andhra Pradesh'>Andhra Pradesh</option>
                                <option value='Arunachal Pradesh'>Arunachal Pradesh</option>
                                <option value='Himachal Pradesh'>Himachal Pradesh</option>
                                <option value='Madhya Pradesh'>Madhya Pradesh</option>
                                <option value='Haryana'>Haryana</option>
                                <option value='Odisha'>Odisha</option>
                                <option value='Kerala'>Kerala</option>
                                <option value='Sikkim'>Sikkim</option>
                                <option value='Jharkhand'>Jharkhand</option>
                                <option value='Delhi'>Delhi</option>
                                <option value='Karnataka'>Karnataka</option>
                                <option value='Tripura'>Tripura</option>
                                <option value='Manipur'>Manipur</option>
                                <option value='Gujarat'>Gujarat</option>
                                <option value='West Bengal'>West Bengal</option>
                                <option value='Chhattisgarh'>Chhattisgarh</option>
                                <option value='Rajasthan'>Rajasthan</option>
                                <option value='Meghalaya'>Meghalaya</option>
                                <option value='Uttarakhand'>Uttarakhand</option>
                                <option value='Jammu & Kashmir'>Jammu & Kashmir</option>
                            </select>
                        </div>
                        <div className="mb-2">
                            <label for="password" className="block text-sm font-semibold text-gray-800">Password</label>
                            <input type="password" onChange={(e)=>{
                                setPassword(e.target.value)
                            }} className="block w-full px-4 py-2 mt-2 text-black bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40" />
                        </div>
                        <div className="mb-2">
                            <label for="password" className="block text-sm font-semibold text-gray-800">Confirm Password</label>
                            <input type="password" onChange={(e)=>{
                                setPassword2(e.target.value)
                            }} className="block w-full px-4 py-2 mt-2 text-black bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40" />
                        </div>
                        <div className="mt-6">
                            <button className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-black rounded-md hover:bg--600 ">
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