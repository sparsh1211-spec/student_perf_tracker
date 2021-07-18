

import React from "react";
import { Link } from "react-router-dom";
// import Input from "../components/Input";

interface Props{
   
}

const Signup: React.FC<Props>=(props) => {
    return (
        <>
            <div>
            Already have an account? <Link to="/auth/login" className="font-bold text-blue-700 underline">Click here</Link>
           
            </div>

        </>
    );

};
Signup.defaultProps={
}

export default React.memo(Signup);


