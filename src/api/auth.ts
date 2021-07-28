import axios from "axios";

import { User } from "../models/User"

import { BASE_URL, LS_AUTH_TOKEN } from "./base"

interface LoginRequest {
    email: string,
    password: string,
}

interface LoginResponse {
    data: {
        is_2fa_enabled: boolean;
    };
    token: string,
    user: User,
}

// interface GroupResponse{
//     group_image_url?:string;
//     name?:string;
//     description?:string;

// }




export const login = (data: LoginRequest) => {
    const url = BASE_URL + "/login";
    console.log(data);

    // return fetch(url, {
    //     method: "POST",
    //     body: JSON.stringify(data),
    //     headers: {
    //         "Content-Type": "application/json",
    //     },

    // }).then((response) => {
    //    response
    //    .json()
    //    .then((data)=>console.log("response body in json format",data));
    //     return response;
    // });

    return axios.post<LoginResponse>(url, data)
        .then((response) => {
            console.log(response.data.token);
            localStorage.setItem(LS_AUTH_TOKEN, response.data.token);
            return response.data.user;
        });
};

export const logout = () => {
    localStorage.removeItem(LS_AUTH_TOKEN);
}

interface MeResposne{
    data:User;
}


export const me = () => {
    const url = BASE_URL + "/me"
    return axios.get<MeResposne>(url).then(response=>response.data.data);
};
