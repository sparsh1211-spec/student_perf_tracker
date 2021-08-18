import { Reducer } from "redux";
import { CURRENT_SELECTED_GROUP_COMPLETE, GROUPS_QUERY_COMPLETED, ME_FETCH, ME_LOGIN } from "../actions/actions.constants";
import { Group } from "../models/Group";
import { User } from "../models/User";
import { addMany, addOne, EntityState, initialEntityState } from "./entity.reducer";

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
        case GROUPS_QUERY_COMPLETED: {
            const groups = action.payload.groups as Group[];
            const users = groups.reduce((users: User[], group) => {
                return [
                    ...users,
                    group.creator,
                    ...group.participants,
                    ...group.invitedMembers,
                ];
            }, [])
            return addMany(state, users) as UserState;
        }
        case CURRENT_SELECTED_GROUP_COMPLETE: {
            const group = action.payload as Group;
            const users = [group.creator, ...group.invitedMembers, ...group.participants];
            return addMany(state, users) as UserState;
        }
        default:
            return state;
    }
}

