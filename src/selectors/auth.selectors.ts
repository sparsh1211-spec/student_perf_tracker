import { AppState } from "../store";


export const meSelector = (state: AppState) => state.auth.id && state.users.byId[state.auth.id];