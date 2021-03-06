import { Reducer } from "redux";
import { ME_FETCH, ME_LOGIN, USER_LIST_RECIEVED } from "../actions/actions.constants";
// import { Group } from "../models/Group";
import { User } from "../models/User";
import { addOne, EntityState, initialEntityState } from "./entity.reducer";

export interface UserState extends EntityState<User> {
    joinedgroups?: {
        [userId: number]: number[],
    };
}
const initialState = {
    ...initialEntityState,
    byId: {}
}

export interface UserGroupState {
    userGroups: { userId: string, groupId: string }[];
}

export const userReducer: Reducer<UserState> = (state = initialState, action) => {
    switch (action.type) {
        case ME_FETCH:
        case ME_LOGIN:
            // const user = action.payload as User;
            // return { ...state, byId: { ...state.byId, [user.id]: user } }
            return addOne(state, action.payload) as UserState;
        // case GROUPS_QUERY_COMPLETED: {
        //     const groups = action.payload.groups as Group[];
        //     const users = groups.reduce((users: User[], group) => {
        //         return [
        //             ...users,
        //             group.creator,
        //             ...group.participants,
        //             ...group.invitedMembers,
        //         ];
        //     }, [])
        //     return addMany(state, users) as UserState;
        // }
        // case CURRENT_SELECTED_GROUP_COMPLETE:{
        //     const group = action.payload as Group;
        //     if(group === undefined ) {
        //          return state;
        //     }
        //   const creator = group.creator;
        //   const participants = group.participants;
        //   const invitedMembers = group.invitedMembers;
        //   const participantsById = participants.reduce((prevParticipant, currParticipant) => {
        //       return {...prevParticipant, [currParticipant.id]:currParticipant};
        //   },{});
        //   const invitedMembersById = invitedMembers.reduce((prevMem, currMem) => {
        //       return {...prevMem, [currMem.id]:currMem};
        //   },{});


        //   return  {...state, byId:{...state.byId, [creator.id]: creator, ...participantsById, ...invitedMembersById}};    
        // }
        case USER_LIST_RECIEVED: {
            return { ...state, byId: { ...state.byId, ...action.payload } }
        }
        default:
            return state;
    }
}

