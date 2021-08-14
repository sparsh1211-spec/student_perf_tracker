
import React, { useEffect } from "react";
import { FaSpinner } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { currentSelectedGroupAction } from "../../actions/cdremovegroupquerycompletedaction";
import { groupByIdSelector } from "../../selectors/groups.selectors";
import { useAppSelector } from "../../store";

interface Props{
   
}

const GroupDetails: React.FC<Props>=(props) => {

    const id=+(useParams<{id:string}>().id);
    const groupsByIds=useAppSelector(groupByIdSelector);
    
    const dispatch=useDispatch()
    const group=groupsByIds[id];
    
    useEffect(()=>{
           dispatch(currentSelectedGroupAction(id));//eslint-disable-next-line
    },[id])

    if(!group){
        return <div className="text-red-500">Loading required Group...<FaSpinner className="mt-4 animate-spin" /></div>
    }
    return (
        <>
        <div className="flex flex-col">
            <div>This is detail page of {group.name} Id={group.id}</div>
            <div className="flex space-x-4">
            <div><Link to={"/groups/" + (id+1)} className="text-green-600 underline">Next</Link></div>
            <div><Link to={"/groups/" + (id-1)} className="text-red-600 underline">Prev</Link></div>
            </div>
            <div><Link to="/groups" className="text-blue-600 underline">Back to Groups page</Link></div>
            </div>
        </>
    );

};
GroupDetails.defaultProps={
}

export default React.memo(GroupDetails);
