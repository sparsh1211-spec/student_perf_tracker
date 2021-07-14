
import React from "react";

interface Props{
   
}

const Sidebar: React.FC<Props>=(props) => {
    return (
        <div className="h-screen w-80 bg-gray-600">
            SIDEBAR HAI BHAI.
        </div>
    );

};
Sidebar.defaultProps={
}

export default React.memo(Sidebar);
