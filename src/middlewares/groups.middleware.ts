import { groupActions } from "../actions/groups.actions";
import { GroupRequest, fetchGroups as fetchGroupsAPI } from "../api/groups";
import { groupQueryLoadingSelector} from "../selectors/groups.selectors";
import { store } from "../store";

export const fetchGroups = (request: GroupRequest) => {
    const queryLoading=groupQueryLoadingSelector(store.getState());


    const query = request.query;
  
    const loading=queryLoading[query];

    groupActions.query(query);


    if(loading){
        return;
    }
 
    fetchGroupsAPI(request).then(groups => {
        groupActions.queryCompleted(query, groups)
    });
};