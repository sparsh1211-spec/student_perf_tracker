
import React, { useEffect } from "react";
import { groupActions } from "../../actions/groups.actions";
import { fetchGroups } from "../../api/groups";
import { groupQuerySelector, groupsSelector } from "../../selectors/groups.selectors";
import { useAppSelector } from "../../store";
import {GoSearch} from "react-icons/go"
import { useHistory } from "react-router-dom";

interface Props {

}

const Groups: React.FC<Props> = () => {
    const history=useHistory();
    const groups = useAppSelector(groupsSelector);
    const query = useAppSelector(groupQuerySelector);
    useEffect(() => {
        fetchGroups({ status: "all-groups", query }).then((groups) => groupActions.queryCompleted(query, groups));
    }, [query])//eslint-disable-line

    
    return (
        <>
            <div className="ml-24">
                <div className="flex mt-4">
                <GoSearch className="w-6 h-12 pl-2 bg-gray-200 border-b border-black"/>
                    <input value={query} onChange={(event) => {
                        groupActions.query(event.target.value)
                    }} className="h-12 pl-2 mb-12 bg-gray-200 border-b border-black outline-none w-96" placeholder="Search here"></input>
                </div>
                {groups.map((item, index) => {

                    const itemnumber = index;
                    if (itemnumber % 2 === 0) {
                        return (
                            <div onClick={()=>{groupActions.selectedGroupId(item.id)
                            history.push("/groups/" + item.id)}} className="pl-4 text-black bg-gray-400 cursor-pointer ">{item.name}</div>
                        );
                    }
                    return (<div onClick={()=>{groupActions.selectedGroupId(item.id)
                        history.push("/groups/" + item.id)}} className="pl-4 text-white bg-gray-800 cursor-pointer">{item.name}</div>)
                })}</div>

        </>
    )
}
Groups.defaultProps = {
}

export default React.memo(Groups);
