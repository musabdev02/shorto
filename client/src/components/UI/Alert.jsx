import React, { useEffect, useState } from "react";
import { IoCheckmarkCircleSharp } from "react-icons/io5";
import { FaExclamation } from "react-icons/fa";
const Alert = ({ message, type, onClose }) => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    setShow(true);
    const timer = setTimeout(() => {
      setShow(false);
      setTimeout(onClose, 300); // Remove alert after fade-out
    }, 3000);

    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div
      className={`fixed bottom-5 right-5 flex items-center gap-2 px-8 py-2 rounded-md shadow-sm transition-all duration-300 transform ${
        show ? "translate-y-0 opacity-100" : "translate-y-5 opacity-0"
      } ${
        type === "success" ? "bg-green-600 text-white" : "bg-red-400 text-white"
      }`}
    >
      {type === "success" ? <IoCheckmarkCircleSharp /> : <FaExclamation />}
      <span>{message}</span>
    </div>
  );
};

export default Alert;