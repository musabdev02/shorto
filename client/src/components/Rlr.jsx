import React from 'react'
// component
import Logo from './Logo'
const Rlr = ({ children }) => {
  return (
    <div>
        <div className='max-w-6xl mx-auto px-4'>
            <Logo />
            <div className='w-full h-[70vh] flex items-center justify-center'>
                {children}
            </div>
        </div>
    </div>
  )
}

export default Rlr