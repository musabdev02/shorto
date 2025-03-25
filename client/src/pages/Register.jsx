import React from 'react'
import Rlr from '../components/Rlr'
import Button from '../components/UI/Button'
import { Link } from 'react-router-dom'
const Register = () => {
  return (
    <Rlr>
      <div className='sm:w-[40%] w-full bg-white shadow-md p-4 rounded-md'>
        <h3 className='font-semibold text-2xl sm:text-3xl'>Sign Up</h3>
        <p className='text-gray-500 text-sm sm:text-md w-[70%] mt-2 leading-5'>Don't think about it, do it!</p>
        <form className='text-left mt-4'>
          <div className='flex flex-col'>
            <label htmlFor="name" className='text-gray-700 mb-2'>Name:</label>
            <input type="text" name='name' placeholder='Full Name' className='outline-none w-full text-gray-700 shadow-sm border border-gray-300 py-2 px-3 rounded-md focus:border-gray-400' required={true} />
          </div>
          <div className='flex flex-col mt-3'>
            <label htmlFor="email" className='text-gray-700 mb-2'>Email:</label>
            <input type="text" name='email' placeholder='Email Address' className='outline-none w-full text-gray-700 shadow-sm border border-gray-300 py-2 px-3 rounded-md focus:border-gray-400' required={true} />
          </div>
          <div className='flex flex-col mt-3'>
            <label htmlFor="password" className='text-gray-700 mb-2'>Password:</label>
            <input type="password" autoComplete='false' name='password' placeholder='Password' className='outline-none w-full text-gray-700 shadow-sm border border-gray-300 py-2 px-3 rounded-md focus:border-gray-400' required={true} />
          </div>
          <div className='mt-3'>
            <Link to={"/login"} className='text-gray-600 text-sm underline cursor-pointer'>Already have account?</Link>
            <div className='mt-4'><Button content={"Sign up"} /></div>
          </div>
        </form>
      </div>
    </Rlr>
  )
}

export default Register