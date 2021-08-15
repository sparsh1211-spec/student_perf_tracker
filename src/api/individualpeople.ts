import axios from "axios";
import { People } from "../models/People";
import { BASE_URL } from "./base";


interface IndividualPeopleRequest {
    id: number;
}

interface IndividualPeopleResponse {
    data: People;
}


export const fetchOnePeople = (
    data:IndividualPeopleRequest
) => {
    const url = BASE_URL + "/people/" + data;
    return axios.get<IndividualPeopleResponse>(url);
};