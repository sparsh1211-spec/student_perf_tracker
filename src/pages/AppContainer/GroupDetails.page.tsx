
import React, { useEffect } from "react";
import { FaSpinner } from "react-icons/fa";
import { GrNext,GrPrevious } from "react-icons/gr";
// import { FaSpinner } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { currentSelectedGroupAction } from "../../actions/cdremovegroupquerycompletedaction";
import Alert from "../../components/Alert/Alert";
import { selectedErrorSelector, selectedGroupSelector, selectedLoadingSelector } from "../../selectors/groups.selectors";
import { useAppSelector } from "../../store";

interface Props {

}

const GroupDetails: React.FC<Props> = (props) => {

    const id = +(useParams<{ id: string }>().id);
    // const groupsByIds=useAppSelector(groupByIdSelector);
    const group = useAppSelector(selectedGroupSelector)

    const dispatch = useDispatch()
    // const group=groupsByIds[id];
    const error = useAppSelector(selectedErrorSelector);

    const loading = useAppSelector(selectedLoadingSelector)

    useEffect(() => {
        dispatch(currentSelectedGroupAction(id));//eslint-disable-next-line
    }, [id])

    

    if (!group&&loading) {
        return <div className="text-red-500">Loading required Group...<FaSpinner className="mt-4 animate-spin" /></div>;

    }
   

    if (error) {
        console.log(error);
        return (
            <>
                <Alert className="justify-center w-full h-24 text-3xl font-bold text-center" theme="danger">{error + " Please try searching with a different ID. "}</Alert>
            </>
        )
    }
    if(loading){
        return <div className="z-30 m-40 text-2xl font-semibold text-red-600">Fetching required Group. Please wait...<FaSpinner className=" animate-spin" /></div>;
    }
   
    return (
        <>
            {/* <div className="flex flex-col items-center justify-center font-semibold text-center text-gray-200 bg-gray-500 h-96"> */}
            {/* {group &&<div><div><img className="w-24 h-24 rounded-full" src={group.group_image_url} alt="" onError={(e: any) => { e.target.onerror = null; e.target.src = "https://www.pngjoy.com/pngm/131/2663889_group-of-people-icon-avatar-group-icon-png.png" }} /></div>
                    <div>{group.name}</div>
                    <div>Id={group.id}</div>
                    <div>creator={group.creator?.first_name + " " + group.creator?.middle_name + " " + group.creator?.last_name}</div>
                    <div>description={group?.description}</div>
                    <div> invitedMem={group?.invitedMembers.map((mem) => <div>{mem}</div>)}</div>
                    <div>participants={group?.participants}</div></div>} */}

            {group&& <div className="flex flex-col items-center ml-12 text-center">
                
                <div><img className="w-20 h-20 p-2 mt-2 bg-gray-400 rounded-full" src={group.group_image_url} alt="" onError={(e: any) => { e.target.onerror = null; e.target.src = "https://cdn1.iconfinder.com/data/icons/developer-set-2/512/multiple-512.png" }} /></div>
                <div className="text-3xl font-bold tracking-wide">{group.name+"("+group.id+")"}</div>
                <div className="mb-12 text-lg font-extrabold tracking-wider">{group.description}</div>
                <div className="flex flex-col mb-12 ml-12 space-y-2 text-left">
                <div className="text-lg font-extrabold tracking-wide"><span className="underline">JOIN-CODE</span> : {group.join_code}</div>
                <div className="text-lg font-extrabold tracking-wide"><span className="underline">CREATED-AT</span> : {group.created_at}</div>
                <div className="text-lg font-extrabold tracking-wide"><span className="underline">CHAT-COUNT</span> : {group.chatCount}</div>
                <div className="text-lg font-extrabold tracking-wide"><span className="underline">CREATOR</span> : {group.creator?.first_name + " " + group.creator?.middle_name + " " + group.creator?.last_name}</div>
                <div className="text-lg font-extrabold tracking-wide"><span className="underline">INVITED-MEMBERS</span> : {group?.invitedMembers.map((M) => <div>{M}</div>)}</div>
                <div className="text-lg font-extrabold tracking-wide"><span className="underline">PARTICIPANTS</span> : {group?.participants.map((P) => <div>{P}</div>)}</div>
                </div>
                <div className="flex mb-2 space-x-8 text-3xl">
                <div><Link className="" to={"/groups/" + (id - 1)}><GrPrevious></GrPrevious></Link></div>
                <div><Link to={"/groups/" + (id + 1)}><GrNext></GrNext></Link></div>
            </div>
            <div><Link to="/groups" className="text-3xl font-semibold text-indigo-700 underline">Back to Groups page</Link></div> 
            </div>
            }

          
        </>
    );
};
GroupDetails.defaultProps = {
}

export default React.memo(GroupDetails);
