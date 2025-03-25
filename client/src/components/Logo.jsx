import React from 'react'
import { Link } from 'react-router-dom'
const Logo = () => {
    return (
        <Link to={"/"} className='flex items-center justify-center gap-2 h-24'>
            <div className='rounded-md h-8 w-8 shadow-sm bg-white'>
                <img src="/logo.svg" alt="logo" className='w-full h-full' />
            </div>
            <h3 className='font-medium text-xl'>Shorto</h3>
        </Link>
    )
}

export default Logo