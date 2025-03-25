import React, { useState } from 'react'
// cus
import { useAlert } from '../../contexts/Alert';
// component
import Button from '../UI/Button';
// icons
import { FaLink } from "react-icons/fa6";
const Url = () => {
    const { showAlert } = useAlert();
    const [url, setUrl] = useState("");
    const [loading, setLoading] = useState(false);


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
            const res = await fetch(`http://localhost:3000/api/url`, {
                method: "POST",
                body: JSON.stringify({ url }),
            });
            const data = await res.json();
            console.log(data);
            setLoading(false);
        }catch(err) {
            console.log("something went wrong", err);
            setLoading(false);
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
                    loading ? <div className='bg-zinc-500 h-8 w-12 p-2 rounded-md'>
                        <img src="/loading.svg" alt="L  oading" className='w-full h-full' />
                    </div> :
                        <span><Button type={"secondary"} /></span>
                }
            </div>

        </form>
    )
}

export default Url