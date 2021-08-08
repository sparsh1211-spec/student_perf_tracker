// import { bindActionCreators } from "redux";
import { bindActionCreators } from "redux";
import { Group } from "../models/Group";
import { store } from "../store";
import { CURRENT_SELECTED_GROUP, CURRENT_SELECTED_GROUP_ID, GROUPS_QUERY, GROUPS_QUERY_COMPLETED } from "./actions.constants";
// import { store } from "../store";


const groupsQueryAction = (query: string) => ({
    type: GROUPS_QUERY,
    payload: query,
});


const groupsQueryCompletedAction = (query: string, groups: Group[]) => ({
    type: GROUPS_QUERY_COMPLETED,
    payload: { query, groups },
});


const currentSelectedGroupAction = (id: number) => ({
    type: CURRENT_SELECTED_GROUP_ID,
    payload: id,
});

const addCurrentSelectedGroupAction = (group: Group) => ({
    type: CURRENT_SELECTED_GROUP,
    payload: group,
});

export const groupActions = bindActionCreators({
    query: groupsQueryAction,
    queryCompleted: groupsQueryCompletedAction,
    selectedGroupId: currentSelectedGroupAction,
    selectedGroup: addCurrentSelectedGroupAction,
}, store.dispatch)
