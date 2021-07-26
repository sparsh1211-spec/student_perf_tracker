import axios from "axios";

axios.interceptors.request.use((config) => {
    const token = localStorage.getItem(LS_LOGIN_TOKEN);
    if (!token) {
        return config;
    }

    return { ...config, headers: { ...config.headers, Authorization: token } };
});

axios.interceptors.response.use(undefined, (error) => {
    if (error.response.data.code === 9101) {
        localStorage.removeItem(LS_LOGIN_TOKEN);
        window.location.href = "/auth/login";
    }

    return Promise.reject(error);
});

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


 interface User {
    id: number,
    first_name: string,
    middle_name: string,
    last_name: string,
    role: "staff" | "admin";
}

const BASE_URL = "https://api-dev.domecompass.com";
export const LS_LOGIN_TOKEN = "login_token";

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
            localStorage.setItem(LS_LOGIN_TOKEN, response.data.token);
            return response.data.user;
        });
};

export const logout = () => {
    localStorage.removeItem(LS_LOGIN_TOKEN);
}

interface GroupRequest {
    limit?: number;
    offset?: number;//kitne results k baad waale result
    query?: string;
    status: "all-groups" | "favourite" | "archieved";
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
    return axios.get("https://api-dev.domecompass.com/groups", 
    { params: data, headers: { Authorization: localStorage.getItem("login_token") } })
    .then((response) =>{
        console.log(response)
        return response.data.data;
    })
}
        


