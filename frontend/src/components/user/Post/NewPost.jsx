import React,{useContext, useState} from 'react'
import axios from 'axios';
import AuthContext from '../../../context/AuthContext';
import {IoMdPhotos} from "react-icons/io"
import { useNavigate } from 'react-router-dom';


const NewPost = () => {
    let { user, authTokens } = useContext(AuthContext)
    const [imgPreview, setImgPreview] = useState("")
    const baseUrl = 'http://localhost:8000/'
    const [postData, setPostData] = useState({
        title: "",
        image: "",
        user: user.user_id,
    })
    const navigate = useNavigate();
    const handlePostChange = (e) => {
        setPostData({
            ...postData,
            [e.target.name]: e.target.value,
        });
    };
    const handlePostImage = (e) => {
        setImgPreview({
            ...imgPreview,
            image: e.target.files[0]
        });
        setImgPreview(URL.createObjectURL(e.target.files[0]));
        setPostData({
            ...postData,
            image: e.target.files[0],
        });
    };
    const upload = async (e) => {
        e.preventDefault();
        console.log("this is newpost")
            await axios.post(`${baseUrl}newpost`, postData , {
                headers: {
                    Authorization: `Bearer ${authTokens.access}`,
                    "Content-Type": "multipart/form-data"
                },
            }).then((response) => {
                if (response) {
                    console.log(response.data)
                    navigate('/')
                }
            }).catch((err) => {
                console.log(err)
            }); 
        }
    
    return (
        <div>
            <div id="popup-modal"
                tabindex="-1"
                className="overflow-y-auto ml-32  fixed top-0 right-0 left-0 z-50 md:inset-0 h-full justify-center items-center"
                aria-hidden="true"
            >
                <div className="relative ml-96 mt-24 w-full max-w-md h-full md:h-auto">
                    <div className="absolute">
                        <form onSubmit={upload}>
                            <div className="p-6 text-center">
                                {imgPreview ? (
                                    <img src={imgPreview} alt="post image" />
                                ) : (
                                    <h1 className="mb-5 text-3xl font-normal underline text-gray-500 dark:text-gray-400 px-24 ">
                                        <IoMdPhotos size="300px" />
                                    </h1>
                                )}
                                <div className="pl-2 flex flex-row gap-5">
                                    <textarea
                                        id="caption-address"
                                        name="title"
                                        type="text"
                                        placeholder="Add Caption to the post"
                                        onChange={handlePostChange}
                                        autocomplete="text"
                                        required
                                        className="h-18 rounded-xl block w-full appearance-none  border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                                    />

                                    <label
                                        htmlFor="fileUpload"
                                        className="w-44 text-center text-white bg-blue-600 hover:bg-blue-400 font-medium rounded-lg text-sm py-2.5 px-5"
                                    >Upload Image
                                    </label>
                                    <input
                                        id="fileUpload"
                                        name="image"
                                        type="file"
                                        placeholder="imageupload"
                                        onChange={handlePostImage}
                                        autocomplete=""
                                        accept='.jpg, .png, .webp'
                                        required
                                        className="hidden h-10 bg-white relative rounded-xl  w-full appearance-none  border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                                    />
                                </div>
                                <button
                                    data-modal-toggle="popup-modal"
                                    type="submit"
                                    className=" text-white bg-blue-600 hover:bg-blue-400 focus:ring-4  font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center mr-2 mt-24"
                                >
                                    Upload Post
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NewPost
