import { AppState } from "../store";

export const groupsStateSelector=(state:AppState)=>state.groups;

export const peoplesStateSelector=(state:AppState)=>state.peoples;

export const authStateSelector=(state:AppState)=>state.auth;

export const userStateSelector=(state:AppState)=>state.users;