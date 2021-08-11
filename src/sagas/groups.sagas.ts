import { call, put, takeEvery } from "@redux-saga/core/effects"
import { AnyAction } from "redux";
import { GROUPS_QUERY } from "../actions/actions.constants";
import { groupsQueryCompletedAction } from "../actions/cdremovegroupquerycompletedaction";
import { fetchGroups as fetchGroupsApi } from "../api/groups";


export function* fetchGroups(action: AnyAction): Generator<any> {
    console.log("fetchGroups called");
    const groups: any = yield call(fetchGroupsApi,
        {
            query: action.payload,
            status: "all-groups"
        });
    yield put(groupsQueryCompletedAction(action.payload, groups))
};


export function* watchGroupQueryChanged() {
    console.log("watchGroupQueryChanged called")
    yield takeEvery(GROUPS_QUERY, fetchGroups)
}