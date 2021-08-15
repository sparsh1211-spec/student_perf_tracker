import axios from "axios";
import { People } from "../models/People";
// import { EntityState } from "../reducers/entity.reducer";
import { BASE_URL } from "./base";

// export interface PeoplesRequest extends EntityState<People>{

// }

export interface PeoplesResponse {
    data: People[]
}


export const fetchPeoples = () => {
    const url = BASE_URL + "/people"
    return axios.get<PeoplesResponse>(url).then(response => response.data.data);
};




// export const fetchOnePeople = (
//     id: string,
// ) => {
//     const url = BASE_URL + "/people/" + id;
//     return axios.get<PeoplesResponse>(url);
// };