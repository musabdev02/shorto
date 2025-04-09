import React, { useEffect, useState } from 'react'
const apiUrl = import.meta.env.VITE_API_URL;
import { Link, useNavigate } from 'react-router-dom'
// components
import { useAlert } from '../contexts/Alert';
import Button from '../components/UI/Button'
import Rlr from '../components/Rlr'
import Btnloading from '../components/UI/Btnloading'

const Login = () => {
  const { showAlert } = useAlert();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const isLoggedIn = localStorage.getItem("isLoggedIn");

  const cleanUp = () =>{
    setEmail("");
    setPassword("");
  };

  useEffect(() => {
    if(isLoggedIn){
      navigate("/dashboard");
    }
  }, []);
  
  const handleSubmit = async (e) => {
    e.preventDefault();

    if(!email || !password){
      showAlert("Email & Password Required!", "error");
      return;
    }
    setLoading(true)

    try {
      const res = await fetch(`${apiUrl}/api/user/verify`, {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ email, password })
      });
      const data = await res.json();

      if(data?.status === "ok"){
        navigate("/dashboard");
        localStorage.setItem("isLoggedIn", "true");
        localStorage.setItem("name", data?.name);
      }else{
        showAlert(`${data.message}`, "error");
      }
      setLoading(false);

    } catch (error) {
      setLoading(false);
      showAlert(`Error: ${error.message}`, "error");
      cleanUp();
    }
    
  }
  
  return (
    <Rlr>
      <div className='sm:w-[40%] bg-white shadow-md p-4 rounded-md'>
        <h3 className='font-semibold text-2xl sm:text-3xl'>Welcome Back,</h3>
        <p className='text-gray-500 text-sm sm:text-md w-[70%] mt-2 leading-4 sm:leading-5'>Login your account to take all control over your links.</p>
        <form onSubmit={handleSubmit} className='text-left mt-4'>
          <div className='flex flex-col'>
            <label htmlFor="email" className='text-gray-700 mb-2'>Email:</label>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} name='email' placeholder='Email Address' className='outline-none w-full text-gray-700 shadow-sm border border-gray-300 py-2 px-3 rounded-md focus:border-gray-400' required={true} />
          </div>
          <div className='flex flex-col mt-3'>
            <label htmlFor="password" className='text-gray-700 mb-2'>Password:</label>
            <input type="password" autoComplete='false' value={password} onChange={(e) => setPassword(e.target.value)} name='password' placeholder='Password' className='outline-none w-full text-gray-700 shadow-sm border border-gray-300 py-2 px-3 rounded-md focus:border-gray-400' required={true} />
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