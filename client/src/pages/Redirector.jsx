import React, { useEffect } from 'react'
import { useNavigate, useLocation } from 'react-router-dom';
import Rlr from "../components/Rlr"
const Redirector = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const isLoggedIn = localStorage.getItem("isLoggedIn");
  let url = `http://localhost:3000/api/url${location.pathname}`;
  useEffect(() => {
    if(isLoggedIn){
      url = `http://localhost:3000/api/user/url${location.pathname}`;
    }
    const handleRedirector = async () => {
      try {
        const res = await fetch(`${url}`,{
          method: "GET",
          credentials: "include"
        });
        const data = await res.json();
        if (data.status === "ok") {
          window.location.href = data.url;
        } else {
          navigate("/");
        }
      } catch (err) {
        navigate("/")
      }

    };
    handleRedirector();
  }, [])


  return (
    <Rlr>
      <div>
        <h3 className='font-semibold text-lg text-gray-800'>Redirecting...</h3>
      </div>
    </Rlr>
  )
}

export default Redirector