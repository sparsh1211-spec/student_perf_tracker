
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { groupActions } from "../../actions/groups.actions";
import { fetchGroup } from "../../api/individualgroup";
import { currentSelectedGroupSelector } from "../../selectors/groups.selectors";
import { useAppSelector } from "../../store";

interface Props{
   
}

const Group: React.FC<Props>=(props) => {
    const group = useAppSelector(currentSelectedGroupSelector);
    const {id}=useParams<any>()
    useEffect(() => {

    fetchGroup({id}).then((response)=>{groupActions.selectedGroup(response)
    groupActions.selectedGroupId(id)})
    
    }, [id])
    return (
        <>
           {group&&<div>
            <div> <img className="w-12 h-12 m-4 rounded-full" src={group.group_image_url} alt="" onError={(e: any) => { e.target.onerror = null; e.target.src = "https://www.pngjoy.com/pngm/131/2663889_group-of-people-icon-avatar-group-icon-png.png" }} /></div>
           <div>ID={group.id} {" "} Name={group.name} </div>
           
           <div>{group.description}</div></div>
          
        }
        </>
    );

};
Group.defaultProps={
}

export default React.memo(Group);
