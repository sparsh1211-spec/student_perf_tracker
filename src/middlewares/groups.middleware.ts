import axios, { Canceler } from "axios";
import { groupActions } from "../actions/groups.actions";
import { GroupRequest, fetchGroups as fetchGroupsAPI } from "../api/groups";
// import { groupsLoadingSelector} from "../selectors/groups.selectors";
// import { store } from "../store";

let canceler: Canceler | undefined;

export const fetchGroups = (request: GroupRequest) => {
    // const state = store.getState();
    // const loading = groupsLoadingSelector(state);
    const query = request.query;




    groupActions.query(query);


    // if (loading) {
    //     return;
    // }

    canceler && canceler()


    const { token, cancel } = axios.CancelToken.source();

    canceler = cancel;


    fetchGroupsAPI(request, token).then(groups => {
        groupActions.queryCompleted(query, groups.data.data)
        canceler = undefined;
    });
};