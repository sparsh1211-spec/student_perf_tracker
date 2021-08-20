import { createSelector } from "reselect";
// import { AppState } from "../store";
// import { AppState } from "../store";
import { groupsStateSelector, peoplesStateSelector } from "./app.selectors";
import { usersByIdSelector } from "./users.selectors";

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
    (groupState) => groupState.currentSelectedGroupId)


export const groupCreatorByIdSelector = createSelector([groupsStateSelector], (state) => state.creators);
export const groupCreatorIdSelector = createSelector([groupCreatorByIdSelector, selectedIdSelector], (byId, id) => id && byId[id]);
export const groupCreatorSelector = createSelector([usersByIdSelector, groupCreatorIdSelector], (byId, id) => id===undefined ?undefined: byId[id]);

export const groupIdSelector = createSelector([groupsStateSelector], (groupState) => {

    return groupState.selectedId;
});



export const groupInvMemByIdSelector = createSelector([groupsStateSelector], (state) => state.invitedMembers);
export const groupInvMemSelector = createSelector([groupInvMemByIdSelector, groupIdSelector, usersByIdSelector], (memById, gid, usersById) => {
    const invMemIds = memById[gid!];
    if (invMemIds === undefined) {
        return []
    }
    const invMembers = invMemIds.map((id) => id && usersById[id]);
    return invMembers;
})



export const groupParticipantsByIdSelector = createSelector([groupsStateSelector], (state) => state.participants);
export const groupParticipantsSelector = createSelector([groupParticipantsByIdSelector, groupIdSelector, usersByIdSelector], (parById, gid, userById) => {
    const participantsIds = parById[gid!];
    if (participantsIds === undefined) {
        return [];
    }
    const participants = participantsIds.map((id) => id && userById[id]);
    return participants;

})
    

export const selectedGroupSelector = createSelector([groupByIdSelector, selectedIdSelector, usersByIdSelector,groupCreatorSelector,groupParticipantsSelector,groupInvMemSelector],
    (byId, id, usersById,creator,participants,invitedMembers) => {
      
        if (!id) {
            return undefined;
        }
        const group = byId[id];

        // let creator
        // if(group.creator)
        // creator= usersById[group.creator as any];
        // const participants = group.participants.map((p: any) => usersById[p]);
        // const invitedMembers = group.invitedMembers.map((m: any) => usersById[m]);
        return { ...group,creator, participants, invitedMembers };
    })

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
// export const usersArrSelector = createSelector(
//     [peopleByIdSelector,peopleMapSelector],
//     (byId, id) =>{
//         return byId.map((id:any) =>{
//             return byId[id]
//         })
//     }
// )

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
)
