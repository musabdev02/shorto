import React, { useEffect } from 'react'
import { useNavigate, useLocation } from 'react-router-dom';
import Rlr from "../components/Rlr"
const Redirector = () => {
  const location = useLocation();
  const navigate = useNavigate();
  useEffect(() => {
    const handleRedirector = async () => {
      try {
        const res = await fetch(`http://localhost:3000/api/url${location.pathname}`);
        const data = await res.json();
        if (data.status === "ok") {
          window.location.href = data.url;
        } else {
          navigate("/");
        }
      } catch (err) {
        console.log("somthing went wrong", err);
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