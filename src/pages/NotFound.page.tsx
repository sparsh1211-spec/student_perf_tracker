
import React from "react";

interface Props{
   
}

const NotFound: React.FC<Props>=(props) => {
    return (
        <>
            Sorry the page is not found
        </>
    );

};
NotFound.defaultProps={
}

export default React.memo(NotFound);
