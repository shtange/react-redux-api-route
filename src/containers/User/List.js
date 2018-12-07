import React from 'react';
import { connect } from 'react-redux';
import ListItem from '../../components/User/ListItem';


class List extends React.Component {

  render() {
    const { userList, history } = this.props;

    return userList && !!userList.length ? (
      <ul className="user-list">
        {userList.map(({ id, login, html_url, avatar_url }) =>
          <ListItem
            key={id}
            {...{ login, html_url, avatar_url }}
            onClick={() => history.push(`/user/${login}`)} />)}
      </ul>
    ) : null;
  }

}

const mapStateToProps = (state) => (
  {
    userList: state.userList
  }
);

export default connect(mapStateToProps, null)(List);
