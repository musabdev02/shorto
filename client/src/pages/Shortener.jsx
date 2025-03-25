import React from 'react'
// icons
import { IoMdLink } from "react-icons/io";
// compoents
import Button from '../components/UI/Button';
import Logo from '../components/Logo';

const Shortener = () => {
    return (
        <div>
            <div className='max-w-6xl mx-auto px-4'>
                <Logo />
                <div className='w-full h-[70vh] flex items-center justify-center'>
                    <div className='w-[50%] text-center'>
                        <h3 className='text-5xl font-semibold'>Your Shortener Link.</h3>
                        <p className='mt-3 w-[80%] mx-auto text-gray-600 leading-5'>
                            Copy the short link and share it in messages, texts, posts, websites and other locations.
                        </p>
                        <div className='w-full border border-gray-200 mt-4 h-12 rounded-md bg-white shadow-xs flex items-center justify-between px-2'>
                            <div className='px-2 flex items-center gap-4 w-[90%]'>
                                <span className='text-gray-600'><IoMdLink /></span>
                                <input type="text" readOnly={true} value={"https://example.com"} className='outline-none w-full cursor-pointer text-gray-700' />
                            </div>
                            <Button type={"primary"} content={"Copy"} />
                        </div>
                        <div className='text-left mt-4'>
                            <h3 className='text-gray-600'>Original Link: <span className='text-blue-400 hover:underline cursor-pointer'>https://www.linkedin.com</span></h3>
                            <p className='mt-7 text-sm text-gray-600 text-center'>
                                <span className='text-yellow-800'>Important:</span> Anonoymously generated shorts links has only 7 days life after 7 they automatically deleted you control over this and others links register first.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Shortener