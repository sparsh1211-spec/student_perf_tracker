// import { bindActionCreators } from "redux";
import { bindActionCreators } from "redux";
// import { Group } from "../models/Group";
import { store } from "../store";
import { GROUPS_QUERY } from "./actions.constants";
import { addCurrentSelectedGroupAction, currentSelectedGroupAction, groupsQueryCompletedAction } from "./cdremovegroupquerycompletedaction";
// import { store } from "../store";


export const groupsQueryAction = (query: string) => ({
    type: GROUPS_QUERY,
    payload:query,
});


// export const groupsQueryCompletedAction = (query: string, groups: Group[]) => ({
//     type: GROUPS_QUERY_COMPLETED,
//     payload: { query, groups },
// });




export const groupActions = bindActionCreators({
    query: groupsQueryAction,
    queryCompleted: groupsQueryCompletedAction,
    selectedGroupId: currentSelectedGroupAction,
    selectedGroup: addCurrentSelectedGroupAction,
}, store.dispatch)
