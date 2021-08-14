import { call, put, delay, takeLatest, takeEvery, all } from "@redux-saga/core/effects"
import { AnyAction } from "redux";
import { CURRENT_SELECTED_GROUP_ID, GROUPS_QUERY } from "../actions/actions.constants";
import { currentSelectedGroupComplete, groupsQueryCompletedAction } from "../actions/cdremovegroupquerycompletedaction";
// import { currentSelectedGroupAction } from "../actions/cdremovegroupquerycompletedaction";
import { fetchGroups as fetchGroupsApi, fetchOneGroup } from "../api/groups";


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
    const res: any = yield call(fetchOneGroup, action.payload)

    yield put(currentSelectedGroupComplete(res.data.data))
}

export function* watchGroupQueryChanged() {
    console.log("watchGroupQueryChanged called")
    yield all([takeLatest(GROUPS_QUERY, fetchGroups),
    takeEvery(CURRENT_SELECTED_GROUP_ID, fetchOne)])
}