
import React from "react";
import { Link } from "react-router-dom";
// import AuthHero from "../components/AuthHero";
import { FaUserCircle } from 'react-icons/fa';
import { RiLockPasswordLine } from 'react-icons/ri'

interface Props {

}

const Login: React.FC<Props> = (props) => {
    return (

        <>


            <form className="m-auto">
                <div className="mb-12">New here? <Link to="/auth/signup" className="text-blue-500 underline">Create an account</Link></div>
                <div className="flex flex-col space-y-10">

                    <div className="flex items-center justify-center space-x-4 text-left border-b border-gray-300">
                        <label htmlFor="email" className="sr-only" />
                        <FaUserCircle className="text-blue-500" style={{ margin: 0 + 'px', }} />
                        <input className="outline-none" type="text" placeholder="Username" name="uname" required />


                    </div>

                    <div className="flex items-center justify-center space-x-4 text-left border-b border-gray-300">
                        <label htmlFor="Password:" />
                        <RiLockPasswordLine className="text-blue-500" style={{ margin: 0 + 'px', }} />
                        <input className="outline-none" type="password" placeholder="Password" name="psw" required />
                    </div>
                </div>
                <div className="flex flex-row space-x-4 mt-11">

                    <button type="submit" className="p-2 px-4 text-white bg-blue-500 border-2 rounded-md shadow-md hover:opacity-60">Login</button>


                    <button type="button" className="p-2 px-4 text-white bg-blue-500 border-2 rounded-md">Cancel</button>

                </div>
                <div className="flex items-center mt-4 space-x-4">

                    <div>Show Password</div>
                    <div><input type="checkbox" /></div>
                </div>

            </form>
        </>


    );

};
Login.defaultProps = {
}

export default React.memo(Login);
