import { Reducer } from "redux";
import { CURRENT_SELECTED_GROUP, CURRENT_SELECTED_GROUP_ID, GROUPS_QUERY, GROUPS_QUERY_COMPLETED } from "../actions/actions.constants";
import { Group } from "../models/Group";
import { addMany, addOne, EntityState, getIds } from "./entity.reducer";

export interface GroupState extends EntityState<Group> {

    query: string;
    queryMap: { [query: string]: number[] };
    loading:boolean;
    currentSelectedGroupId?: number;
    // query: string;
    // currentSelectedGroupId?: number;
    nextGroupId?: number;
    prevGroupId?: number;
    // groupCollections?: { [query: string]: number[] };
}


const initialState = {
    byId: {},
    query: "",
    queryMap: {},
    loading:false,
}

export const groupReducer: Reducer<GroupState> = (state = initialState, action) => {

    switch (action.type) {
        case GROUPS_QUERY:
            const query = action.payload;
            return {
                ...state, query: query, loading:true
            };

        case GROUPS_QUERY_COMPLETED:

            const groups = action.payload.groups as Group[]
            const groupIds = getIds(groups);

            const newState = addMany(state, groups) as GroupState;
            return {
                ...newState,
                queryMap: {
                    ...newState.queryMap,
                    [action.payload.query]: groupIds
                },
                loading:false
            };
        case CURRENT_SELECTED_GROUP_ID:
            const id = action.payload as number;
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
        case CURRENT_SELECTED_GROUP:
            const group: Group = action.payload as Group;
            return addOne(state, group) as GroupState;
        default:
            return state;
    }
}