import React from 'react'
import { HiOutlineHome } from "react-icons/hi";
import { RiAddCircleLine } from "react-icons/ri";
import { BiMessageRounded } from "react-icons/bi";
import { AiOutlineHeart, AiOutlineUser,AiOutlineCompass } from "react-icons/ai";
import { IoSettingsOutline } from "react-icons/io5";
import { NavLink } from 'react-router-dom';
import Notifications from '../Notifications/Notifications';

const Sidebar = () => {
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
                    <NavLink className='no-underline'  >
                    <li className="relative pt-12" onClick={ <Notifications/>}>
                        <p className='text-white pl-8 text-xl  hover:text-cyan-400'><AiOutlineHeart /></p>
                    </li>
                    </NavLink>
                    <NavLink className='no-underline' to='/add-new-post'>
                    <li className="relative pt-12">
                        <p className='text-white pl-8 text-xl  hover:text-cyan-400'><RiAddCircleLine /></p>
                    </li>
                    </NavLink>
                    <NavLink className='no-underline' to='/wallet' >
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
        </>
    )
}

export default Sidebar