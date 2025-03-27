import React from 'react'
// component
import { DropMenu, useDropdown } from "../../UI/Dropdown"

// icons
import { FaRegCopy } from "react-icons/fa6";
import { IoIosReturnRight } from "react-icons/io";
import { TbBrandGoogleAnalytics } from "react-icons/tb";
import { SlOptionsVertical } from "react-icons/sl";
import { IoIosLink } from "react-icons/io";
import { FaRegEdit } from "react-icons/fa";
import { MdDeleteOutline } from "react-icons/md";

const Link = ({ gridLayout }) => {
    const { isOpen, toggleDropdown, dropdownRef } = useDropdown();

    const menuOptions = [
         { label: "Edit", icon: <FaRegEdit />, onClick: () => alert("Grid Layout Clicked") },,
         { label: "Copy link", icon: <IoIosLink />, onClick: () => alert("Grid Layout Clicked") },
         { label: "Delete", icon: <MdDeleteOutline />, onClick: () => alert("Grid Layout Clicked") },
    ]
    return (
        <div className={`flex ${gridLayout ? "w-[48%]" : "w-full"} flex-row space-y-0 rounded-lg p-4 transition-all hover:shadow-[0_20px_35px_-15px_rgba(0,0,0,0.1)] items-center border border-gray-300 justify-between`}>
            <div className='flex items-center gap-4'>
                <div className='h-8 w-8 flex items-center justify-center rounded-lg p-1 border-gray-300 overflow-hidden border bg-gray-50'>
                    <img src="https://t3.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=http://linkedin.com&size=64" alt="icon" className='w-full h-full' />
                </div>
                <div className='flex flex-col gap-2'>
                    <div className='flex items-center gap-1'>
                        <h3 className='text-sm text-gray-900 font-medium'>localhost/RGo9DeH</h3>
                        <span className='cursor-pointer text-sm text-gray-700'><FaRegCopy /></span>
                    </div>
                    <div className='flex items-center gap-1 text-gray-600'>
                        <span className='text-lg'><IoIosReturnRight /></span>
                        <h3 className='text-sm'>https://linkedin.com</h3>
                    </div>
                </div>
            </div>
            <div className='flex items-center gap-1'>
                <div className='flex items-center gap-1 text-gray-700 bg-gray-100 border border-gray-200 py-1 px-3 hover:shadow-sm cursor-pointer rounded-lg'>
                    <span className='text-sm'><TbBrandGoogleAnalytics /></span>
                    <h3 className='text-sm'>0 Clicks</h3>
                </div>
                <span className='text-gray-700 cursor-pointer text-sm' onClick={toggleDropdown}><SlOptionsVertical /></span>
               <DropMenu isOpen={isOpen} dropdownRef={dropdownRef} options={menuOptions} />
            </div>
        </div>
    )
}

export default Link