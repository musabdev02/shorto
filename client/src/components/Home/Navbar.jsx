import React from 'react'
import { Link } from 'react-router-dom'
// compoennts
import Button from '../UI/Button'
// helper
import { logoutRq } from '../../helper'
const Navbar = () => {
    const isLoggedIn = localStorage.getItem("isLoggedIn");
    const name = localStorage.getItem("name");



    return (
        <div className='fixed left-0 top-0 z-50 border-b border-gray-200 bg-transparent backdrop-blur-md w-full'>
            <div className='max-w-6xl mx-auto px-4 h-[3.5rem] flex items-center'>
                <div className='flex items-center justify-between w-full'>
                    {/* logo */}
                    <Link to={"/"} className='flex items-center gap-2'>
                        <div className='rounded-md h-7 w-7 shadow-sm bg-white'>
                            <img src="/logo.svg" alt="logo" className='w-full h-full' />
                        </div>
                        <h3 className='font-medium text-lg'>Shorto</h3>
                    </Link>
                    {/* cta */}
                    <div className='flex items-center gap-2'>
                        {
                            isLoggedIn ? 
                            <>
                            <p className='text-sm text-gray-700'>Welcome Back! <span className='text-yellow-700'>{name}</span></p>
                            <span onClick={logoutRq} ><Button type={"primary"} content={"Logout"} /></span>
                            </>
                            :
                            <>
                            <Link to={"/login"}><Button type={"primary"} content={"Sign in"} /></Link>
                            <Link to={"/register"} className='hidden sm:block'><Button type={"secondary"} content={"Sign up"} /></Link> 
                            </>
                        }
                       
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar