import React from 'react';
import {connect} from 'react-redux';
import UserListItem from '../components/user_list_item';


class UserList extends React.Component {

  render() {
    const {userList} = this.props;

    return userList && !!userList.length ? (
      <ul className="users-list">
        {(userList || []).map((user) =>
          <UserListItem {...user} key={user.id} />)}
      </ul>
    ) : null;
  }

}

const mapStateToProps = (state) => (
  {
    userList: state.userList
  }
);

export default connect(mapStateToProps, null)(UserList);
