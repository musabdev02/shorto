import React from 'react'

const Navbar = () => {
    return (
        <div>
            <div className='flex items-center gap-2'>
                <div className='rounded-md h-7 w-7 shadow-sm bg-white'>
                    <img src="/logo.svg" alt="logo" className='w-full h-full'/>
                </div>
                <h3 className='font-medium text-lg'>Shorto</h3>
            </div>
        </div>
    )
}

export default Navbar