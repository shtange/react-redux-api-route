import * as actionTypes from '../../actions/user/types';

export default function fetchUserListReducer(state = [], action) {  
  switch(action.type) {
    case actionTypes.FETCH_USER_LIST_SUCCESS:
      return action.userList;
    default: 
      return state;
  }
}
