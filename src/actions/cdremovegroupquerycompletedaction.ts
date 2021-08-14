import { Group } from "../models/Group";
import { CURRENT_SELECTED_GROUP, CURRENT_SELECTED_GROUP_COMPLETE, CURRENT_SELECTED_GROUP_ID, GROUPS_QUERY_COMPLETED } from "./actions.constants";

export const groupsQueryCompletedAction = (query: string, groups: Group[]) => ({
    type: GROUPS_QUERY_COMPLETED,
    payload: { query, groups },
});



export const currentSelectedGroupAction = (id: number) => ({
    type: CURRENT_SELECTED_GROUP_ID,
    payload: id,
});

export const addCurrentSelectedGroupAction = (group: Group) => ({
    type: CURRENT_SELECTED_GROUP,
    payload: group,
});

export const currentSelectedGroupComplete=(group:Group)=>({
    type:CURRENT_SELECTED_GROUP_COMPLETE,
    payload:group
})