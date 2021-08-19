import { People } from "../models/People";
import { User } from "../models/User";
import { CURRENT_SELECTED_PEOPLE_COMPLETE, CURRENT_SELECTED_PEOPLE_ID, FETCH_PEOPLES, FETCH_PEOPLES_COMPLETE } from "./actions.constants";


export const currentSelectedPeopleAction = (id: number) => ({
    type: CURRENT_SELECTED_PEOPLE_ID,
    payload: id,
});


export const currentSelectedPeopleComplete = (people:People) => ({
    type: CURRENT_SELECTED_PEOPLE_COMPLETE,
    payload: people
})

export const fetchPeoplesAction=(id:number)=>({
    type:FETCH_PEOPLES,
    payload:id
})


export const fetchPeoplesCompletedAction = (usersById:{[id:number]:User}) => ({
    type: FETCH_PEOPLES_COMPLETE,
    payload: usersById,
});