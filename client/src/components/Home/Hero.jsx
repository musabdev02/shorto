import React from 'react'
// icons
import { FaLink } from "react-icons/fa6";

import Button from '../UI/Button';
const Hero = () => {
    return (
        <div className='w-full'>
            <div className='max-w-6xl p-4 mx-auto'>
                <div className='h-[80vh] flex justify-center flex-col w-full'>
                    {/* content */}
                    <div className='text-center mx-auto w-[50%]'>
                        <h1 className='text-5xl font-semibold'>Simplify Links Like</h1>
                        <h2 className="text-5xl font-bold bg-gradient-to-r from-[#9c40ff] via-[#ffaa40] to-[#ffaa40] bg-clip-text text-transparent">
                            Magic!
                        </h2>
                        <p className='mt-6 leading-5 text-zinc-700'>Shorto is an efficient and easy-to-use URL shortening service that streamlines your online experience.</p>
                        <div className='w-full border border-gray-200 mt-4 h-12 rounded-md bg-white shadow-xs flex items-center justify-between px-2'>
                            <div className='px-2 flex items-center gap-4 w-[90%]'>
                                <span className='text-gray-600'><FaLink /></span>
                                <input type="text" placeholder='Enter your link here...' className='outline-none w-full' />
                            </div>
                            <Button type={"secondary"} />
                        </div>
                        <p className='mt-2 text-xs text-red-700'>Registor to take full control over your links*</p>
                    </div>
                    <div className='mt-20'>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero