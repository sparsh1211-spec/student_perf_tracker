
import React, { useEffect } from "react";
import logo from "./AuthHero.webp"



interface Props{
   
}

const AuthHero: React.FC<Props>=(props) => {
    console.log(" hero rendering");
    useEffect(() => {
       console.log("pehli baar render");
    }, []);
    return (
        <>
          <div className="w-1/2 h-screen text-white bg-black">
              <img src={logo} className="mx-auto my-44 h-96 w-96" alt=""/>
             
              </div>  
        </>
    );

};
AuthHero.defaultProps={
}

export default React.memo(AuthHero);
