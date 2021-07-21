
import React from "react";
import { ButtonHTMLAttributes } from "react";
import { IconType } from "react-icons";

// import { HiLockClosed } from 'react-icons/hi';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement>{
   theme?: "primary" | "dark" | "danger" | "success" | "warning";
   children: string;
   type?:"submit" | "reset" | "button";
   Icon?: IconType;
}

const OutlineButton: React.FC<Props>=({children,className,theme,Icon,...rest}) => {

    const themeClasses=theme==="primary" ? "border-indigo-500 text-indigo-500 hover:bg-indigo-500 hover:text-white ": theme==="danger" ? "border-red-500 text-red-500 hover:bg-red-500 hover:text-white ": theme==="success" ? "border-green-500 text-green-500 hover:bg-green-500 hover:text-white " : theme==="dark" ? "border-gray-600 text-gray-600 hover:bg-gray-500 hover:text-white " : theme==="warning" ? "border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-white" : "border-blue-100 text-blue-100 hover:bg-blue-500 hover:text-white ";
    const iconThemeClasses=theme==="primary" ? "group-hover:text-indigo-400": "group-hover:text-gray-100";
    return (
        <button {...rest} className={"h-12 w-32 p-2 flex justify-center text-center items-center  border-2 rounded-lg shadow-md " + themeClasses + " " + className}>
            
            {Icon&&<span><Icon className={"inline-flex items-center w-4 h-4 mr-2 mt-1 " + iconThemeClasses} aria-hidden="true"></Icon></span>}{children}</button>
    );

};

OutlineButton.defaultProps={

    theme:"primary"
}

export default React.memo(OutlineButton);
