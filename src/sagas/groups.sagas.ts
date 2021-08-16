import { call, put, delay, takeLatest, takeEvery, all } from "@redux-saga/core/effects"
import { AnyAction } from "redux";
import { CURRENT_SELECTED_GROUP_ID, CURRENT_SELECTED_PEOPLE_ID, GROUPS_QUERY } from "../actions/actions.constants";
import { currentSelectedGroupComplete, fetchOneGroupError, groupsQueryCompletedAction } from "../actions/cdremovegroupquerycompletedaction";
import { currentSelectedPeopleAction } from "../actions/cdremovepeople";
// import { currentSelectedGroupAction } from "../actions/cdremovegroupquerycompletedaction";
import { fetchGroups as fetchGroupsApi, fetchOneGroup } from "../api/groups";
import { fetchOnePeople } from "../api/individualpeople";


export function* fetchGroups(action: AnyAction): Generator<any> {
    yield delay(300)
    console.log("fetchGroups called");
    const groupResponse: any = yield call(fetchGroupsApi,
        {
            query: action.payload,
            status: "all-groups"
        });
    yield put(groupsQueryCompletedAction(action.payload, groupResponse.data.data))
};
function* fetchOne(action: AnyAction): Generator<any> {

    try {
        const res: any = yield call(fetchOneGroup, action.payload)
        yield put(currentSelectedGroupComplete(res.data.data))
    } catch (e) {
        console.log(e);
        const error = e.response.data?.message || "kuch toh gadbad hain daya";
        yield put(fetchOneGroupError(action.payload, error));
    }
}

function* fetchOneUser(action:AnyAction):Generator<any>{
    const res:any=yield call(fetchOnePeople,action.payload)
    yield put(currentSelectedPeopleAction(res.data.data))
}

export function* watchGroupQueryChanged() {
    console.log("watchGroupQueryChanged called")
    yield all([takeLatest(GROUPS_QUERY, fetchGroups),
    takeEvery(CURRENT_SELECTED_GROUP_ID, fetchOne),
    takeEvery(CURRENT_SELECTED_PEOPLE_ID,fetchOneUser)])
}