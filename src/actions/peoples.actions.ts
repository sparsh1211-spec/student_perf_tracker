import { bindActionCreators } from "redux";
import { People } from "../models/People";
import { store } from "../store";
import { CURRENT_SELECTED_PEOPLE_COMPLETE, FETCH_PEOPLES, FETCH_PEOPLES_COMPLETE } from "./actions.constants";

export const fetchPeoplesAction=(id:number)=>({
    type:FETCH_PEOPLES,
    payload:id
})


export const fetchPeoplesCompletedAction = (peoples: People[]) => ({
    type: FETCH_PEOPLES_COMPLETE,
    payload: peoples,
});


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