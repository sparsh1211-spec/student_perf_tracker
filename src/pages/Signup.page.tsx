
import React from "react";
import { Link } from "react-router-dom";

interface Props{
   
}

const Signup: React.FC<Props>=(props) => {
    return (
        <>
            <div>Sign_up Page
            Already have an account? <Link to="/auth/login" className="text-blue-700 underline font-bold">Click here</Link>
            </div>

        </>
    );

};
Signup.defaultProps={
}

export default React.memo(Signup);
