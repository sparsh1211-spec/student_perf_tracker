import { Group } from "../models/Group";
import { GROUPS_QUERY_COMPLETED } from "./actions.constants";

export const groupsQueryCompletedAction = (query: string, groups: Group[]) => ({
    type: GROUPS_QUERY_COMPLETED,
    payload: { query, groups },
});
