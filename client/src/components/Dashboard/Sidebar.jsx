import React, { useRef, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
// icons
import { FiLink } from "react-icons/fi";
import { TbBrandGoogleAnalytics } from "react-icons/tb";
import { CiSettings } from "react-icons/ci";
// helper
import { logoutRq } from '../../helper';

const Sidebar = ({ isOpen, setIsOpen, callback }) => {
    const sidebarRef = useRef(null); 
    const navigate = useNavigate();

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
            name: "Logout",
            desti: "/",
            func: () => logoutAndUpdate()
        }
    ];
    const logoutAndUpdate = async () => {
        await logoutRq(callback);
        navigate("/")
    };
    
    useEffect(() => {
        const handleClickOutside = (event) => {
          if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
            setIsOpen(false);
          }
        };
    
        if (isOpen) {
          document.addEventListener("mousedown", handleClickOutside);
        }
    
        return () => {
          document.removeEventListener("mousedown", handleClickOutside);
        };
      }, [isOpen, setIsOpen, ]);
      useEffect(() => {setIsOpen(false);}, [navigate])

    return (
        <div ref={sidebarRef} className={`z-9 fixed shadow-lg transform ${isOpen ? "-translate-x-0": "-translate-x-100"} sm:translate-none  transition-all ease-in-out sm:shadow-none sm:block sm:sticky top-0 w-[18rem] bg-[#fafafa] h-screen border-r border-r-[#e5e7eb] overflow-hidden`}>
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
                        item.name === "Logout" ? <p key={index}  onClick={item.func} className='text-red-400 hover:bg-red-100 py-1 px-2 rounded-md cursor-pointer'>{item.name}</p>:
                        <Link to={item.desti} key={index} className='flex items-center gap-2 cursor-pointer hover:bg-gray-200 p-1 rounded-md'>
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