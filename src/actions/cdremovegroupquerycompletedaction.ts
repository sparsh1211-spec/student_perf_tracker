import { Group } from "../models/Group";
import { CURRENT_SELECTED_GROUP, CURRENT_SELECTED_GROUP_COMPLETE, CURRENT_SELECTED_GROUP_ID, GROUPS_QUERY_COMPLETED, GROUP_FETCH_ONE_ERROR } from "./actions.constants";

export const groupsQueryCompletedAction = (query: string, groupsById: {[id:number]:Group}) => ({
    type: GROUPS_QUERY_COMPLETED,
    payload: { query, groupsById },
});



export const currentSelectedGroupAction = (id: number) => ({
    type: CURRENT_SELECTED_GROUP_ID,
    payload: id,
});

export const addCurrentSelectedGroupAction = (group: Group) => ({
    type: CURRENT_SELECTED_GROUP,
    payload: group,
});

export const currentSelectedGroupComplete = (group: Group) => ({
    type: CURRENT_SELECTED_GROUP_COMPLETE,
    payload: group
})

export const fetchOneGroupError = (id: number,msg: string) => ({
    type: GROUP_FETCH_ONE_ERROR,
    payload:{id,msg}
})