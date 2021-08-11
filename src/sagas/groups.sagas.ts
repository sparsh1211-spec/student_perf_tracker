import { call, put, takeEvery } from "@redux-saga/core/effects"
import { AnyAction } from "redux";
import { GROUPS_QUERY, GROUPS_QUERY_COMPLETED } from "../actions/actions.constants";
// import { groupsQueryCompletedAction } from "../actions/groups.actions";
import {fetchGroups as fetchGroupsApi} from "../api/groups";



export function* fetchGroups (action:AnyAction):Generator<any>  {
    console.log("fetchGroups called");
    yield call(fetchGroupsApi,{query:action.payload,status:"all-groups"});
    yield put({type:GROUPS_QUERY_COMPLETED,PAYLOAD:{query:"hello",groups:[]}})
};


export function* watchGroupQueryChanged() {
    console.log("watchGroupQueryChanged called")
    yield takeEvery(GROUPS_QUERY, fetchGroups)
  }