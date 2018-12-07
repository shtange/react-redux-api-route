import React from 'react';


class ListItem extends React.Component {

  render() {
    const { login, html_url, avatar_url, ...props } = this.props;
    
    return login && avatar_url ? (
      <li className="user-list-item">
        <button {...props}>
          <img src={avatar_url} width="100" alt="" />
          <h3>{login}</h3>
          {html_url &&
            <p>
              <a href={html_url}>profile link</a>
            </p>}
        </button>
      </li>
    ) : null;
  }

}

export default ListItem;