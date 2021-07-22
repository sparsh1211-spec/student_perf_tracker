
import React, { useState } from "react";

interface Props {

}

const Avatar: React.FC<Props> = (props) => {

    const MyArr = ["https://designreset.com/cork/ltr/demo4/assets/img/profile-12.jpeg",
    "https://designreset.com/cork/ltr/demo4/assets/img/profile-7.jpeg",
    "https://designreset.com/cork/ltr/demo4/assets/img/profile-2.jpeg",
    "https://designreset.com/cork/ltr/demo4/assets/img/profile-3.jpeg",
    "https://designreset.com/cork/ltr/demo4/assets/img/profile-4.jpeg",
    "https://designreset.com/cork/ltr/demo4/assets/img/profile-5.jpeg",
    
    ]
    let UsersLeft;
    let Visible="";
    const [isHidden,setIsHidden]=useState(false);
    let ButtonVisible="";
    
    if(isHidden===true){
        Visible="block"
    }
    if(isHidden===true){
        ButtonVisible="hidden"
       
    }
   
    

   

    return (
        <div>
            {MyArr.map((users, index) => {
                const distance = index * 16;
               
                UsersLeft=(MyArr.length-4);
                
            
                if(index>=4&& (isHidden===false)){
                  Visible="hidden"
                  
                
                }                
                return (
                  <div>
                     <img src={users} alt="UserAvatars" className={"rounded-full border-white border-4 shadow-md absolute left-" + distance + " " + Visible}/>
                
                     </div>
                );
                
            })
        }
        <button onClick={()=>setIsHidden(!isHidden)} className={"relative px-1 text-blue-500 rounded-full left-60 top-8 bg-white shadow-md hover:bg-gray-500 " + ButtonVisible}> + {UsersLeft} more</button>
        
        </div>
    );

};
Avatar.defaultProps = {
}

export default React.memo(Avatar);

