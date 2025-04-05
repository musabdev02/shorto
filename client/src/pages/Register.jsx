import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
// components
import { useAlert } from '../contexts/Alert';
import Rlr from '../components/Rlr'
import Button from '../components/UI/Button'
import Btnloading from '../components/UI/Btnloading';
const Register = () => {
  const { showAlert } = useAlert();
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const isLoggedIn = localStorage.getItem("isLoggedIn");

  useEffect(() => {
    if(isLoggedIn){
      navigate("/dashboard");
    }
  }, [])

  const cleanUp = () =>{
    setName("");
    setEmail("");
    setPassword("");
  };

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePassword = (password) => {
    return password.length >= 8;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name || !email || !password) {
      showAlert("Please fill in all fields", "error");
      return;
    };
    if (!validateEmail(email)) {
      showAlert("Please enter a valid email address", "error");
      return;
    };
    if (!validatePassword(password)) {
      showAlert("Password must be at least 8 characters long", "error");
      return;
    };

    setLoading(true)
    try {
      const res = await fetch(`http://localhost:3000/api/user`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ name, email, password })
      });
      const data = await res.json();
      if (data?.status === "ok") {
        navigate("/login")
      }else{
        setLoading(false)
        showAlert("Something went wrong", "error");
        cleanUp();
      }
    } catch (error) {
      setLoading(false)
      showAlert(`Error: ${error.message}`, "error");
      cleanUp();
    } 
  };

  return (
    <Rlr>
      <div className='sm:w-[40%] w-full bg-white shadow-md p-4 rounded-md'>
        <h3 className='font-semibold text-2xl sm:text-3xl'>Sign Up</h3>
        <p className='text-gray-500 text-sm sm:text-md w-[70%] mt-2 leading-5'>Don't think about it, do it!</p>
        <form onSubmit={handleSubmit} className='text-left mt-4'>
          <div className='flex flex-col'>
            <label htmlFor="name" className='text-gray-700 mb-2'>Name:</label>
            <input type="text" name='name' value={name} onChange={(e) => setName(e.target.value)} placeholder='Full Name' className='outline-none w-full text-gray-700 shadow-sm border border-gray-300 py-2 px-3 rounded-md focus:border-gray-400' required={true} />
          </div>
          <div className='flex flex-col mt-3'>
            <label htmlFor="email" className='text-gray-700 mb-2'>Email:</label>
            <input type="email" name='email' value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Email Address' className='outline-none w-full text-gray-700 shadow-sm border border-gray-300 py-2 px-3 rounded-md focus:border-gray-400' required={true} />
          </div>
          <div className='flex flex-col mt-3'>
            <label htmlFor="password" className='text-gray-700 mb-2'>Password:</label>
            <input type="password" autoComplete='false' name='password' value={password} onChange={(e) => setPassword(e.target.value)} placeholder='Password' className='outline-none w-full text-gray-700 shadow-sm border border-gray-300 py-2 px-3 rounded-md focus:border-gray-400' required={true} />
          </div>
          <div className='mt-3'>
            <Link to={"/login"} className='text-gray-600 text-sm underline cursor-pointer'>Already have account?</Link>
            <div className='mt-2'>
            {
              loading ?
              <Btnloading />:
              <Button content={"Sign up"} />
            }
              </div>
          </div>
        </form>
      </div>
    </Rlr>
  )
}

export default Register