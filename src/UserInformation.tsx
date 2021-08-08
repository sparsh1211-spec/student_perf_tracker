
import React from "react";
// import { meUpdate } from "./api";
// import { useSelector, useStore } from "react-redux";
// import AppContext from "./App.context";
import Button from "./components/Button/Button";
import OutlineButton from "./components/Button/OutlineButton";
// import { User } from "./models/User";
import { useAppSelector } from "./store";
// import { AppState } from "./store";
// import Sidebar from "./components/Sidebar";
// import { Link } from "react-router-dom";
// import { User } from "./models/User";

interface Props {
}

const UserInformation: React.FC<Props> = () => {
    const userFirstName = useAppSelector((state) => state.users.byId[state.auth.id!].first_name);
    const userMiddleName = useAppSelector((state) => state.users.byId[state.auth.id!].middle_name);
    const userLastName = useAppSelector((state) => state.users.byId[state.auth.id!].last_name);
    // const userBirthDate = useAppSelector((state) => state.users.byId[state.auth.id!].birth_date);
    // const userBirthMonth = useAppSelector((state) => state.users.byId[state.auth.id!].birth_month);
    // const userBirthYear = useAppSelector((state) => state.users.byId[state.auth.id!].birth_year);
    const userProfilePic = useAppSelector((state) => state.users.byId[state.auth.id!].profile_pic_url);
    const userEmail = useAppSelector((state) => state.users.byId[state.auth.id!].email);
    const userEducation = useAppSelector((state) => state.users.byId[state.auth.id!].education);
   
    
  
    return (
        <>
            <div className="ml-16">
                <div className="mt-4 mb-4 text-lg font-semibold text-gray-600">GENERAL INFORMATION</div>
                <hr/>
                <div className="flex mt-4">
                    <div className="flex flex-col h-48 pr-12 space-y-2 border-r-2">
                        <div>  <img className="w-12 h-12 m-4 rounded-full" src={userProfilePic} alt="" onError={(e: any) => { e.target.onerror = null; e.target.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSk6qxRGXu9_Mou7APQCryC7T3F7s_YXmCSWQ&usqp=CAU" }} /></div>
                        <div><a href="google.com" className="font-semibold tracking-wide text-indigo-600">Upload Picture</a></div>

                    </div>
                    <div className="flex flex-col ml-8 space-y-8">
                        <div className="flex space-x-8">
                            <form>
                                <div className="flex flex-col flex-1 text-sm font-semibold"><label className="pl-2 text-gray-400">First Name*</label>
                                    <input placeholder="First Name" value={userFirstName} className="h-10 pl-2 border-2 border-gray-300 rounded-lg outline-none w-96"></input>
                                </div>
                            </form>
                            <form>
                                <div className="flex flex-col flex-1 text-sm font-semibold text-gray-600"><label className="pl-2 text-gray-400">Middle Name</label>
                                    <input placeholder="Middle Name" className="h-10 pl-2 border-2 border-gray-300 rounded-lg outline-none w-96" value={userMiddleName}></input>
                                </div>
                            </form>
                        </div>
                        <div> <form>
                            <div className="flex flex-col flex-1 text-sm font-semibold text-gray-600"><label className="pl-2 text-gray-400">Last Name*</label>
                                <input placeholder="Last Name" className="w-full h-10 pl-2 border-2 border-gray-300 rounded-lg outline-none" value={userLastName}></input>
                            </div>
                        </form></div>
                    </div>
                </div>
                <div className="flex space-x-8">
                    <form>
                        <div className="flex flex-col text-sm font-semibold text-gray-600"><label className="pl-2 text-gray-400">Date of Birth*</label>
                            <input placeholder="DOB" className="h-10 pl-2 border-2 border-gray-300 rounded-lg outline-none w-96 " type=""></input>
                        </div>
                    </form>
                    <div className="flex flex-col space-y-4">
                        <div className=""><form>
                            <div className="flex flex-col text-sm font-semibold text-gray-600"><label className="pl-2 text-gray-400">Email*</label>
                                <input placeholder="Email" className="h-10 pl-2 border-2 border-gray-300 rounded-lg outline-none w-96 " type="email" value={userEmail}></input>
                            </div>
                        </form>
                        </div>
                        <div><form>
                            <div className="flex flex-col text-sm font-semibold text-gray-600"><label className="pl-2 text-gray-400">Education*</label>
                                <input className="h-10 pl-2 border-2 border-gray-300 rounded-lg outline-none w-96 " type="text" value={userEducation}></input>
                            </div>
                        </form>
                        </div>
                    </div>
                </div>
                <div className="flex mt-12 space-x-8">
                    <Button theme="dark" type="submit">Save Changes</Button>
                    <OutlineButton theme="danger">Reset All</OutlineButton>
                </div>
            </div>
        </>
    );
};
UserInformation.defaultProps = {
}

export default React.memo(UserInformation);
