import React from 'react';
import {connect} from 'react-redux';
import UserListItem from '../components/user_list_item';
import '../styles/user.css';


class UserList extends React.Component {

  render() {
    const {userList} = this.props;

    return userList && !!userList.length ? (
      <ul className="user-list">
        {(userList || []).map((user) =>
          <UserListItem
            key={user.id}
            {...user}
            onClick={() => {
              this.props.history.push(`/user/${user.login}`);
            }} />)}
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
