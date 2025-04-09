import React from 'react'
const siteName = import.meta.env.VITE_SITE_NAME;
import { useLocation } from 'react-router-dom';
// icons
import { IoMdLink } from "react-icons/io";
// compoents
import Button from '../components/UI/Button';
import Rlr from '../components/Rlr';
// alert
import { useAlert } from '../contexts/Alert';
const Shortener = () => {
    const { state } = useLocation();
    const { showAlert } = useAlert();
    
    const copyToClipboard = (text) => {
        navigator.clipboard.writeText(text);
        showAlert("Copied to clipboard!", "success")
    };
    return (
        <Rlr>
            <div className='sm:w-[50%] text-center'>
                <h3 className='text-3xl sm:text-5xl font-semibold'>Your Shortener Link.</h3>
                <p className='mt-3 sm:w-[80%] mx-auto text-gray-600 leading-4 sm:leading-5 text-sm md:text-md'>
                    Copy the short link and share it in messages, texts, posts, websites and other locations.
                </p>
                <div className='w-full border border-gray-200 mt-4 h-12 rounded-md bg-white shadow-xs flex items-center justify-between px-2'>
                    <div className='px-2 flex items-center gap-4 w-[90%]'>
                        <span className='text-gray-600'><IoMdLink /></span>
                        <input type="text" readOnly={true} value={`${siteName}/${state.shortId}`} className='outline-none w-full cursor-pointer text-gray-700 text-sm sm:text-md' />
                    </div>
                  <span onClick={() => copyToClipboard(`${siteName}/${state.shortId}`)}><Button type={"primary"} content={"Copy"} /></span>
                </div>
                <div className='text-left mt-4'>
                    <h3 className='text-gray-600 text-sm sm:text-md'>Original Link: <span className='text-blue-400 hover:underline cursor-pointer'>{state.originalUrl}</span></h3>
                    <p className='mt-7 text-xs sm:text-sm text-gray-600 text-center'>
                        <span className='text-yellow-800'>Important: </span> Anonymously generated short links are only valid for 7 days. After that, they are automatically deleted. To manage these and other links, please register first.</p>
                </div>
            </div>
        </Rlr>

    )
}

export default Shortener