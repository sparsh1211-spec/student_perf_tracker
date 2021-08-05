
import { TypedUseSelectorHook, useSelector } from "react-redux";
import { combineReducers, createStore} from "redux";
// import { Group } from "./models/Group";
// import { User } from "./models/User";
import { authReducer } from "./reducers/auth.reducer";
import { groupReducer} from "./reducers/groups.reducer";
import { userReducer} from "./reducers/users.reducer";
// import { Window } from "./typings";

// export interface AppState {
//     auth: AuthState;
//     users: UserState;
//     // groupQuery: string;
//     // groupQueryMap: { [keyword: string]: number[] };//for example this signifies {ill:[10,20,45],"ear":[1,99]}
//     groups?: GroupState
// }

// const initialState: AppState = {
//     me: undefined,
//     isSidebarOpen: true,
//     groupQuery: "",
//     groupQueryMap: {},
//     groups: {},

// };


const reducer=combineReducers({
    users:userReducer,
    groups:groupReducer,
    auth:authReducer,
});

// const reducer: Reducer<AppState, AnyAction> = (state = initialState, action) => {

//     const newState = {
//         auth: authReducer(state.auth, action),
//         users: userReducer(state.users, action),
//         groups: groupReducer(state.groups, action),
//     };

//     if (newState.auth === state.auth && newState.users === state.users && newState.groups === state.groups) {
//         return state;
//     }

//     return newState;
// };

    // switch (dispatchedAction.type) {

    //     case 'me/login':
    //         return {
    //             ...currentState,
    //             me: dispatchedAction.payload,
    //         };

    //     case 'me/fetch':
    //         return {
    //             ...currentState,
    //             groups: dispatchedAction.payload,
    //         };

    //     case 'groups/query':
    //         return {
    //             ...currentState, groupQuery: dispatchedAction.payload
    //         };

    //     case "groups/query_completed":

    //         const groups = dispatchedAction.payload.groups as Group[]
    //         const groupIds = groups.map((g) => g.id);

    //         const groupMap = groups.reduce((prev, group) => {
    //             return { ...prev, [group.id]: group };
    //         }, {});




    //         return {
    //             ...currentState,
    //             groupQueryMap: {
    //                 ...currentState.groupQueryMap,
    //                 [dispatchedAction.payload.query]: groupIds
    //             },

    //             groups: { ...currentState.groups, ...groupMap }
    //         }
    //     default:
    //         return currentState;
    

export const store = createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

 export type AppState=ReturnType<typeof store.getState>;


export const useAppSelector:TypedUseSelectorHook<AppState>=useSelector;