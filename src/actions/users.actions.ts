import { User } from "../models/User";
import { USER_LIST_RECIEVED } from "./actions.constants";

export const userList=(usersById:{[id:number]:User})=>({
    type:USER_LIST_RECIEVED,
    payload:usersById,
})