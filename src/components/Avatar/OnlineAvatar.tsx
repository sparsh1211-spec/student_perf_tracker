
import React from "react";

interface Props{
   profilenumber:number;
  
}

const OnlineAvatar: React.FC<Props>=({profilenumber}) => {
    return (
        <>
            <img className="absolute rounded-full" src={"https://designreset.com/cork/ltr/demo4/assets/img/profile-" + profilenumber + ".jpeg"}alt="UserAvatar"/>
            <div className="relative w-6 h-6 bg-green-500 border-2 border-white rounded-full left-14 top-16"></div> 

            <img className="absolute w-12 h-12 mt-16 rounded-full" src={"https://designreset.com/cork/ltr/demo4/assets/img/profile-" + profilenumber + ".jpeg"}alt="UserAvatar"/>
            <div className="relative w-3 h-3 bg-green-500 border-2 border-white rounded-full top-24 left-8"></div>
            
           
        </>
    );

};
OnlineAvatar.defaultProps={
}

export default React.memo(OnlineAvatar);
