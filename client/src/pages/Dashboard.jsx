import React, { useState } from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from '../components/Dashboard/Sidebar'
// icon
import { LuPanelLeft } from "react-icons/lu";
const Dashboard = () => {
  const [isOpen, setIsOpen] = useState(false);
  const openSideBar = () => {
    setIsOpen(true)
  }
  return (
    <div className='flex'>
        <Sidebar isOpen={isOpen} setIsOpen={setIsOpen}/>
        <div className='px-4 sm:px-14 py-6 w-full overflow-y-hidden'>
            <div onClick={openSideBar} className='sm:hidden text-lg mb-2'><LuPanelLeft /></div>
            <Outlet />
        </div>
    </div>
  )
}

export default Dashboard