
import { Dialog, Transition } from "@headlessui/react";
import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";
// import OutlineButton from "./components/Button/OutlineButton";

// import OutlineButton from "./components/Button/OutlineButton";

interface Props {

}

const Header: React.FC<Props> = (props) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isAnimating, setIsAnimating] = useState(false);
    return (
        <>
            <div className="flex items-center h-12 text-center bg-gray-100 border-b border-gray-300">
                <div className="ml-4 mr-4"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-menu"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg></div>
                <div className="text-lg font-bold">Dashboard</div>
                <div className="flex justify-end flex-1 mr-2"><button className="w-24 p-2 text-xs font-normal tracking-wider text-left border border-gray-400 rounded-md" onClick={isAnimating ? undefined : () => setIsMenuOpen((open) => !open)}>Settings</button> </div>
                <Transition.Root show={isMenuOpen} as={Fragment}
                    beforeLeave={() => setIsAnimating(true)}
                    afterLeave={() => setIsAnimating(false)}
                >
                    <Dialog open={isMenuOpen} onClose={setIsMenuOpen}>
                        <Transition.Child as={Fragment}
                            enter="transition-transform duration-100"
                            enterFrom="translate-z-0"
                            enterTo="translate-z-full"
                            leave="transition-transform duration-100"
                            leaveFrom="translate-z-full"
                            leaveTo="translate-z-0">
                            <div className="absolute flex w-40 h-48 transform bg-gray-100 border border-gray-200 shadow-md justify-left top-28 right-4"><ul className="space-y-4">
                                <li><Link to="/usersettings" className="p-2 text-xs font-semibold tracking-widest text-gray-500">Settings</Link></li>
                                <li><a href="google.com" className="p-2 text-xs font-semibold tracking-widest text-gray-500">Mail</a></li>
                                <li><a href="google.com" className="p-2 text-xs font-semibold tracking-widest text-gray-500">Print</a></li>
                                <li><a href="google.com" className="p-2 text-xs font-semibold tracking-widest text-gray-500">Download</a></li>
                                <li><a href="google.com" className="p-2 text-xs font-semibold tracking-widest text-gray-500">Share</a></li></ul></div>



                        </Transition.Child>
                    </Dialog>
                </Transition.Root>

            </div>


        </>
    );

};
Header.defaultProps = {
}

export default React.memo(Header);

