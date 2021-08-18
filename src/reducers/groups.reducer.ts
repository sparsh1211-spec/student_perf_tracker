import { Reducer } from "redux";
import { CURRENT_SELECTED_GROUP_COMPLETE, CURRENT_SELECTED_GROUP_ID, GROUPS_QUERY, GROUPS_QUERY_COMPLETED, GROUP_FETCH_ONE, GROUP_FETCH_ONE_ERROR } from "../actions/actions.constants";
import { Group } from "../models/Group";
import { addMany, addOne, EntityState, getIds, initialEntityState, select, setErrorForOne } from "./entity.reducer";

export interface GroupState extends EntityState<Group> {

    query: string;
    queryMap: { [query: string]: number[] };
    loading: boolean;
    currentSelectedGroupId?: number;
    // query: string;
    // currentSelectedGroupId?: number;
    nextGroupId?: number;
    prevGroupId?: number;
    // groupCollections?: { [query: string]: number[] };
    // monitors?: { [groupId: number]: number }//{10:20,99:56,54:33,}keys will be groupId and value will be userIds.
    participants: { [groupId: number]: number[] };
    creators: { [groupId: number]: number };
    invitedMembers: { [groupId: number]: number[] }
}

const initialState = {
    ...initialEntityState,
    query: "",
    queryMap: {},
    loading: false,
    participants: {},
    creators: {},
    invitedMembers: {}
}

export const groupReducer: Reducer<GroupState> = (state = initialState, action) => {

    switch (action.type) {
        case GROUP_FETCH_ONE:
            return select(state, action.payload) as GroupState
        case GROUPS_QUERY:
            const query = action.payload;
            return {
                ...state, query: query, loadingList: true
            };
        case GROUPS_QUERY_COMPLETED:

            const groups = action.payload.groups as Group[]
            const groupIds = getIds(groups);
            const newState = addMany(state, groups) as GroupState;


            const participantIdsById = groups.reduce((participantIdsById, group) => {
                const participantIds = group.participants.map((p) => p.id);
                return { ...participantIdsById, [group.id]: participantIds }

            }, {});

            const invitedMembersIdsById = groups.reduce((invitedMembersIdsById, group) => {
                const invitedMembersIds = group.participants.map((p) => p.id);
                return { ...invitedMembersIdsById, [group.id]: invitedMembersIds }

            }, {});

            const creatorIdById = groups.reduce((creatorIdById, group) => {
                return { ...creatorIdById, [group.id]: group.creator.id }

            }, {});

            return {
                ...newState,
                queryMap: {
                    ...newState.queryMap,
                    [action.payload.query]: groupIds
                },
                loadingList: false,
                creators: { ...state.creators, ...creatorIdById },
                participants: { ...state.participants, ...participantIdsById },
                invitedMembers: { ...state.invitedMembers, ...invitedMembersIdsById },
            };
        case CURRENT_SELECTED_GROUP_ID:
            let id = action.payload as number;
            if (state.currentSelectedGroupId === id) return state;

            const currentQuerryGroups = state.queryMap[state.query];
            let nextId = id;
            let prevId = id;
            //check invalid url id
            try {
                const currentIndex = currentQuerryGroups.indexOf(id);
                if (currentIndex !== 0) {
                    prevId = currentQuerryGroups[currentIndex - 1];
                }

                if (currentIndex !== currentQuerryGroups.length - 1) {
                    nextId = currentQuerryGroups[currentIndex + 1];
                }
            } catch (e) {
                console.log(e.message);
            } finally {
                return {
                    ...state,
                    currentSelectedGroupId: id,
                    nextGroupId: nextId,
                    prevGroupId: prevId,
                };
            }
        // case CURRENT_SELECTED_GROUP:
        //     const group: Group = action.payload as Group;
        //     return addOne(state, group) as GroupState;

        case CURRENT_SELECTED_GROUP_COMPLETE: {
            const group = action.payload as Group;

            const participantIds = group.participants.map(p => p.id);
            const invitedMembersIds = group.invitedMembers.map(m => m.id);

            const newState = addOne(state, group) as GroupState;
            return {
                ...newState,
                participants: { ...newState.participants, [group.id]: participantIds },
                invitedMembers: { ...newState.invitedMembers, [group.id]: invitedMembersIds },
                creators: { ...newState.creators, [group.id]: group.creator.id },
            }
        }
        case GROUP_FETCH_ONE_ERROR:
            const { id2, msg } = action.payload;
            return setErrorForOne(state, id2, msg) as GroupState
        default:
            return state;
    }
}