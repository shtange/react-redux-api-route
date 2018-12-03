import * as types from '../actions/action_types';

export default function fetchUserListReducer(state = [], action) {  
  switch(action.type) {
    case types.FETCH_USER_LIST_SUCCESS:
      return action.userList;
    default: 
      return state;
  }
}
