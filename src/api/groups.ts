import axios from "axios";
import { Group } from "../models/Group";




interface GroupRequest {
    limit?: number;
    offset?: number;//kitne results k baad waale result
    query?: string;
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

export const fetchGroups = (data: GroupRequest) =>{
    return axios.get<GroupResponse>("https://api-dev.domecompass.com/groups", 
    { params: data, headers: { Authorization: localStorage.getItem("auth_token") } })
    .then((response) =>{
        console.log(response.data.data)
        return response.data.data;
    })
}

        