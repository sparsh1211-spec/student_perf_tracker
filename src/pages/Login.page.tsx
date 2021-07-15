
import React from "react";
import { Link } from "react-router-dom";
// import AuthHero from "../components/AuthHero";

interface Props{
   
}

const Login: React.FC<Props>=(props) => {
    return (
       
      
            <div className="font-extrabold">Login page
            Don't have an account? <Link to="/auth/signup" className="font-bold text-blue-700 underline">Click here</Link> to Sign Up 
             <div> <Link to="/dashboard" className="font-bold text-blue-700 underline">Go to Dashboard</Link></div>
             <div>LOGIN PAGEEEEEEEE</div>
            </div>
            
            
            
    );

};
Login.defaultProps={
}

export default React.memo(Login);
