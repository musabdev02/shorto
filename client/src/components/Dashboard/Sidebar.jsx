import React from 'react'
import { Link } from 'react-router-dom'
// icons
import { FiLink } from "react-icons/fi";
import { TbBrandGoogleAnalytics } from "react-icons/tb";
import { CiSettings } from "react-icons/ci";
import { FaUserAltSlash } from "react-icons/fa";
const links = [
    {
        icon: <FiLink />,
        name: "Links",
        desti: "/dashboard"
    },
    {
        icon: <TbBrandGoogleAnalytics />,
        name: "Analytics",
        desti: "/dashboard/analytics"
    },
    {
        icon: <CiSettings />,
        name: "Settings",
        desti: "/dashboard/settings"
    },
    {
        name: "Logout"
    }
]
const Sidebar = () => {
    return (
        <div className='sticky top-0 w-[16rem] bg-[#fafafa] h-screen border border-r-[#e5e7eb]'>
            <div className='p-4 flex items-center gap-2'>
                <div className='rounded-md h-7 w-7 shadow-sm bg-white'>
                    <img src="/logo.svg" alt="logo" className='w-full h-full' />
                </div>
                <h3 className='font-medium text-lg'>Shorto</h3>
            </div>
            {/* links */}
            <div className='mt-4 p-4 flex flex-col gap-3'>
                {
                    links.map((item, index) => (
                        <Link to={item.desti} className='flex items-center gap-2 cursor-pointer hover:bg-gray-200 p-1 rounded-md'>
                            <span className='text-md text-gray-800'> {item.icon} </span>
                            <h4 className='text-gray-800'>{item.name}</h4>
                        </Link>
                    ))
                }

            </div>
        </div>
    )
}

export default Sidebar