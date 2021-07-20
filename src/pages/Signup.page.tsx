


import { useHistory } from "react-router-dom";
// import AuthHero from "../components/AuthHero";
import { FaUserCircle, FaSpinner } from 'react-icons/fa';
import { RiLockPasswordLine } from 'react-icons/ri';

import {MdEmail} from 'react-icons/md'
import * as yup from "yup";
import { useFormik } from "formik";
import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import Input from "../components/Input/Input";
// import Input from "../components/Input";

interface Props{
   
}

const Signup: React.FC<Props>=(props) => {
    const history = useHistory();

    const {getFieldProps,
        handleSubmit,
        touched,
        isSubmitting,
        errors
    } = useFormik({
        initialValues:{
            email:"",
            password:""
        },
        validationSchema:yup.object().shape({
            email: yup.string().required("Email is a required field!").email("Must be a valid Email!"),
            password: yup.string().required("Password is a required field!").min(8,"Password must be of atleast 8 chars!"),
        }),
        onSubmit:(data)=>{
            console.log("form submitting",data);
            setTimeout(()=>{
                console.log("successfull");
                history.push("/dashboard");
            },5000);
           
        }
    });




    
    const [data, setData] = useState({ email: "", password: "" })//we can combine both of the above like this
    console.log(setData);
    // const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    //     const nameOfChangeInput = event.target.name;
    //     setData({ ...data, [nameOfChangeInput]: event.target.value });
    // }
    // const handleBlur = (event: React.FocusEvent<HTMLInputElement>) => {
    //     const nameOfBlurredInput = event.target.name;
    //     setTouched({ ...touched, [nameOfBlurredInput]: true });
    // };

    const [passwordtype, setPasswordtype] = useState(false);
    // const [touched, setTouched] = useState({ email: false, password: false });
    //const [loading, setLoading] = useState(false);
   

    // useEffect(() => {
    //     console.log("component mounted");
    //     return () => {
    //         console.log("component unmounted");
    //     }
    // }, [])//return inside useEffect runs when the component is unmounted while the function inside useEffect runs when there is a change in dependency array

    //let emailError = "";
    //let passwordError = "";

    //checking functioning of yup library(syntax&working)

    // const emailValidator=yup.string().required().email();
    // const passwordValidator=yup.string().required().min(8);//for strings input
    // const negArr=yup.array().required().of(yup.number().negative());//for array of negative numbers
    // const numberValidator=yup.number().positive();//for positive numbers
    // const positiveNumberVaildator=yup.array().of(yup.number().positive());//for array of postive numbers

    
    const formValidator= yup.object().shape({
        email:yup.string().required().email(),
        password:yup.string().required().min(8),
    })

    try{
        formValidator.validateSync(data);
    }catch(e){
        console.log(e);
    }

    return (
        <>
            <div>
                
            <form className="mt-32 ml-36" onSubmit={handleSubmit}>
                <div className="flex flex-col space-y-4">
            <div className="mb-8 text-3xl font-semibold text-blue-500">Get started with a free account</div>
            <div className="mb-12"><p className="inline font-semibold">Already have an account? </p><Link to="/auth/login" className="text-blue-700 underline">Log in</Link></div></div>
                 
                <div className="flex flex-col mt-12 space-y-10">

                    <div className="flex items-center space-x-4 text-left border-b border-gray-300"><FaUserCircle className="text-indigo-600" style={{ margin: 0 + 'px', }} /><Input placeholder="Username"/></div>

                    <div className="flex items-center space-x-4 text-left border-b border-gray-300">
                     
                        <label htmlFor="email" className="sr-only" />
                        <MdEmail className="text-indigo-600" style={{ margin: 0 + 'px', }} />
                        <input className="outline-none "
                        type="email"
                        placeholder="Email address"
                        id="email-address"
                        autoComplete="email"
                        required
                        {...getFieldProps("email")}/>



                    </div>
                    {touched.email && <div className="text-red-500 ">{errors.email}</div>}


                    <div className="flex items-center space-x-4 text-left border-b border-gray-300">
                        <label htmlFor="Password:" />
                        <RiLockPasswordLine className="text-indigo-600" style={{ margin: 0 + 'px' }} />
                        <input className="outline-none"
                        type={(passwordtype ? "text" : "password")}
                        placeholder="Password"
                        required
                        {...getFieldProps("password")}/>

                    </div>
                    {touched.password && <div className="text-red-500">{errors.password}</div>}
                    <div className="mt-4"><input type="checkbox"></input><span className="text-blue-600"> I agree to the terms and conditions</span> </div>

                </div>
                {isSubmitting && <FaSpinner className="mx-auto mt-8 animate-spin" />}
                <div className="flex flex-row items-center space-x-4 text-center mt-11">
                <div className="items-center justify-center font-bold">Show Password</div>
                    <div className="shadow-md"><input onClick={() => {
                        if (passwordtype === false) {
                            setPasswordtype(true)
                        }
                        else {
                            setPasswordtype(false);
                        }
                    }} className="shadow-md cursor-pointer" type="checkbox" /></div>
                   <div className="flex flex-row space-x-4">
                   <div className="ml-32"> <button type="submit" className="p-1 px-4 text-white bg-indigo-500 border-2 rounded-md shadow-md hover:opacity-60">Get started</button></div>


                    <div><button type="button" onClick={(event) => {
                        console.log("cancel button clicked");
                        event.preventDefault();

                    }} className="p-1 px-4 text-white bg-indigo-500 border-2 rounded-md shadow-md hover:opacity-60">Cancel</button></div>
                    </div>

                    
                   
                   

                </div>
                

                
        

               
                <p className="mt-16 font-semibold text-blue-600">© 2020 All Rights Reserved. Cookie Preferences, Privacy, and Terms.</p>
               

            </form>
            </div>

        </>
    );

};
Signup.defaultProps={
}

export default React.memo(Signup);


