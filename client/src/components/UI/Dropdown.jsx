import React, { useState, useRef, useEffect } from "react";

const useDropdown = () => {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef(null);
    const toggleDropdown = () => setIsOpen((prev) => !prev);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    return { isOpen, toggleDropdown, dropdownRef };
};

const DropMenu = ({ isOpen, dropdownRef, options }) => {
    return (
        <div ref={dropdownRef} className="relative inline-block">
            {isOpen && (
                <div className="absolute right-0 mt-10 w-48 bg-white rounded-md border border-gray-200 overflow-hidden transition-all duration-200 text-sm">
                    {options.map((option, index) => (
                        <button
                            key={index}
                            className="cursor-pointer  px-4 py-2 w-full hover:bg-gray-100 text-left"
                            onClick={option.onClick}
                        >
                            <div className="flex items-center gap-2">
                                <span className={` ${option.label.toLowerCase() === "delete" ? "text-red-400" : "text-gray-800"} text-lg `}>{option.icon}</span>
                                <span className={` ${option.label.toLowerCase() === "delete" ? "text-red-400" : "text-gray-900"}`}>{option.label}</span>
                            </div>
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
};

export { DropMenu, useDropdown };
