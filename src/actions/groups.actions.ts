// import { bindActionCreators } from "redux";
import { bindActionCreators } from "redux";
import { Group } from "../models/Group";
import { store } from "../store";
import { CURRENT_SELECTED_GROUP, CURRENT_SELECTED_GROUP_ID, GROUPS_QUERY } from "./actions.constants";
import { groupsQueryCompletedAction } from "./cdremovegroupquerycompletedaction";
// import { store } from "../store";


export const groupsQueryAction = (query: string) => ({
    type: GROUPS_QUERY,
    payload:query,
});


// export const groupsQueryCompletedAction = (query: string, groups: Group[]) => ({
//     type: GROUPS_QUERY_COMPLETED,
//     payload: { query, groups },
// });


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
