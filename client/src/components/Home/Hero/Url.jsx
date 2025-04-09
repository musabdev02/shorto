import React, { useState } from 'react'
const apiUrl = import.meta.env.VITE_API_URL;
import { useNavigate } from "react-router-dom"
// cus
import { useAlert } from '../../../contexts/Alert';
// component
import Button from '../../UI/Button';
import Btnloading from '../../UI/Btnloading';
// icons
import { FaLink } from "react-icons/fa6";
const Url = () => {
    const { showAlert } = useAlert();
    const [url, setUrl] = useState("");
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!url) {
            showAlert("URL cannot be empty!", "error");
            return;
        }
        const urlPattern = new RegExp(
            "^(https?:\\/\\/)" +
            "((([a-zA-Z0-9-]+\\.)+[a-zA-Z]{2,})|" +
            "\\d{1,3}(\\.\\d{1,3}){3})" +
            "(\\:\\d+)?(\\/[-a-zA-Z0-9@:%_+.~#?&//=]*)?$",
            "i"
        );

        if (!urlPattern.test(url)) {
            showAlert("Invalid URL! Please Enter a valid URL", "error");
            return;
        };
        
        setLoading(true);
        try{
            const res = await fetch(`${apiUrl}/api/url`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ url }),
            });
            const data = await res.json();
            if(data.status === "ok"){
                navigate("/shortener", { state: data });
            }
            setLoading(false);
        }catch(err) { 
            showAlert(`Error: ${err.message}`, "error");
            setLoading(false);
            setUrl("");
        }

    }

    return (
        <form onSubmit={handleSubmit} className='w-full border border-gray-200 mt-4 h-12 rounded-md bg-white shadow-xs flex items-center justify-between px-2'>
            <div className='px-2 flex items-center gap-4 w-[90%]'>
                <span className='text-gray-600'><FaLink /></span>
                <input type="text" placeholder='Enter your link here...' value={url} onChange={(e) => setUrl(e.target.value)} className='text-sm sm:text-md outline-none w-full' />
            </div>
            <div>
                {
                    loading ? <Btnloading /> :
                        <span><Button type={"secondary"} /></span>
                }
            </div>

        </form>
    )
}

export default Url