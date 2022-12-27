import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
    return (
        <>
            <div className='w-full shadow-md sticky top-0 left-0'>
                <div className='md:flex item-end justify-end bg-black py-6 md:px-10 px-7 relative'>
                    <Link to=''>
                    <div className='font-bold text-lg cursor-pointer flex items-center text-gray-700'>
                        <div className='text-white font-mono hover:text-gray-500'>
                            Razzvie
                        </div>
                    </div>
                    </Link>
                </div>
            </div>
        </>
    )
}

export default Nav