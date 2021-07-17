
import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
// import AuthHero from "../components/AuthHero";
import { FaUserCircle, FaSpinner } from 'react-icons/fa';
import { RiLockPasswordLine } from 'react-icons/ri';
import * as yup from "yup";

interface Props {

}

const Login: React.FC<Props> = (props) => {

    // const [email,setEmail]=useState("101.sp@gmail.com");
    // const [password,setPassword]=useState("");
    const [data, setData] = useState({ email: "", password: "" })//we can combine both of the above like this
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const nameOfChangeInput = event.target.name;
        setData({ ...data, [nameOfChangeInput]: event.target.value });
    }
    const handleBlur = (event: React.FocusEvent<HTMLInputElement>) => {
        const nameOfBlurredInput = event.target.name;
        setTouched({ ...touched, [nameOfBlurredInput]: true });
    };

    const [passwordtype, setPasswordtype] = useState(false);
    const [touched, setTouched] = useState({ email: false, password: false });
    const [loading, setLoading] = useState(false);
    const history = useHistory();

    let emailError = "";
    let passwordError = "";

    //checking functioning of yup library(syntax&working)

    const emailValidator=yup.string().required().email();
    const passwordValidator=yup.string().required().min(8);//for strings input
    const negArr=yup.array().required().of(yup.number().negative());//for array of numbers

    
    const formValidator= yup.object().shape({
        email:yup.string().required().email(),
        password:yup.string().required().min(8),
    })


    
    console.log(negArr);

    console.log("isformvalid",formValidator.isValidSync(data));
    

    
    console.log("email validator",
    emailValidator.isValidSync(""),
    emailValidator.isValidSync(undefined),
    emailValidator.isValidSync("hello"),
    emailValidator.isValidSync(5),
    emailValidator.isValidSync("hello@gmail.com"),
    emailValidator.isValidSync("hi@codespx.io"),
    
    );

    console.log("password validator",
    passwordValidator.isValidSync(""),
    passwordValidator.isValidSync(undefined),
    passwordValidator.isValidSync("hello"),
    passwordValidator.isValidSync(5),
    passwordValidator.isValidSync("hello@gmail.com"),
    passwordValidator.isValidSync("hi@codespx.io"),
    
    );

    
    if (!data.email) {
        emailError = "Email Address is required";
    }
    else if (!data.email.endsWith("@gmail.com")) {
        emailError = "Please enter a valid Email Address";
    }
    if (!data.password) {
        passwordError = "Password is required";
    }
    else if (data.password.length < 8) {
        passwordError = "Password should be of atleast 8 char.";
    }
    return (

        <>

           
            <form className="m-auto" onSubmit={(event) => {
                event.preventDefault();
                if (emailError || passwordError) {
                    console.log("form submission rejected");
                    return;
                }
                setLoading(true);
                console.log("login with data", data);
                setTimeout(() => {
                    console.log("success");
                    history.push("/dashboard");
                }, 5000);
            }}>
                 <div className="mb-6 text-2xl font-semibold text-blue-600">Log In to <span className="font-extrabold">Devs</span></div>
                
                <div className="mb-12 font-bold">New here? <Link to="/auth/signup" className="text-indigo-600 underline hover:text-indigo-900">Create an account</Link></div>
                <div className="flex flex-col space-y-10">

                    <div className="flex items-center justify-center space-x-4 text-left border-b border-gray-300">
                        <label htmlFor="email" className="sr-only" />
                        <FaUserCircle className="text-indigo-600" style={{ margin: 0 + 'px', }} />
                        <input className="outline-none" type="email" placeholder="Email address" name="email" autoComplete="email" value={data.email} onChange={handleChange} onBlur={handleBlur} required />



                    </div>
                    {touched.email && <div className="text-red-500">{emailError}</div>}


                    <div className="flex items-center justify-center space-x-4 text-left border-b border-gray-300">
                        <label htmlFor="Password:" />
                        <RiLockPasswordLine className="text-indigo-600" style={{ margin: 0 + 'px' }} />
                        <input className="outline-none" type={(passwordtype ? "text" : "password")} placeholder="Password" name="password" autoComplete="current-password" required value={data.password} onChange={handleChange} onBlur={handleBlur} />

                    </div>
                    {touched.password && <div className="text-red-500">{passwordError}</div>}

                </div>
                {loading && <FaSpinner className="mx-auto mt-8 animate-spin" />}
                <div className="flex flex-row space-x-4 mt-11">

                    <button type="submit"
                    disabled={!formValidator.isValidSync(data)} className="p-1 px-4 text-white bg-indigo-500 border-2 rounded-md shadow-md hover:opacity-60">Login</button>


                    <button type="button" onClick={(event) => {
                        console.log("cancel button clicked");
                        event.preventDefault();

                    }} className="p-1 px-4 text-white bg-indigo-500 border-2 rounded-md shadow-md hover:opacity-60">Cancel</button>


                </div>
                <div className="flex items-center mt-4 space-x-4">

                    <div className="font-semibold text-indigo-700">Show Password</div>
                    <div className="shadow-md"><input onClick={() => {
                        if (passwordtype === false) {
                            setPasswordtype(true)
                        }
                        else {
                            setPasswordtype(false);
                        }
                    }} className="shadow-md" type="checkbox" /></div>
                </div>

            </form>
        </>


    );

};
Login.defaultProps = {
}

export default React.memo(Login);
