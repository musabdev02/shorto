import React, { useState } from 'react'
// icons
import { IoCloseSharp } from "react-icons/io5";
// component
import { useAlert } from '../../../contexts/Alert';
import Button from '../../UI/Button';
const Form = ({ closeForm }) => {
    const { showAlert } = useAlert();
    const [originalUrl, setOriginalUrl] = useState("");
    const [comment, setComment] = useState("");

    const handleSubmit =  async (e) => {
        e.preventDefault();
        
        if(!originalUrl) {
            showAlert("URL cannot be empty!", "error");
            return;
        }
        try{
            const res = await fetch(`http://localhost:3000/api/user/url`,{
                method: "POST",
                credentials: "include",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ originalUrl, comment })
            });
            const data = await res.json();
            console.log(data);
        }catch(error){
            showAlert(`Error: ${error.message}`, "error");
        }
       
    }

  return (
    <div className='w-full h-screen absolute top-0 left-0 z-10 bg-zinc-900/60 flex items-center justify-center'>
    <div className='w-[55%] h-[85%] bg-white rounded-md px-6 py-4 flex flex-col'>
      {/* head */}
      <div className='flex items-center justify-between pb-6'>
        <div className='flex items-center gap-2'>
          <div className='w-9 h-9 bg-gray-100 rounded-full p-1'>
            <img src="/logo.svg" alt="logo" className='w-full h-full' />
          </div>
          <h3 className='text-gray-700 text-lg font-bold'>New Link</h3>
        </div>
        <span className='text-xl cursor-pointer text-zinc-500' onClick={closeForm}>
          <IoCloseSharp />
        </span>
      </div>
  
      {/* content form */}
      <form onSubmit={handleSubmit} className='w-full flex flex-col flex-grow'>
        <div className='flex pt-5 border-t border-gray-300 flex-grow'>
          <div className='w-[70%]'>
            <div className='flex flex-col gap-1'>
              <label htmlFor="destinationUrl" className='text-zinc-800 font-medium text-sm'>Destination URL</label>
              <input
                type="text"
                name="destinationUrl"
                value={originalUrl}
                onChange={(e) => setOriginalUrl(e.target.value)}
                placeholder='https://example.com'
                className='border outline-none border-zinc-300 px-3 py-2 w-full text-sm rounded-md shadow-sm'
              />
            </div>
  
            <div className='flex flex-col gap-1 mt-4'>
              <label htmlFor="comment" className='text-zinc-800 font-medium text-sm'>Add comment</label>
              <textarea
                rows={6}
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                name="comment"
                placeholder='Comment'
                className='border outline-none border-zinc-300 px-3 py-2 w-full text-sm rounded-md shadow-sm'
              />
            </div>
          </div>
  
          {/* previews can go here */}
          <div className='w-[30%]'>{/* Your preview section */}</div>
        </div>
  
        {/* submit */}
        <div className='pt-5 border-t border-gray-300'>
          <div className='flex justify-end'>
            <span type="submit">
              <Button type="secondary" content="Create Link" />
            </span>
          </div>
        </div>
      </form>
    </div>
  </div>
  
  )
}

export default Form