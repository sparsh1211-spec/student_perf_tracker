
// import { setupMaster } from "cluster";
import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import { isTypeNode } from "typescript";
// import { fetchGroups } from "../../middlewares/groups.middleware";
// import logo from "../logonew.svg";
// import { FaUserCircle, FaSpinner } from 'react-icons/fa';
import { AiOutlineSearch } from 'react-icons/ai';
import Button from '../../components/Button/Button'
// import { Group } from "../../models/Group";
// import { AppState } from "../../store";
// import { useDispatch} from "react-redux";
import { useAppSelector } from "../../store";
// import { groupActions } from "../../actions/groups.actions";
import { groupQuerySelector, groupsLoadingSelector, groupsSelector } from "../../selectors/groups.selectors";
import { FaSpinner } from "react-icons/fa";
import { groupsQueryAction } from "../../actions/groups.actions";
import { useDispatch } from "react-redux";

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
interface Props { }
const Dashboard: React.FC<Props> = () => {
    console.log("hello");
    // const [user, setUser] = useState<any[]>([])
    const groups = useAppSelector(groupsSelector);
    const dispatch=useDispatch();


    // const [query, setQuery] = useState("");
    const query = useAppSelector(groupQuerySelector);
    const loading=useAppSelector(groupsLoadingSelector)
    const [offset, setOffset] = useState(0);

    //  const [searchContent, setSearchContent] = useState("");
    //  const [group, setGroup] = useState<any[]>([]);
    //  const [filteredGroup, setFilteredGroup] = useState<any[]>([]);


    // useEffect(() => {
    //     fetchGroup()
    //         .then((response) => {
    //             console.log("Group fetched!");
    //             setGroup(response.data);
    //             setFilteredGroup(response.data);
    //         })
    //         .catch((error) => console.log(error.message));
    // }, []);



    //  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    //      setSearchContent(event.target.value);
    //  };

    // useEffect(() => {
    //     fetchGroups({ status: "all-groups", query}).then((groups) => groupActions.queryCompleted(query,groups));
    // }, [query])//eslint-disable-line

    // useEffect(() => {
    //     const filtered: any[]=[];
    //     user.forEach((value) => {
    //         if (value.name.startsWith(searchContent)) {
    //             filtered.push(value);
    //         }
    //     });
    //     setFilteredGroup(filtered);
    //     console.log(filtered);
    //  }, [searchContent,user]);

    return (
        <>
        <div className="">
                <form>
                    <div className="flex items-center mt-3 mb-12">
                        <div className="ml-64 border-b-2 border-gray-600">
                            <AiOutlineSearch className="inline w-5 h-6 mr-12" />
                            <input value={query} onChange={(event) => {
                                dispatch(groupsQueryAction(event.target.value));
                            }} className="w-64 outline-none " placeholder="Search group here"></input>
                            {loading&&<FaSpinner className="mt-4 animate-spin" />}
                        </div>

                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="text-white ml-96 feather feather-mail"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="text-white feather feather-bell"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path><path d="M13.73 21a2 2 0 0 1-3.46 0"></path></svg></div>

                </form>
                <div>
                </div>
                {groups.map((item, index) => {
                    const itemnumber = index
                    if (itemnumber % 2 === 0) {
                        return (

                            <div className="flex ml-64 text-black bg-gray-200 border border-black rounded-md shadow-2xl w-96 hover:bg-gray-300 ">
                                <img className="w-12 h-12 m-4 rounded-full" src={item.group_image_url} alt="" onError={(e: any) => { e.target.onerror = null; e.target.src = "https://www.pngjoy.com/pngm/131/2663889_group-of-people-icon-avatar-group-icon-png.png" }} />
                                <div className="flex flex-col">
                                    <div className="mb-6 text-2xl font-bold text-gray-600"> {item.name}</div>
                                    <div className="mb-6 text-base font-semibold text-gray-600"> {item.description}</div>
                                </div>
                            </div>
                        )
                    }
                    else {
                        return (

                            <div className="flex ml-64 text-white bg-gray-600 rounded-md shadow-2xl w-96 hover:bg-gray-900">
                                <img className="w-12 h-12 m-4 rounded-full" src={item.group_image_url} alt="Group-Icon" onError={(e: any) => { e.target.onerror = null; e.target.src = "https://www.pngjoy.com/pngm/131/2663889_group-of-people-icon-avatar-group-icon-png.png" }} />
                                <div className="flex flex-col">
                                    <div className="mb-6 text-2xl font-bold text-gray-300"> {item.name}</div>
                                    <div className="mb-6 text-base font-semibold text-gray-300"> {item.description}</div>
                                </div>
                            </div>
                        )
                    }
                })}<div className="ml-96">{!loading && groups.length === 0 && "No data"}</div>
                <Button onChange={() => setOffset(offset + 40)}>Change</Button>
            </div>
        </>
    );
};
Dashboard.defaultProps = {
}

export default React.memo(Dashboard);
