
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

const Button: React.FC<Props>=({children,className,theme,Icon,...rest}) => {

    const themeClasses=theme==="primary" ? "bg-indigo-500 ": theme==="danger" ? "bg-red-500 ": theme==="success" ? "bg-green-500 " : theme==="dark" ? "bg-gray-600" : theme==="warning" ? "bg-yellow-500" : "bg-blue-100";
    const iconThemeClasses=theme==="primary" ? "group-hover:text-indigo-400": "group-hover:text-gray-100";
    return (
        <button {...rest} className={"h-12 w-32 p-2 flex justify-center text-white  text-center items-center  border-2 rounded-lg shadow-md hover:opacity-60 " + themeClasses + " " + className}>
            
            {Icon&&<span><Icon className={"inline-flex items-center w-4 h-4 mr-2 mt-1 " + iconThemeClasses} aria-hidden="true"></Icon></span>}{children}</button>
    );

};

Button.defaultProps={

    theme:"primary"
}

export default React.memo(Button);
