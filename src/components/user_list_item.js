import React from 'react';
import {Link} from 'react-router-dom';


class UserListItem extends React.Component {

  render() {
    const {login, html_url, avatar_url} = this.props;
    
    return (
      <li className="users-list-item">
        <Link to={`/user/${login}`}>
          <h3>User #1</h3>
          <p>{login} {html_url}</p>
          {avatar_url &&
            <img src={avatar_url} width="100" alt="" />}
        </Link>
      </li>
    );
  }

}

export default UserListItem;