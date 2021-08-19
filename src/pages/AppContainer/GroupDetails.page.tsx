
import React, { useEffect } from "react";
import { FaSpinner } from "react-icons/fa";
// import { FaSpinner } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { currentSelectedGroupAction } from "../../actions/cdremovegroupquerycompletedaction";
import Alert from "../../components/Alert/Alert";
import { groupByIdSelector, groupCreatorSelector, groupInvMemSelector, groupParticipantsSelector, selectedErrorSelector} from "../../selectors/groups.selectors";
import { useAppSelector } from "../../store";

interface Props{
   
}

const GroupDetails: React.FC<Props>=(props) => {

    const id=+(useParams<{id:string}>().id);
    const groupsByIds=useAppSelector(groupByIdSelector);
    
    const dispatch=useDispatch()
    const group=groupsByIds[id];
    const error=useAppSelector(selectedErrorSelector);
    const invitedMem=useAppSelector(groupInvMemSelector);
    const participants=useAppSelector(groupParticipantsSelector);
    const creator=useAppSelector(groupCreatorSelector);

    // const loading=useAppSelector(selectedLoadingSelector)
    
    useEffect(()=>{
           dispatch(currentSelectedGroupAction(id));//eslint-disable-next-line
    },[id])

    if(error){
        console.log(error);
        return (
            <>
           <Alert className="justify-center w-full h-24 text-3xl font-bold text-center" theme="danger">{error + " Please try searching with a different ID. " }</Alert>
            </>
        )
    }

    if(!group){
        return <div className="text-red-500">Loading required Group...<FaSpinner className="mt-4 animate-spin" /></div>
       
    }
    return (
        <>
        <div className="flex flex-col">
            
            {group&&<div> {group.name} Id={group.id}description={group.description}<img className="w-12 h-12 m-4 rounded-full" src={group.group_image_url} alt="" onError={(e: any) => { e.target.onerror = null; e.target.src = "https://www.pngjoy.com/pngm/131/2663889_group-of-people-icon-avatar-group-icon-png.png" }} /></div>}
            <div className="flex space-x-8">
           
            <div><Link to={"/groups/" + (id-1)} className="text-red-600 underline">Prev</Link></div>
            <div><Link to={"/groups/" + (id+1)} className="text-green-600 underline">Next</Link></div>
            </div>
            <div><Link to="/groups" className="text-blue-600 underline">Back to Groups page</Link></div>
            <div className="p-2 m-4 bg-white rounded-lg ">
        <p>group creator:{creator && creator.first_name}</p>
        { participants !== [] && <div>group participants: { participants.map((par) => <p key={par && par.id}>{ par && par.first_name}</p>)}</div>}
        { invitedMem !== [] && <div> invited Members : {invitedMem.map((mem) => <p key = {mem &&  mem.id}>{mem && mem.first_name}</p>)}</div>}
      </div>
    </div>
        </>
    );

};
GroupDetails.defaultProps={
}

export default React.memo(GroupDetails);
