import { createSelector } from "reselect";
import { userStateSelector } from "./app.selectors";

export const usersByIdSelector=createSelector([userStateSelector],(userState)=>userState.byId)