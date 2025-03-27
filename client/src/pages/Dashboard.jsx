import React from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from '../components/Dashboard/Sidebar'

const Dashboard = () => {
  return (
    <div className='flex'>
        <Sidebar />
        <div className='px-14 py-6 w-full overflow-y-hidden'>
            <Outlet />
        </div>
    </div>
  )
}

export default Dashboard