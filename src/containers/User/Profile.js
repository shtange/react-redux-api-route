import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import ROUTES from '../../constants/routes';
import ButtonGoBack from '../../components/Button/GoBack';
import ProfileDetails from '../../components/User/ProfileDetails';
import { fetchUserDetails, clearUserDetails } from '../../actions/user';


class Profile extends React.Component {

  componentWillMount() {
    const {match: {params}} = this.props;

    (params && params.username) &&
      this.props.fetchUserDetails(params.username);
  }

  componentWillUnmount() {
    this.props.clearUserDetails();
  }

  render() {
    const { userProfile } = this.props;

    return userProfile && !!Object.keys(userProfile).length ? (
      <div className="user-profile">
        <ButtonGoBack toPath={ROUTES.USER.LIST} />
        <ProfileDetails {...userProfile} />
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

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
