import { bindActionCreators } from "redux";
import { People } from "../models/People";
import { User } from "../models/User";
import { store } from "../store";
import { CURRENT_SELECTED_PEOPLE_COMPLETE, FETCH_PEOPLES, FETCH_PEOPLES_COMPLETE } from "./actions.constants";
import { fetchPeoplesAction, fetchPeoplesCompletedAction } from "./cdremovepeople";



// export const currentSelectedPeopleAction = (id: number) => ({
//     type: CURRENT_SELECTED_PEOPLE_ID,
//     payload: id,
// });


export const currentSelectedPeopleComplete = (people:People) => ({
    type: CURRENT_SELECTED_PEOPLE_COMPLETE,
    payload: people
})

export const peopleActions = bindActionCreators({
    fetchPeoples: fetchPeoplesAction,
    fetchPeoplesCompleted: fetchPeoplesCompletedAction,
}, store.dispatch)