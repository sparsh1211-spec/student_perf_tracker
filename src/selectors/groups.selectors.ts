import { createSelector } from "reselect";
// import { AppState } from "../store";
// import { AppState } from "../store";
import { groupsStateSelector, peoplesStateSelector } from "./app.selectors";

// export const groupQuerySelector = (state: AppState) => {
//     const groupState = groupStateSelector(state);
//     return groupState.query;
// };

// export const groupsSelector=(state:AppState)=>{
//     const groupIds=state.groups.queryMap[state.groups.query] || [];
//     const groups=groupIds.map(id=>state.groups.byId[id]);
//     return groups;
// }


export const groupQuerySelector = createSelector([groupsStateSelector],
    (groupState) => groupState.query);

export const groupQueryMapSelector = createSelector([groupsStateSelector],
    (groupState) => groupState.queryMap)

export const groupByIdSelector = createSelector([groupsStateSelector],
    (groupState) => groupState.byId)

export const groupsLoadingSelector = createSelector([groupsStateSelector],
    (groupState) => groupState.loadingList)

export const selectedIdSelector = createSelector([groupsStateSelector],
    (groupState) => groupState.selectedId)

export const selectedGroupSelector = createSelector([groupByIdSelector, selectedIdSelector],
    (byId, id) => id !== undefined && byId[id])

export const selectedErrorSelector = createSelector([groupsStateSelector],
    (groupState) => groupState.errorOne)

export const selectedLoadingSelector = createSelector([groupsStateSelector],
    (groupState) => groupState.loadingOne)


export const peopleByIdSelector = createSelector([peoplesStateSelector],
    (peopleState) => peopleState.byId);


export const peopleMapSelector = createSelector([peoplesStateSelector],
    (peopleState) => peopleState.queryMap)


//  export const groupLoadingSelector = createSelector([groupQuerySelector, groupQueryLoadingSelector],
//  (query, loadingMap) => loadingMap[query])

// export const groupSelector = (state: AppState) => {
//     const query = groupQuerySelector(state);

//     const queryMap=groupQueryMapSelector(state);
//     const byId=groupByIdSelector(state)

//     const groupsIds = queryMap[query] || [];
//     const groups = groupsIds.map((id)=>byId[id]);
//     return groups;
// }

export const groupsSelector = createSelector(
    [groupQuerySelector,
        groupByIdSelector,
        groupQueryMapSelector,
    ],
    (query, byId, queryMap) => {

        const groupsIds = queryMap[query] || [];
        const groups = groupsIds.map((id) => byId[id]);
        return groups;
    })

// export const peoplesSelector = createSelector(
//     [peopleByIdSelector,
//         peopleMapSelector,
//     ],(byId, map)=>{const peoples=byId.map((id)=>byId[id])

// }

export const currentSelectedGroupIdSelector = createSelector(
    [groupsStateSelector],
    (groupState) => groupState.currentSelectedGroupId
);

export const currentSelectedGroupSelector = createSelector(
    [currentSelectedGroupIdSelector, groupByIdSelector],
    (id, byId) => {
        return id !== undefined ? byId[id] : undefined;
    }
);

export const groupNextIdSelector = createSelector(
    [groupsStateSelector],
    (groupState) => {
        return groupState.nextGroupId;
    }
);

export const groupPrevIdSelector = createSelector(
    [groupsStateSelector],
    (groupState) => {
        return groupState.prevGroupId;
    }
);
