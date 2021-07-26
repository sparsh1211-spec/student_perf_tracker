
// import { setupMaster } from "cluster";
import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import { isTypeNode } from "typescript";
import { fetchGroups } from "../api";
import logo from "./logonew.svg";
// import { FaUserCircle, FaSpinner } from 'react-icons/fa';
import { AiOutlineSearch } from 'react-icons/ai';

// interface Results {
//     gender: string;
//     name: {
//         title: string
//         first: string
//         last: string
//     }
//     creator:{
        
//     }
//     picture: {
//         large: string
//         thumbnail: string
//         medium: string
//     }
// }

// interface Response {
//        results: Results[]
// }
interface Props{}
const Dashboard: React.FC<Props> = () => {
     const [user, setUser] = useState<any[]>([])

     const [searchContent, setSearchContent] = useState("");
    //  const [group, setGroup] = useState<any[]>([]);
     const [filteredGroup, setFilteredGroup] = useState<any[]>([]);

    // useEffect(() => {
    //     fetchGroup()
    //         .then((response) => {
    //             console.log("Group fetched!");
    //             setGroup(response.data);
    //             setFilteredGroup(response.data);
    //         })
    //         .catch((error) => console.log(error.message));
    // }, []);

    

     const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
         setSearchContent(event.target.value);
     };

    useEffect(() =>{
        fetchGroups({ status: "all-groups" }).then((response) =>{
            setUser(response)
            setFilteredGroup(response)
        }).catch((error)=>console.log(error.message));
    },[])

    useEffect(() => {
        const filtered: any[]=[];
        user.forEach((value) => {
            if (value.name.startsWith(searchContent)) {
                filtered.push(value);
            }
        });
        setFilteredGroup(filtered);
        console.log(filtered);
     }, [searchContent,user]);

    
    return(

        
        <div>
            <div className="flex h-12 bg-black">
                <img src={logo} className="w-12 h-12" alt=""/>
                <p className="text-3xl font-semibold text-white">CORK</p>
                <form>
                    <div className="flex items-center mt-3 ml-12">
                    <AiOutlineSearch className="w-5 h-6 ml-12 text-white bg-gray-600"/>
                    <input onChange={handleSearch}  className="w-64 bg-gray-600 outline-none " placeholder="Search..."></input>
                    
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="text-white ml-96 feather feather-mail"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="text-white feather feather-bell"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path><path d="M13.73 21a2 2 0 0 1-3.46 0"></path></svg></div>
                  
                </form>
            </div>
            {filteredGroup.map((item,index) =>{
                const itemnumber=index
               if(itemnumber%2===0){
                return(
                   <div className="flex w-screen text-black bg-gray-200 border-b-4 border-blue-800 hover:bg-gray-300">
                       <img className="w-12 h-12 mt-6 mr-8 rounded-full" src={item.group_image_url} alt="" />
                       <div className="flex flex-col">
                           <div className="mb-6 text-2xl font-bold"> {item.name}</div>
                           <div className="mb-6 text-base font-semibold text-gray-600"> {item.description}</div>
                       </div>
                   </div>
                    
                )}
                else{
                return(
                <div className="flex w-screen text-white bg-gray-600">
                <img className="w-12 h-12 mt-6 mr-8 rounded-full" src={item.group_image_url} alt="" />
                <div className="flex flex-col">
                    <div className="mb-6 text-2xl font-bold"> {item.name}</div>
                    <div className="mb-6 text-base font-semibold"> {item.description}</div>
                </div>
            </div>
             
         )}
            })}
            
        </div>
    );

};
Dashboard.defaultProps = {
}

export default React.memo(Dashboard);
