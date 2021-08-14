import axios from "axios";
import { Group } from "../models/Group";
import { BASE_URL, get } from "./base";




export interface GroupRequest {
    limit?: number;
    offset?: number;//kitne results k baad waale result
    query: string;
    status: "all-groups" | "favourite" | "archieved";
}
 interface GroupResponse{
     data:Group[];
 }
 
// export const fetchGroups = (data: GroupRequest) => {
//     const url = BASE_URL + "/groups";

//     axios
//         .get(url, { params: data })
//         .then((response) => console.log(response)).catch((e) => console.error(e));

//         return axios.post<GroupResponse>(url, data)
//         .then((response) => {
//             console.log(response.data.group_image_url);
//             return response.data.group_image_url;
//         });


export const fetchGroups = (
    data: GroupRequest,
) => {
    const url = BASE_URL + "/groups";
    return get<GroupResponse>(url, {
        params: data,
    });
};


export const fetchOneGroup = (
    id: string,
) => {
    const url = BASE_URL + "/groups/" + id;
    return axios.get<GroupResponse>(url);
};
