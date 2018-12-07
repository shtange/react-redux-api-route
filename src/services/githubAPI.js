import Axios from 'axios';
import APP_CONSTANTS from '../constants/appConstants';

class GitHubApi {

  constructor() {
    this.axios = Axios.create({
      baseURL: APP_CONSTANTS.GITHUB_API_URL,
      timeout: 5000,
      headers: {
        'Content-Type': 'application/json'
      }
    });
  }

  /**
   * @return Promise
   */
  getUserList() {
    return this.axios.get('/users', {params: {
      per_page: APP_CONSTANTS.USER_LIST_LIMIT
    }});
  }

  /**
   * @param username
   * @return Promise
   */
  getUserDetailsByUsername(username) {
    return this.axios.get('/users/' + username, {});
  }

}

export default GitHubApi;
