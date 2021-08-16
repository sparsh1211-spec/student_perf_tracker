import axios from "axios";
import { Group } from "../models/Group";
import { BASE_URL } from "./base";

interface IndividualGroupRequest {
    id: number;
}

interface IndividualGroupResponse {
    data: Group;
}


export const fetchGroup = async (data: IndividualGroupRequest) => {
    const url = BASE_URL + "/groups/" + data.id;
    const response = await axios.get<IndividualGroupResponse>
        (url,
            {
                params: data,
                headers: { Authorization: localStorage.getItem("auth_token") }
            });
    return response.data.data;
};