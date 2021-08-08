import { Reducer } from "redux";
import { Group } from "../models/Group";
import { EntityState } from "./entity.reducer";

export interface ParticularGroupState extends EntityState<Group>{
   
}

const initialState = {
    byId: {}
}

// export const particularGroupReducer: Reducer<ParticularGroupState> = (state = initialState, action) => {

//     switch(action.type)
// }