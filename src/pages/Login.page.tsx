
import React from "react";
import { Link } from "react-router-dom";
// import AuthHero from "../components/AuthHero";

interface Props{
   
}

const Login: React.FC<Props>=(props) => {
    return (
       
      
            <div className="font-extrabold">Login page
            Don't have an account? <Link to="/auth/signup" className="text-blue-700 underline font-bold">Click here</Link> to Sign Up 
             <div> <Link to="/dashboard" className="text-blue-700 underline font-bold">Go to Dashboard</Link></div>
            </div>
            
            
    );

};
Login.defaultProps={
}

export default React.memo(Login);
