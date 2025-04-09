import React, { useEffect, useState } from "react";
import { IoCheckmarkCircleSharp } from "react-icons/io5";
import { FaExclamation } from "react-icons/fa";
const Alert = ({ message, type, onClose }) => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    setShow(true);
    const timer = setTimeout(() => {
      setShow(false);
      setTimeout(onClose, 300);
    }, 3000);

    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div
      className={`fixed bottom-5 left-1/2 -translate-x-1/2 w-[90%] max-w-sm flex items-center gap-2 px-4 py-2 rounded-md shadow-sm transition-all duration-300 transform text-sm
    ${show ? "translate-y-0 opacity-100" : "translate-y-5 opacity-0"}
    ${type === "success" ? "bg-green-600 text-white" : "bg-red-400 text-white"}
  `}
    >
      {type === "success" ? <IoCheckmarkCircleSharp /> : <FaExclamation />}
      <span className="break-words">{message}</span>
    </div>
  );
};

export default Alert;