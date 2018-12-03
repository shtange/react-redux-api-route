import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import ButtonGoBack from '../components/content/button_go_back';
import UserDetails from '../components/user_details';
import {fetchUserDetails, clearUserDetails} from '../actions/user_actions';


class UserProfile extends React.Component {

  componentWillMount() {
    const {match: {params}} = this.props;

    (params && params.username) &&
      this.props.fetchUserDetails(params.username);
  }

  componentWillUnmount() {
    this.props.clearUserDetails();
  }

  render() {
    const {userProfile} = this.props;

    return userProfile && !!Object.keys(userProfile).length ? (
      <div className="user-profile">
        <ButtonGoBack />
        <UserDetails {...userProfile} />
      </div>
    ) : null;
  }

}

const mapStateToProps = (state) => (
  {
    userProfile: state.userProfile
  }
);

const mapDispatchToProps = (dispatch) => (
  bindActionCreators({
    fetchUserDetails,
    clearUserDetails
  }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(UserProfile);
