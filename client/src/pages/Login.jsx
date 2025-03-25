import React from 'react'
import Logo from '../components/Logo'
import Button from '../components/UI/Button'

const Login = () => {
  return (
    <div>
      <div className='max-w-6xl mx-auto px-4'>
        <Logo />
        <div className='w-full h-[70vh] flex items-center justify-center'>
          <div className='w-[40%] bg-white shadow-md p-4 rounded-md'>
            <h3 className='font-semibold text-3xl'>Welcome Back,</h3>
            <p className='text-gray-500 w-[70%] mt-2 leading-5'>Login your account to take all control over your links.</p>
            <form className='text-left mt-4'>
              <div className='flex flex-col'>
                <label htmlFor="email" className='text-gray-700 mb-2'>Email:</label>
                <input type="text" name='email' placeholder='Email Address' className='outline-none w-full text-gray-700 shadow-sm border border-gray-300 py-2 px-3 rounded-md'  />
              </div>
              <div className='flex flex-col mt-3'>
                <label htmlFor="password" className='text-gray-700 mb-2'>Password:</label>
                <input type="password" autoComplete='false' name='password' placeholder='Password' className='outline-none w-full text-gray-700 shadow-sm border border-gray-300 py-2 px-3 rounded-md'  />
              </div>
              <div className='mt-3'>
                <h4 className='text-gray-600 text-sm underline cursor-pointer'>Forget Password?</h4>
               <div className='mt-6'><Button content={"Login In"}/></div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login