import { People } from "../models/People";
import { CURRENT_SELECTED_PEOPLE_COMPLETE, CURRENT_SELECTED_PEOPLE_ID } from "./actions.constants";


export const currentSelectedPeopleAction = (id: number) => ({
    type: CURRENT_SELECTED_PEOPLE_ID,
    payload: id,
});


export const currentSelectedPeopleComplete = (people:People) => ({
    type: CURRENT_SELECTED_PEOPLE_COMPLETE,
    payload: people
})
