
import { AnyAction, createStore, Reducer } from "redux";
import { Group } from "./models/Group";
import { User } from "./models/User";
// import { Window } from "./typings";

export interface AppState {
    me?: User;
    groups: Group[];
    isSidebarOpen: boolean;
}

const initialState: AppState = {
    me: undefined,
    groups: [],
    isSidebarOpen: true,

};

const reducer: Reducer<AppState, AnyAction> = (currentState = initialState, dispatchedAction: AnyAction) => {
    switch (dispatchedAction.type) {

        case 'me/login':
            return {
                ...currentState,
                me: dispatchedAction.payload,
            };

        case 'me/fetch':
            return {
                ...currentState,
                groups: dispatchedAction.payload,
            }

        default:
            return currentState;
    }
}

export const store = createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);