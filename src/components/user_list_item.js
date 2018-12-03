import React from 'react';


class UserListItem extends React.Component {

  render() {
    const {login, html_url, avatar_url} = this.props;
    
    return (
      <li className="user-list-item">
        <button onClick={this.props.onClick.bind(this)}>
          {avatar_url &&
            <img src={avatar_url} width="100" alt="" />}
          {login &&
            <h3>{login}</h3>}
          {html_url &&
            <p>
              <a href={html_url}>profile link</a>
            </p>}
        </button>
      </li>
    );
  }

}

export default UserListItem;