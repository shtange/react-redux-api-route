import * as actionTypes from './types';
import GitHubApi from '../../services/githubAPI';

const apiService = new GitHubApi();

const fetchUserList = () => (
  (dispatch) =>
    apiService.getUserList()
      .then(userList => {
        dispatch(fetchUserListSuccess(userList.data));
      }).catch(error => {
        throw(error);
      })
);

const fetchUserListSuccess = (userList) => (
  {
    type: actionTypes.FETCH_USER_LIST_SUCCESS,
    userList
  }
);

const fetchUserDetails = (username) => (
  (dispatch) =>
    apiService.getUserDetailsByUsername(username)
      .then(userProfile => {
        dispatch(fetchUserDetailsSuccess(userProfile.data));
      }).catch(error => {
        throw(error);
      })
);

const fetchUserDetailsSuccess = (userProfile) => (
  {
    type: actionTypes.FETCH_USER_DETAILS_SUCCESS,
    userProfile
  }
);

const clearUserDetails = () => (
  (dispatch) =>
    dispatch(clearUserDetailsSuccess())
);

const clearUserDetailsSuccess = () => (
  {
    type: actionTypes.CLEAR_USER_DETAILS_SUCCESS
  }
);


export {
  fetchUserList,
  fetchUserListSuccess,
  fetchUserDetails,
  fetchUserDetailsSuccess,
  clearUserDetails
};
