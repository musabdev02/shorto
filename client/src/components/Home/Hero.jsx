import React from 'react'
import { Link } from 'react-router-dom';
import Button from '../UI/Button';
import Url from './Hero/Url'


const Hero = () => {
    const isLoggedIn = localStorage.getItem("isLoggedIn");
    return (
        <div className='w-full'>
            <div className='max-w-6xl p-4 mx-auto'>
                <div className='h-[80vh] flex justify-center flex-col w-full'>
                    {/* content */}
                    <div className='text-center mx-auto sm:w-[50%]'>
                        <h1 className='text-3xl sm:text-5xl font-semibold'>Simplify Links Like</h1>
                        <h2 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-[#9c40ff] via-[#ffaa40] to-[#ffaa40] bg-clip-text text-transparent">
                            Magic!
                        </h2>
                        <p className='mt-4 sm:mt-6 leading-4 sm:leading-5 text-zinc-700 text-sm sm:text-md'>Shorto is an efficient and easy-to-use URL shortening service that streamlines your online experience.</p>
                        {
                            isLoggedIn ? <Link to={"/dashboard"} className='w-fit mx-auto flex mt-4'><Button type={"secondary"} content={"Dashboard"} /></Link>:
                            <>
                             <Url />
                             <p className='mt-2 text-xs text-red-700'>Registor to take full control over your links*</p>
                            </>
                        }
                       
                       
                    </div>
                    <div className='mt-20'>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero