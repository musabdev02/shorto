import React, { useState } from 'react'
import { Link } from 'react-router-dom'
// components
import Button from '../components/UI/Button'
import Rlr from '../components/Rlr'
import Btnloading from '../components/UI/Btnloading'

const Login = () => {
  const [loading, setLoading] = useState(false);


  return (
    <Rlr>
      <div className='sm:w-[40%] bg-white shadow-md p-4 rounded-md'>
        <h3 className='font-semibold text-2xl sm:text-3xl'>Welcome Back,</h3>
        <p className='text-gray-500 text-sm sm:text-md w-[70%] mt-2 leading-4 sm:leading-5'>Login your account to take all control over your links.</p>
        <form className='text-left mt-4'>
          <div className='flex flex-col'>
            <label htmlFor="email" className='text-gray-700 mb-2'>Email:</label>
            <input type="email" name='email' placeholder='Email Address' className='outline-none w-full text-gray-700 shadow-sm border border-gray-300 py-2 px-3 rounded-md focus:border-gray-400' required={true} />
          </div>
          <div className='flex flex-col mt-3'>
            <label htmlFor="password" className='text-gray-700 mb-2'>Password:</label>
            <input type="password" autoComplete='false' name='password' placeholder='Password' className='outline-none w-full text-gray-700 shadow-sm border border-gray-300 py-2 px-3 rounded-md focus:border-gray-400' required={true} />
          </div>
          <div className='mt-3'>
            <Link to={"/register"} className='text-gray-600 text-sm underline cursor-pointer'>Don't have account?</Link>
            <div className='mt-2'>
            {
              loading ?
              <Btnloading />:
              <Button content={"Login In"} />
            }
            </div>
            
          </div>
        </form>
      </div>
    </Rlr>
  )
}

export default Login