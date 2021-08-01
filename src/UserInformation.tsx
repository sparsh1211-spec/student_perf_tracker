
import React from "react";
import { useSelector } from "react-redux";
// import AppContext from "./App.context";
import Button from "./components/Button/Button";
import OutlineButton from "./components/Button/OutlineButton";
import { User } from "./models/User";
import { AppState } from "./store";
// import Sidebar from "./components/Sidebar";
// import { Link } from "react-router-dom";
// import { User } from "./models/User";

interface Props {
}

const UserInformation: React.FC<Props> = () => {
    const user = useSelector<AppState, User | undefined>((state) => state.me);
  
    return (
        <>
            <div className="ml-16">
                <div className="mt-4 mb-4 text-lg font-semibold text-gray-600">GENERAL INFORMATION</div>
                <hr/>
                <div className="flex mt-4">
                    <div className="flex flex-col h-48 pr-12 space-y-2 border-r-2">
                        <div><img src={user!.profile_pic_url} alt="avatar" className="rounded-md h-18 w-36"></img></div>
                        <div><a href="google.com" className="font-semibold tracking-wide text-indigo-600">Upload Picture</a></div>

                    </div>
                    <div className="flex flex-col ml-8 space-y-8">
                        <div className="flex space-x-8">
                            <form>
                                <div className="flex flex-col flex-1 text-sm font-semibold"><label className="pl-2 text-gray-400">First Name*</label>
                                    <input placeholder="First Name" value={user!.first_name} className="h-10 pl-2 border-2 border-gray-300 rounded-lg outline-none w-96"></input>
                                </div>
                            </form>
                            <form>
                                <div className="flex flex-col flex-1 text-sm font-semibold text-gray-600"><label className="pl-2 text-gray-400">Middle Name</label>
                                    <input placeholder="Middle Name" className="h-10 pl-2 border-2 border-gray-300 rounded-lg outline-none w-96" value={user!.middle_name}></input>
                                </div>
                            </form>
                        </div>
                        <div> <form>
                            <div className="flex flex-col flex-1 text-sm font-semibold text-gray-600"><label className="pl-2 text-gray-400">Last Name*</label>
                                <input placeholder="Last Name" className="w-full h-10 pl-2 border-2 border-gray-300 rounded-lg outline-none" value={user!.last_name}></input>
                            </div>
                        </form></div>
                    </div>
                </div>
                <div className="flex space-x-8">
                    <form>
                        <div className="flex flex-col text-sm font-semibold text-gray-600"><label className="pl-2 text-gray-400">Date of Birth*</label>
                            <input placeholder="DOB" className="h-10 pl-2 border-2 border-gray-300 rounded-lg outline-none w-96 " type="" value={user!.birth_date+"/"+user!.birth_month+"/"+user!.birth_year}></input>
                        </div>
                    </form>
                    <div className="flex flex-col space-y-4">
                        <div className=""><form>
                            <div className="flex flex-col text-sm font-semibold text-gray-600"><label className="pl-2 text-gray-400">Email*</label>
                                <input placeholder="Email" className="h-10 pl-2 border-2 border-gray-300 rounded-lg outline-none w-96 " type="email" value={user!.email}></input>
                            </div>
                        </form>
                        </div>
                        <div><form>
                            <div className="flex flex-col text-sm font-semibold text-gray-600"><label className="pl-2 text-gray-400">Education*</label>
                                <input className="h-10 pl-2 border-2 border-gray-300 rounded-lg outline-none w-96 " type="text" value={user!.education}></input>
                            </div>
                        </form>
                        </div>
                    </div>
                </div>
                <div className="flex mt-12 space-x-8">
                    <Button theme="dark">Save Changes</Button>
                    <OutlineButton theme="danger">Reset All</OutlineButton>
                </div>
            </div>
        </>
    );
};
UserInformation.defaultProps = {
}

export default React.memo(UserInformation);
