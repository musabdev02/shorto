import React, { useState } from 'react'
// component
import Button from "../../components/UI/Button"
import { DropMenu, useDropdown } from "../../components/UI/Dropdown"
// icons
import { SlOptionsVertical } from "react-icons/sl";
import { PiLinkSimpleBold } from "react-icons/pi";
import { FiGrid } from "react-icons/fi";
import { PiCodesandboxLogoThin } from "react-icons/pi";
import Link from '../../components/Dashboard/Links/Link';
const Links = () => {
    const [hasLinks, setHasLinks] = useState(false);
    const [isGrid, setIsGrid] = useState(false);
    const { isOpen, toggleDropdown, dropdownRef } = useDropdown();
    const menuOptions = [
        { label: "Grid Layout", icon: <FiGrid />, onClick: () => handleGridLayout() },
    ];
    // functions
    const handleGridLayout = () => { isGrid ? setIsGrid(false) : setIsGrid(true); };
    return (
        <div>
            <h3 className='text-xl font-medium'>Links</h3>
            <div className='mt-5 sm:mt-10 flex justify-end gap-2'>
                <div className='flex border border-gray-300 px-4 gap-2 items-center rounded-md text-gray-700'>
                    <PiLinkSimpleBold />
                    02
                </div>
                <Button content={"Create Link"} type={"secondary"} icon={"plus"} />
                <div className='hidden sm:flex border border-gray-300 items-center px-3 hover:bg-gray-100 text-gray-700 rounded-md
                 cursor-pointer text-sm' onClick={toggleDropdown}>
                    <SlOptionsVertical />
                </div>
                <DropMenu isOpen={isOpen} dropdownRef={dropdownRef} options={menuOptions} />
            </div>
            {/* main */}
            <div className='w-full h-full mb-22'>
                {
                    hasLinks ? (
                        <div className={`mt-8 flex ${isGrid ? "flex-row flex-wrap" : "flex-col"} gap-4`}>
                            <Link gridLayout={isGrid} />
                            <Link gridLayout={isGrid} />
                        </div>
                    ) :
                        (
                            <div className='h-[65vh] flex items-center justify-center flex-col gap-2'>
                                <span className='text-5xl sm:text-8xl text-gray-600'><PiCodesandboxLogoThin /></span>
                                <h3 className='font-semibold text-xl sm:text-2xl text-gray-500'>No links found</h3>
                                <p className='w-[70%] sm:w-[30%] text-gray-600 leading-5 text-xs sm:text-sm mx-auto text-center'>It looks like you haven't created any links yet. Start by adding a new link to see it appear here!</p>
                            </div>
                        )

                }

            </div>
        </div>
    )
}

export default Links