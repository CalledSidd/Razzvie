import React, { useContext, useState } from 'react'
import { HiOutlineHome } from "react-icons/hi";
import { RiAddCircleLine } from "react-icons/ri";
import { BiMessageRounded } from "react-icons/bi";
import { AiOutlineHeart, AiOutlineUser, AiOutlineCompass } from "react-icons/ai";
import { IoSettingsOutline } from "react-icons/io5";
import { NavLink, useNavigate } from 'react-router-dom';
import {IoMdPhotos} from "react-icons/io"
import  Axios from 'axios';
import AuthContext from '../../../context/AuthContext';

const Sidebar = () => {
    let {user, authTokens} = useContext(AuthContext)
    const baseUrl = 'http://localhost:8000/'
    const [modalPost, setModalPost] = useState(false)
    const [postData, setPostData] = useState({
        title: "",
        image: "",
        user: user.user_id,
    })
    const [imgPreview, setImgPreview] = useState("")

    const handlePostChange = (e) => {
        setPostData({
            ...postData,
            [e.target.name] : e.target.value,
        });
    };
    const handlePostImage = (e) => {
        setImgPreview({
            ...imgPreview,
            post_image: e.target.files[0]
        });
        setImgPreview(URL.createObjectURL(e.target.files[0]));
        setPostData({
            ...postData,
            post_image: e.target.file[0],
        });
    };
    const newpost = (e) => {
        e.PreventDefault();
        console.log(postData)
        console.log("this is newpost")
        try {
            Axios.post(baseUrl + "newpost", postData, {
                headers: {
                    Authorization: `Bearer ${authTokens.access}`,
                    'Content-Type': "multipart/form-data"
                },
            }).then((response) => {
                if (response) {
                    console.log(response.data)
                    setModalPost(!modalPost)
                }
            }).catch((err) => {
                console.log(err)
            });
        } catch (error) {
            console.log(error)
        }
    }




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
                            <p className='text-white pl-8 text-xl  hover:text-cyan-400'><AiOutlineHeart /></p>
                        </li>
                    
                    <li className="relative pt-12" onClick={() => setModalPost(!modalPost)}>
                        <p className='text-white pl-8 text-xl  hover:text-cyan-400'><RiAddCircleLine /></p>
                    </li>

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

            {/* Modal */}
            {modalPost && (
                <div
                    id="popup-modal"
                    tabindex="-1"
                    class="overflow-y-auto ml-32  fixed top-0 right-0 left-0 z-50 md:inset-0 h-modal md:h-full justify-center items-center"
                    aria-hidden="true"
                >
                    <div class="relative ml-96 mt-52 w-full max-w-md h-full md:h-auto">
                        <div class="relative bg-white rounded-lg shadow ">
                            <form action="" onSubmit={newpost}>
                                <button
                                    onClick={() => {
                                        setModalPost(!modalPost);
                                    }}
                                    type="button"
                                    class="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white"
                                    data-modal-toggle="popup-modal"
                                >
                                    <svg
                                        aria-hidden="true"
                                        class="w-5 h-5"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            fill-rule="evenodd"
                                            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                            clip-rule="evenodd"
                                        ></path>
                                    </svg>
                                    <span class="sr-only">Close modal</span>
                                </button>
                                <div class="p-6 text-center">
                                    {imgPreview ? (
                                        <img src={imgPreview} alt="post image" />
                                    ) : (
                                        <h1 class="mb-5 text-3xl font-normal underline text-gray-500 dark:text-gray-400 px-24 ">
                                            <IoMdPhotos size="200px" />
                                        </h1>
                                    )}
                                    <div className="pl-16 flex flex-col">
                                        <textarea
                                            id="caption-address"
                                            name="caption"
                                            type="text"
                                            placeholder="Add Caption to the post"
                                            onChange={handlePostChange}
                                            autocomplete="text"
                                            class=" w-5/6 h-20 relative rounded-xl block w-full appearance-none  border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                                        />

                                        <label
                                            htmlFor="fileUpload"
                                            class="w-3/4 ml-4 text-center text-white bg-indigo-600 hover:bg-indigo-700  font-medium rounded-lg text-sm  px-5 py-2 mt-2"
                                        >
                                            Upload Image
                                        </label>
                                        <input
                                            id="fileUpload"
                                            name="post_image"
                                            type="file"
                                            placeholder="imageupload"
                                            onChange={handlePostImage}
                                            autocomplete=""
                                            required
                                            class="hidden w-5/6 h-10 bg-white relative rounded-xl block w-full appearance-none  border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                                        />
                                    </div>
                                    <button
                                        data-modal-toggle="popup-modal"
                                        type="submit"
                                        class="text-white bg-indigo-600 hover:bg-indigo-700 focus:ring-4  font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center mr-2 mt-2"
                                    >
                                        Upload Post
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            )}

            {/* End Modal */}
        </>
    )
}

export default Sidebar