import React from 'react'
// icons
import { FaArrowRight } from "react-icons/fa6";
import { LuPlus } from "react-icons/lu";
const Button = ({ type, content, icon }) => {
    return (
        <>
            {
                type === "primary" ? (
                    <button className=' border border-[#e5e5e5] font-medium px-4 py-2 rounded-md text-zinc-800 text-sm cursor-pointer shadow-xs hover:bg-zinc-100'>
                        {content}
                    </button>
                ) :
                    (
                        <button className='flex items-center gap-2 px-4 py-2 hover:opacity-95 font-medium text-sm shadow-xs rounded-md cursor-pointer bg-zinc-800 text-zinc-300'>
                            {content}
                            <span>
                                {
                                    icon === "plus" ? <LuPlus size={16} />:<FaArrowRight />
                                }
                            </span>
                        </button>
                    )
            }

        </>
    )
}

export default Button