
import React from "react";

interface Props{
   
}

const PasswordRecovery: React.FC<Props>=(props) => {
    return (
        <>
            <p>password recovery page.</p>
        </>
    );

};
PasswordRecovery.defaultProps={
}

export default React.memo(PasswordRecovery);
