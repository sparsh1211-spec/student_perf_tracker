
import React, { ProgressHTMLAttributes } from "react";
// import { ButtonHTMLAttributes } from "react";
import { IconType } from "react-icons";

// import { HiLockClosed } from 'react-icons/hi';

interface Props extends ProgressHTMLAttributes<HTMLProgressElement>{
   theme?: "primary" | "dark" | "danger" | "success" | "warning";
   progress: number;
  
}

const ProgressBar: React.FC<Props>=({progress,className,theme,...rest}) => {

    const themeClasses=theme==="primary" ? "bg-indigo-500 ": theme==="danger" ? "bg-red-500 ": theme==="success" ? "bg-green-500 " : theme==="dark" ? "bg-gray-600" : theme==="warning" ? "bg-yellow-500" : "bg-blue-100";

    
    
    return (
       <>
       
          
          {progress<=100&&<div className={"h-6 rounded-full "+ className + " " + themeClasses} style={{width: progress + "%" ,}}></div>}
     
       
       </>
    );

};

ProgressBar.defaultProps={

    theme:"primary"
}

export default React.memo(ProgressBar);
