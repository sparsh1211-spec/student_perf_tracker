
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
          <div className="h-screen w-1/2 bg-black text-white">
              <img src={logo} className="m-auto my-16" alt=""/>
              <p className="ml-36 font-extrabold">PS: Gaming site nahi h bhai..chala jaa,  yahan kuch nhi milega</p>
              </div>  
        </>
    );

};
AuthHero.defaultProps={
}

export default React.memo(AuthHero);
