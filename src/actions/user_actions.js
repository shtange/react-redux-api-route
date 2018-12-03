import * as types from './action_types';
import GitHubApi from '../services/github_api';

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
  {type: types.FETCH_USER_LIST_SUCCESS, userList}
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
  {type: types.FETCH_USER_DETAILS_SUCCESS, userProfile}
);


export {
  fetchUserList,
  fetchUserListSuccess,
  fetchUserDetails,
  fetchUserDetailsSuccess
};
