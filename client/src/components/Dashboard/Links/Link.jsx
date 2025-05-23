import React from 'react'
const siteName = import.meta.env.VITE_SITE_NAME;
import { useNavigate } from 'react-router-dom';
// component
import { DropMenu, useDropdown } from "../../UI/Dropdown"
import { useAlert } from '../../../contexts/Alert';
// icons
import { FaRegCopy } from "react-icons/fa6";
import { IoIosReturnRight } from "react-icons/io";
import { TbBrandGoogleAnalytics } from "react-icons/tb";
import { SlOptionsVertical } from "react-icons/sl";
import { IoIosLink } from "react-icons/io";
import { MdDeleteOutline } from "react-icons/md";
// helper
import { deletelink, truncate } from '../../../helper';
const Link = ({ gridLayout, item, callback }) => {
    const { showAlert } = useAlert();
    const { isOpen, toggleDropdown, dropdownRef } = useDropdown();
    const navigate = useNavigate();

    const menuOptions = [
         { label: "View Analytics", icon: <TbBrandGoogleAnalytics />, onClick: () => navigate("/dashboard/analytics") },
         { label: "Copy link", icon: <IoIosLink />, onClick: () => copyToClipboard(`${siteName}/${item.shortId}`) },
         { label: "Delete", icon: <MdDeleteOutline />, onClick: () => removeLink() },
    ];
    const copyToClipboard = (text) => {
        navigator.clipboard.writeText(text);
        showAlert("Copied to clipboard!", "success");
        if(isOpen){toggleDropdown()};
    };
    const removeLink = () => {
        deletelink(item._id, callback);
        showAlert("Link Deleted Sucessfully", "success");
        toggleDropdown();
    };

    return (
        <div className={`flex ${gridLayout ? "w-[48%]" : "w-full"} flex-row space-y-0 rounded-lg p-4 transition-all hover:shadow-[0_20px_35px_-15px_rgba(0,0,0,0.1)] items-center border border-gray-300 justify-between`}>
            <div className='flex items-center gap-4'>
                <div className='flex h-8 w-8 items-center justify-center rounded-lg p-1 border-gray-300 overflow-hidden border bg-gray-50'>
                    <img src={`https://www.google.com/s2/favicons?sz=64&domain_url=${item.redirectUrl}`} alt="icon" className='w-full h-full' />
                </div>
                <div className='flex flex-col gap-2'>
                    <div className='flex items-center gap-1'>
                        <h3 className='text-sm text-gray-900 font-medium'>{siteName}/{item.shortId}</h3>
                        <span className='cursor-pointer text-sm text-gray-700'
                         onClick={() => copyToClipboard(`${siteName}/${item.shortId}`)}
                         ><FaRegCopy /></span>
                         <p className='text-xs text-zinc-700 ml-2'>{item?.comment}</p>
                    </div>
                    <div className='flex items-center gap-1 text-gray-600'>
                        <span className='text-lg'><IoIosReturnRight /></span>
                        <h3 className='text-sm'>{truncate(item.redirectUrl, 24)} </h3>
                    </div>
                </div>
            </div>
            <div className='flex items-center gap-1'>
                <div className='hidden sm:flex items-center gap-1 text-gray-700 bg-gray-100 border border-gray-200 py-1 px-3 hover:shadow-sm cursor-pointer rounded-lg'>
                    <span className='text-sm'><TbBrandGoogleAnalytics /></span>
                    <h3 className='text-sm'>{item.visitHistory.length} Clicks</h3>
                </div>
                <span className='text-gray-700 cursor-pointer text-sm' onClick={toggleDropdown}><SlOptionsVertical /></span>
               <DropMenu isOpen={isOpen} dropdownRef={dropdownRef} options={menuOptions} />
            </div>
        </div>
    )
}

export default Link