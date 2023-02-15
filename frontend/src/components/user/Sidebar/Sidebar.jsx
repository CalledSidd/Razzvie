import React, { useContext, useState } from 'react'
import { HiOutlineHome } from "react-icons/hi";
import { RiAddCircleLine } from "react-icons/ri";
import { BiMessageRounded } from "react-icons/bi";
import { AiOutlineHeart, AiOutlineUser, AiOutlineCompass } from "react-icons/ai";
import { IoSettingsOutline } from "react-icons/io5";
import { NavLink, useNavigate } from 'react-router-dom';



const Sidebar = () => {
    const [showModal, setShowModal] = React.useState(false);
    return (
        <>
            <div className="w-20 h-screen shadow-md bg-black fixed">
                <ul className="relative">
                    <li className="relative pt-12">
                        <NavLink className='no-underline' to=''>
                            <p className='text-white pl-8 text-xl  hover:text-cyan-400'><HiOutlineHome /></p>
                        </NavLink>
                    </li>
                    <NavLink className='no-underline' to='/messaging'>
                        <li class="relative pt-12">
                            <p className='text-white pl-8 text-xl hover:text-cyan-400'><BiMessageRounded /></p>
                        </li>
                    </NavLink>

                    <li className="relative pt-12">
                        <p className='text-white pl-8 text-xl  hover:text-cyan-400' onClick={() => setShowModal(true)}><AiOutlineHeart /></p>
                    </li>

                    <NavLink className='no-underline' to='/add-new-post' >
                        <li className="relative pt-12" >
                            <p className='text-white pl-8 text-xl  hover:text-cyan-400'><RiAddCircleLine /></p>
                        </li>
                    </NavLink>
                    <NavLink className='no-underline' to='/explore' >
                        <li className="relative pt-12">
                            <p className='text-white pl-8 text-xl  hover:text-cyan-400'><AiOutlineCompass /></p>
                        </li>
                    </NavLink>
                    <NavLink className='no-underline' to='/profile  '>
                        <li className="relative pt-12">
                            <p className='text-white pl-8 text-xl  hover:text-cyan-400'><AiOutlineUser /></p>
                        </li>
                    </NavLink>
                    <NavLink className='no-underline' to='/settings'>
                        <li className="relative pt-12">
                            <p className='text-white pl-8 text-xl  hover:text-cyan-400'><IoSettingsOutline /></p>
                        </li>
                    </NavLink>
                </ul>
            </div>
            {showModal &&
                <>
                    <div
                        className="justify-start ml-28 mt-20 flex backdrop-blur-sm overflow-x-hidden  overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                        <div className="fixed w-auto my-6 mx-auto max-w-xl bg-black ">
                            <div className="border-2 rounded-lg shadow-lg relative flex flex-col w-full outline-none focus:outline-none">
                                <div className="flex items-start justify-between p-5 border-b border-solid  border-slate-200 rounded-t">
                                    <h6 className="text-xl font-semibold text-white">
                                        Notifications
                                    </h6>
                                    <button
                                        className="p-1 ml-auto bg-transparent border-0 text-white opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                                        onClick={() => setShowModal(false)}>
                                    </button>
                                </div>
                                <div className="relative p-6 flex-auto ">
                                    
                                </div>
                                <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                                    <button
                                        className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                        type="button"
                                        onClick={() => setShowModal(false)}>
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

export default Sidebar