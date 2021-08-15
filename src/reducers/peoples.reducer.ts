import { Reducer } from "redux";
import { CURRENT_SELECTED_GROUP_COMPLETE, FETCH_PEOPLES, FETCH_PEOPLES_COMPLETE } from "../actions/actions.constants";
import { People } from "../models/People";
import { addMany, addOne, EntityState, getIds, initialEntityState } from "./entity.reducer";

export interface PeopleState extends EntityState<People> {
    queryMap: { [id: number]: number[] };
    id?: number;
}

const initialState = {
    ...initialEntityState,
    byId: {},
    queryMap: {},

}


export const peopleReducer: Reducer<PeopleState> = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_PEOPLES:
            const query = action.payload;
            return {
                ...state, query: query, loadingList: true
            };

        case FETCH_PEOPLES_COMPLETE:

            const peoples = action.payload.groups as People[]
            const peopleIds = getIds(peoples);

            const newState = addMany(state, peoples) as PeopleState;
            return {
                ...newState,
                queryMap: {
                    ...newState.queryMap,
                    [action.payload.query]: peopleIds
                },
                loadingList: false
            };


        case CURRENT_SELECTED_GROUP_COMPLETE:
            return addOne(state, action.payload) as PeopleState


        default:
            return state;
    }
}
