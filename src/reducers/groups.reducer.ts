// import { normalize } from "normalizr";
// import { normalize } from "normalizr";
import { Reducer } from "redux";
import { CURRENT_SELECTED_GROUP_COMPLETE, CURRENT_SELECTED_GROUP_ID, GROUPS_QUERY, GROUPS_QUERY_COMPLETED, GROUP_FETCH_ONE, GROUP_FETCH_ONE_ERROR } from "../actions/actions.constants";
import { Group } from "../models/Group";
// import { groupSchema } from "../models/schemas";
// import { groupSchema } from "../models/schemas";
import { EntityState, initialEntityState, select, setErrorForOne } from "./entity.reducer";

export interface GroupState extends EntityState<Group> {
  query: string;
  queryMap: { [query: string]: number[] };
  loading: boolean;
  currentSelectedGroupId?: number;
  // query: string;
  // currentSelectedGroupId?: number;
  nextGroupId?: number;
  prevGroupId?: number;
  // groupCollections?: { [query: string]: number[] };
  // monitors?: { [groupId: number]: number }//{10:20,99:56,54:33,}keys will be groupId and value will be userIds.
  participants: { [groupId: number]: number[] };
  creators: { [groupId: number]: number };
  invitedMembers: { [groupId: number]: number[] }
}

const initialState = {
  ...initialEntityState,
  query: "",
  queryMap: {},
  loading: false,
  participants: {},
  creators: {},
  invitedMembers: {}
}

export const groupReducer: Reducer<GroupState> = (state = initialState, action) => {

  switch (action.type) {
    case GROUP_FETCH_ONE:
      return select(state, action.payload) as GroupState
    case GROUPS_QUERY:
      const query = action.payload;
      return { ...state, query: query, loadingList: true };
    case GROUPS_QUERY_COMPLETED:
      // const groups = action.payload.groups as Group[];
      const groupsById=action.payload.groupsById;
      const groupIds=Object.keys(groupsById)
      // const data = normalize(groups, groupSchema);
      // console.log(data);

      // const newState = addMany(state, groups) as GroupState;
      return {
        ...state,
        byId: { ...state.byId,...groupsById },
        queryMap: {
          ...state.queryMap,
          [action.payload.query]: groupIds,
        },
        loadingList: false,
      };
    // case CURRENT_SELECTED_GROUP:
    //     const group: Group = action.payload as Group;
    //     return addOne(state, group) as GroupState;

    case CURRENT_SELECTED_GROUP_COMPLETE: {
      // const group = action.payload as Group;

      // const creatorId = group.creator!.id;
      // const participantsIds = group.participants.map(
      //   (participant) => participant.id
      // );
      // const invitedMembersIds = group.invitedMembers.map((member) => member.id);
      // const newGroupState = addOne(state, group, false) as GroupState;
      // return {
      //   ...newGroupState,
      //   creators: { ...newGroupState.creators, [group.id]: creatorId },
      //   participants: {
      //     ...newGroupState.participants,
      //     [group.id]: participantsIds,
      //   },
      //   invitedMembers: {
      //     ...newGroupState.invitedMembers,
      //     [group.id]: invitedMembersIds,
      //   },
      // };
      // const data = normalize(action.payload, groupSchema);
      const group=action.payload[state.currentSelectedGroupId!] as Group
      console.log(action.payload)
      const creators=group.creator as any
      const invited=group.invitedMembers as any
      const participants=group.participants as any
      console.log(creators,invited,participants)
      return { ...state, byId: { ...state.byId, ...action.payload },creators:{...state.creators,[group.id]:creators},participants:{...state.participants,[group.id]:participants},invitedMembers:{...state.invitedMembers,[group.id]:invited},loadingOne:false }
    }

    case CURRENT_SELECTED_GROUP_ID:{
      return {...state,currentSelectedGroupId:action.payload,loadingOne:true
      }
    }
    case GROUP_FETCH_ONE_ERROR:
      const { id2, msg } = action.payload;
      return setErrorForOne(state, id2, msg) as GroupState

    default:
      return state;
  }
}