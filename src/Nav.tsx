
import React from "react";
import { AiOutlineSearch } from "react-icons/ai";
 import logo from "./logonew.svg";
// import { fetchGroups } from "./api";

interface Props{
   
}

const Nav: React.FC<Props>=(props) => {
   
    return (
        <>
           <div className="z-20 flex h-12 bg-black">
                <img src={logo} className="w-10 h-10" alt=""/>
                <p className="text-3xl font-semibold text-white">CORK</p>
                <form>
                    <div className="flex items-center m-auto mt-3">
                        <div className="ml-12">
                    <AiOutlineSearch  className="items-center inline w-5 text-white h-7"/>
                    <input className="w-64 outline-none" placeholder="Search..."></input>
                    </div>
                    
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="text-white ml-96 feather feather-mail"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="text-white feather feather-bell"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path><path d="M13.73 21a2 2 0 0 1-3.46 0"></path></svg></div>
                  
                </form>
            </div>  
        </>
    );

};
Nav.defaultProps={
}

export default React.memo(Nav);
