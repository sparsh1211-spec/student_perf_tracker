import { createSelector } from "reselect";
import { authStateSelector } from "./app.selectors";
import { usersByIdSelector } from "./users.selectors";


// export const meSelector = (state: AppState) => state.auth.id && state.users.byId[state.auth.id];

const meIdSelector=createSelector([authStateSelector],(authState)=>authState.id);

export const meSelector=createSelector([meIdSelector,usersByIdSelector],(id,usersById)=>id&&usersById[id])

