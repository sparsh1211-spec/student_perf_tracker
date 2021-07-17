
import React, { useEffect } from "react";
import logo from "./discord.png"



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
              <img src={logo} className="m-auto my-16" alt=""/>
             
              </div>  
        </>
    );

};
AuthHero.defaultProps={
}

export default React.memo(AuthHero);
