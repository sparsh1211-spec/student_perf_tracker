
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { groupActions } from "../../actions/groups.actions";
import { fetchGroup } from "../../api/individualgroup";
import { currentSelectedGroupSelector } from "../../selectors/groups.selectors";
import { useAppSelector } from "../../store";

interface Props{
   
}

const Group: React.FC<Props>=(props) => {
    console.log("jai hind")
    const group = useAppSelector(currentSelectedGroupSelector);
    const {id}=useParams<any>()
    useEffect(() => {

    fetchGroup({id}).then((response)=>{groupActions.selectedGroup(response)
    groupActions.selectedGroupId(id)})
    
    }, [id])
    return (
        <>
        
           {group?<div className="p-2 text-2xl font-bold text-white bg-gray-600 rounded-md shadow-2xl h-72">
            <div> <img className="w-12 h-12 m-4 rounded-full" src={group.group_image_url} alt="" onError={(e: any) => { e.target.onerror = null; e.target.src = "https://www.pngjoy.com/pngm/131/2663889_group-of-people-icon-avatar-group-icon-png.png" }} /></div>
           <div className="mb-12 text-gray-300">ID={group.id} {" "} Name={group.name} Created at={group.created_at}  </div>
           <div>{group.description}</div></div>:<div>SORRY THE GROUP DOES NOT SEEM TO EXIST!! TRY SEARCHING WITH A DIFFERENT ID.</div>
        }
         
        </>
    );

};
Group.defaultProps={
}

export default React.memo(Group);
