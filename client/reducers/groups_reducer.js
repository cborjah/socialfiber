import { FETCH_ALL_GROUPS, FETCH_USER_GROUPS, LEAVE_GROUP, JOIN_GROUP, FETCH_GROUP_POSTS } from '../actions/types';
const INITIAL_STATE = {allGroups:[], userGroups: [] }

export default function(state=INITIAL_STATE, action){
  switch(action.type) {
    case FETCH_ALL_GROUPS:
      return {...state, allGroups: action.payload.data};
    case FETCH_USER_GROUPS:
      return {...state, userGroups: action.payload.data};
    // case LEAVE_GROUP:
    //   return action.payload;
    // case JOIN_GROUP:
    //   return action.payload;
    // case FETCH_GROUP_POSTS:
    //   return action.payload;
    default:
      return state;
  }
}
