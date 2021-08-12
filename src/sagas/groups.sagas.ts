import { call, put, delay,takeLatest } from "@redux-saga/core/effects"
import { AnyAction } from "redux";
import { GROUPS_QUERY } from "../actions/actions.constants";
import { groupsQueryCompletedAction } from "../actions/cdremovegroupquerycompletedaction";
import { fetchGroups as fetchGroupsApi } from "../api/groups";


export function* fetchGroups(action: AnyAction): Generator<any> {
    yield delay(300)
    console.log("fetchGroups called");
    const groupResponse: any = yield call(fetchGroupsApi,
        {
            query: action.payload,
            status: "all-groups"
        });
    yield put(groupsQueryCompletedAction(action.payload,groupResponse.data.data))
};


export function* watchGroupQueryChanged() {
    console.log("watchGroupQueryChanged called")
    yield takeLatest(GROUPS_QUERY, fetchGroups)
}