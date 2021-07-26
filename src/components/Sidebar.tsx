
// import { Dialog, Transition } from "@headlessui/react";
import React, {  } from "react";


// import { AiOutlineDown } from 'react-icons/ai';
import { useHistory } from "react-router-dom";
import { logout } from "../api";
import Button from "./Button/Button";

interface Props {

}

const Sidebar: React.FC<Props> = (props) => {

    // const [isMenuOpen, setIsMenuOpen] = useState(false);
    // const [isAnimating, setIsAnimating] = useState(false);

    const history=useHistory();
    return (

    

            

                <div className="w-1/4 h-screen bg-gray-400">

                    <div>SIDEBARR</div>
                    
                    {/* <button className="items-center justify-center w-56 p-2 text-center bg-white border-2 rounded-lg shadow-md"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="inline w-4 h-4 mr-2 feather feather-home"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg><span className="mr-2 text-sm font-semibold tracking-widest text-gray-700">Dashboard</span><AiOutlineDown className="inline w-3 h-3" onClick={isAnimating ? undefined : () => setIsMenuOpen((open) => !open)} /></button>
 */}



                

                <Button onClick={()=>{
                    logout();
                    history.push("/auth/login");
                }}>Logout</Button>




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
         */}
        </div>
    );

};
Sidebar.defaultProps = {
}

export default React.memo(Sidebar);
