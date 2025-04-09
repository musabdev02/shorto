import React, { useState } from 'react'
const siteName = import.meta.env.VITE_SITE_NAME;
// helper
import { truncate, addPrefix } from '../../../helper';
const Infobox = ({ links }) => {
    let sortedLinks = links.sort((a, b) => b.visitHistory.length - a.visitHistory.length);

    const [active, setActive] = useState("short-links");
    const hoverClasses = "border border-gray-300 font-medium bg-white shadow-md text-black";
    let content;

    const activeItem = (item) => {
        setActive(item);
    };
    if (active === "short-links") {
        content = <div className='mt-6 px-6'>
            <div className='flex justify-between text-gray-500 text-sm'>
                <h3>Link</h3>
                <span>Clicks</span>
            </div>
            {
                sortedLinks.map((item, index) => (
                    <div key={index} className='mt-3 border-t border-gray-300 pt-3 flex justify-between'>
                        <div className='flex items-center gap-2'>
                            <img src={`https://www.google.com/s2/favicons?sz=64&domain_url=${item.redirectUrl}`} alt={`icon:${item.shortId}`} className='w-4' />
                            <h4 className='text-sm text-gray-900 font-medium'>{siteName}/{item.shortId}</h4>
                        </div>
                        <p className='font-medium text-sm text-gray-700'>{addPrefix( item.visitHistory)}</p>
                    </div>
                ))
            }


        </div>
    }
    else if (active === "destination-url") {
        content = <div className='mt-6 px-6'>
            <div className='flex justify-between text-gray-500 text-sm'>
                <h3>Link</h3>
                <span>Clicks</span>
            </div>
            {
                sortedLinks.map((item, index) => (
                    <div key={index} className='mt-3 border-t border-gray-300 pt-3 flex justify-between'>
                        <div className='flex items-center gap-2'>
                            <img src={`https://www.google.com/s2/favicons?sz=64&domain_url=${item.redirectUrl}`} alt={`icon:${item.shortId}`} className='w-4' />
                            <h4 className='text-sm text-gray-900 font-medium'>{truncate(item.redirectUrl, 24)}</h4>
                        </div>
                        <p className='font-medium text-sm text-gray-700'>{ addPrefix(item.visitHistory)}</p>
                    </div>
                ))
            }

        </div>
    }
    return (
        <div className='w-1/1 border border-gray-300 rounded-lg py-6 px-4 h-96'>
            <div className="w-full bg-[#F5F5F5] h-10 rounded-lg flex items-center px-1 overflow-hidden">
                <p
                    onClick={() => activeItem("short-links")}
                    className={`w-1/2 text-sm text-center py-1 rounded-md cursor-pointer transition-all 
                    ${active === "short-links" ? hoverClasses : "text-gray-400"}`}> Short Links</p>

                <p
                    onClick={() => activeItem("destination-url")}
                    className={`w-1/2 text-sm text-center py-1 rounded-md cursor-pointer transition-all 
                    ${active === "destination-url" ? hoverClasses : "text-gray-400"}`}>
                    Destination URLs</p>
            </div>
            {content}
        </div>
    )
}

export default Infobox