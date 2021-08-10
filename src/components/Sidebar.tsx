
// import { Dialog, Transition } from "@headlessui/react";
import { Dialog, Transition } from "@headlessui/react";
import React, { Fragment, useState } from "react";
// import { useSelector } from "react-redux";


import { FiChevronDown } from 'react-icons/fi';
import { Link, NavLink, useHistory } from "react-router-dom";
import { logout } from "../api/auth";
// import { User } from "../models/User";
// import AppContext from "../App.context";
// import { AppState } from "../store";
// import { User } from "../models/User";
import Button from "./Button/Button";
// import OutlineButton from "./Button/OutlineButton";

interface Props {


}

const Sidebar: React.FC<Props> = () => {

    // const {user}=useContext(AppContext);
    // const user = useSelector<AppState, User | undefined>((state) => state.me);
    // const dispatch = useDispatch();

     const [isMenuOpen, setIsMenuOpen] = useState(false);
     const [isAnimating, setIsAnimating] = useState(false);

    const history = useHistory();
    return (
        <>





            <div className="h-screen bg-gray-200 border-r border-gray-300 w-96">

                <div className="">
                            <Link to="/dashboard"><button  className="flex items-center h-10 mt-4 ml-12 space-x-8 text-xs font-bold tracking-widest text-center text-gray-600 bg-gray-100 border rounded-md shadow-md w-60 hover:bg-gray-400"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="inline m-4 feather feather-home"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>Dashboard<FiChevronDown  onClick={isAnimating ? undefined : () => setIsMenuOpen((open) => !open)}  className="inline w-4 h-4"  /></button></Link>
                            
                    <Transition.Root show={isMenuOpen} as={Fragment}
                        beforeLeave={() => setIsAnimating(true)}
                        afterLeave={() => setIsAnimating(false)}
                    >
                        <Dialog open={isMenuOpen} onClose={setIsMenuOpen}>
                            <Transition.Child as={Fragment}
                                enter="transition-transform duration-300"
                                enterFrom="translate-y-0"
                                enterTo="translate-y-8"
                                leave="transition-transform duration-300"
                                leaveFrom="translate-y-8"
                                leaveTo="translate-y-0">
                                <div className="absolute flex flex-col justify-start space-y-4 text-left text-gray-500 ease-in-out transform top-44 left-24 bg-gray items-left">
                                    <button><ul><li className="text-sm font-semibold tracking-wider list-disc hover:text-blue-600 ">Sales</li>
                                        <li className="text-sm font-semibold tracking-wider list-disc hover:text-blue-600 ">Analytics</li></ul></button></div>
                                         
                                         </Transition.Child>
                                 </Dialog>
                             </Transition.Root>

                                    
                            
                            </div>







                {/* <img className="w-24 h-24 rounded-full" src={user!.profile_pic_url} alt="hello"></img>
                <span className="text-2xl font-semibold text-white">Welcome {user!.first_name} {user!.middle_name} {user!.last_name} </span>
                <div className="font-bold">Id: {user!.id} Role: {user!.role} Phone:{user!.phone_number}</div> */}

                {/* <button className="items-center justify-center w-56 p-2 text-center bg-white border-2 rounded-lg shadow-md"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="inline w-4 h-4 mr-2 feather feather-home"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg><span className="mr-2 text-sm font-semibold tracking-widest text-gray-700">Dashboard</span><AiOutlineDown className="inline w-3 h-3" onClick={isAnimating ? undefined : () => setIsMenuOpen((open) => !open)} /></button>
 */}









                {/* 

                    <Transition.Root show={isMenuOpen} as={Fragment}
                        beforeLeave={() => setIsAnimating(true)}
                        afterLeave={() => setIsAnimating(false)}
                    >
                        <Dialog open={isMenuOpen} onClose={setIsMenuOpen}>
                            <Transition.Child as={Fragment}
                                enter="transition-transform duration-300"
                                enterFrom="translate-y-11"
                                enterTo="translate-y-0"
                                leave="transition-transform duration-300"
                                leaveFrom="translate-y-0"
                                leaveTo="translate-y-11">
                                <div className="relative left-0 right-0 ml-4 bg-gray top-4">
                                    <button><ul><li>sales</li>
                                        <li>analytics</li></ul></button></div>
                                         
                                         </Transition.Child>
                                 </Dialog>
                             </Transition.Root>
         */} <Button className="m-24" theme="dark" onClick={() => {
                    logout();
                    history.push("/auth/login");
                }}>Logout</Button>

                <NavLink to="/groups" className="block p-1 pl-2 mb-4 ml-20 text-white bg-gray-600 border border-black rounded-full w-44 hover:opacity-50"  activeClassName="hidden">GO TO GROUPS PAGE</NavLink>
                <Link to="/recordings" className="p-2 ml-20 text-white bg-gray-600">Go to recordings page</Link>
            </div>


        </>
    );

};
Sidebar.defaultProps = {
}

export default React.memo(Sidebar);
