import Axios from 'axios';

const GITHUB_API_URL = 'https://api.github.com';

class GitHubApi {

  constructor() {
    this.axios = Axios.create({
      baseURL: GITHUB_API_URL,
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
      per_page: 100
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
