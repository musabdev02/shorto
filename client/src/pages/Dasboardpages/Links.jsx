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
    const [hasLinks, setHasLinks] = useState(true);
    const [isGrid, setIsGrid] = useState(false);
    const { isOpen, toggleDropdown, dropdownRef } = useDropdown();
    const menuOptions = [
        { label: "Grid Layout", icon: <FiGrid />, onClick: () => handleGridLayout() },
    ];
    // functions
    const handleGridLayout = () => {isGrid ? setIsGrid(false) : setIsGrid(true);};
    return (
        <div>
            <h3 className='text-xl font-medium'>Links</h3>
            <div className='mt-10 flex justify-end gap-2'>
                <div className='flex border border-gray-300 px-4 gap-4 items-center rounded-md text-gray-700'>
                    <PiLinkSimpleBold />
                    10
                </div>
                <Button content={"Create Link"} type={"secondary"} icon={"plus"} />
                <div className='border border-gray-300 items-center flex px-3 hover:bg-gray-100 text-gray-700 rounded-md
                 cursor-pointer text-sm' onClick={toggleDropdown}>
                    <SlOptionsVertical />
                </div>
                <DropMenu isOpen={isOpen} dropdownRef={dropdownRef} options={menuOptions} />
            </div>
            {/* main */}
            <div className='w-full h-full'>
                {
                    !hasLinks &&
                    <div className='h-[70vh] flex items-center justify-center flex-col gap-2'>
                        <span className='text-8xl text-gray-600'><PiCodesandboxLogoThin /></span>
                        <h3 className='font-semibold text-2xl text-gray-500'>No links found</h3>
                        <p className='w-[30%] text-gray-600 leading-5 text-sm mx-auto text-center'>It looks like you haven't created any links yet. Start by adding a new link to see it appear here!</p>
                    </div>
                }
                <div className={`mt-8 flex ${isGrid ? "flex-row flex-wrap": "flex-col"} gap-4`}>
                    <Link gridLayout={isGrid}/>
                    <Link gridLayout={isGrid}/>
                    <Link gridLayout={isGrid}/>
                </div>
            </div>
        </div>
    )
}

export default Links