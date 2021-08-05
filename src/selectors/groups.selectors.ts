import { createSelector } from "reselect";
// import { AppState } from "../store";
import { groupStateSelector } from "./app.selectors";

// export const groupQuerySelector = (state: AppState) => {
//     const groupState = groupStateSelector(state);
//     return groupState.query;
// };

// export const groupsSelector=(state:AppState)=>{
//     const groupIds=state.groups.queryMap[state.groups.query] || [];
//     const groups=groupIds.map(id=>state.groups.byId[id]);
//     return groups;
// }


export const groupQuerySelector = createSelector([groupStateSelector],
    (groupState) => groupState.query);


export const groupQueryMapSelector = createSelector([groupStateSelector],(groupState)=>groupState.queryMap)

export const groupByIdSelector = createSelector([groupStateSelector],(groupState)=>groupState.byId)


// export const groupSelector = (state: AppState) => {
//     const query = groupQuerySelector(state);

//     const queryMap=groupQueryMapSelector(state);
//     const byId=groupByIdSelector(state)

//     const groupsIds = queryMap[query] || [];
//     const groups = groupsIds.map((id)=>byId[id]);
//     return groups;
// }

export const groupSelector = createSelector(
    [groupQuerySelector, groupByIdSelector, groupQueryMapSelector], (query, byId, queryMap) => {

        const groupsIds = queryMap[query] || [];
        const groups = groupsIds.map((id) => byId[id]);
        return groups;
    })
