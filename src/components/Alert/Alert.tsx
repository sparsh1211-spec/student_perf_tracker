
import React, { ButtonHTMLAttributes } from "react";
import { MdCancel} from "react-icons/md";


interface Props extends ButtonHTMLAttributes<HTMLButtonElement>{
    theme?: "primary" | "dark" | "danger" | "success" | "warning";
    children: string;
    type?:"submit" | "reset" | "button";
    
 }
 
 const Alert: React.FC<Props>=({children,className,theme,...rest}) => {
 
     const themeClasses=theme==="primary" ? "bg-indigo-100 text-indigo-600 ": theme==="danger" ? "bg-red-100 text-red-600 ": theme==="success" ? "bg-green-100 text-green-600 " : theme==="dark" ? "bg-gray-200 text-gray-600" : theme==="warning" ? "bg-yellow-200 text-yellow-600" : "bg-blue-100 text-blue-600";
     const iconThemeClasses: string=theme==="primary" ? "text-indigo-600 ": theme==="danger" ? "text-red-600 ": theme==="success" ? "text-green-600" : theme==="dark" ? "text-gray-600" : theme==="warning" ? "text-yellow-600" : "text-blue-600";
     return (
         <button {...rest} className={"w-1/2 h-12 rounded-lg flex items-center text-left pl-4 " + themeClasses + " " + className}>
             
            {children}<span><MdCancel className={"w-4 h-4 text-center inline-flex mt-1 ml-24 " + iconThemeClasses} aria-hidden="true"></MdCancel></span></button>
     );
 
 };
 
 Alert.defaultProps={
 
     theme:"primary"
 }
 
 export default React.memo(Alert);
 