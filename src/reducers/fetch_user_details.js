import * as types from '../actions/action_types';

export default function fetchUserDetailsReducer(state = {}, action) {  
  switch(action.type) {
    case types.FETCH_USER_DETAILS_SUCCESS:
      return action.userProfile;
    default: 
      return state;
  }
}
