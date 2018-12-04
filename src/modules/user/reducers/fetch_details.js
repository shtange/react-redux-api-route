import * as actionTypes from '../actions/action_types';

export default function fetchUserDetailsReducer(state = {}, action) {  
  switch(action.type) {
    case actionTypes.FETCH_USER_DETAILS_SUCCESS:
      return action.userProfile;
    case actionTypes.CLEAR_USER_DETAILS_SUCCESS:
      return null;
    default: 
      return state;
  }
}
