import React from 'react'
// compoennts
import Button from '../UI/Button'
const Navbar = () => {
    return (
        <div className='fixed left-0 top-0 z-50 border-b border-gray-200 bg-transparent backdrop-blur-md w-full'>
            <div className='max-w-6xl mx-auto px-4 h-[3.5rem] flex items-center'>
                <div className='flex items-center justify-between w-full'>
                    {/* logo */}
                    <div className='flex items-center gap-2'>
                        <div className='rounded-md h-7 w-7 shadow-sm bg-white'>
                            <img src="/logo.svg" alt="logo" className='w-full h-full' />
                        </div>
                        <h3 className='font-medium text-lg'>Shorto</h3>
                    </div>
                    {/* cta */}
                    <div className='flex items-center gap-2'>
                        <Button type={"primary"} />
                        <Button type={"secondary"} content={"Sign up"} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar