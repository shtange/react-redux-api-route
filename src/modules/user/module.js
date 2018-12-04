import React, {Component} from 'react';
import {Route, Switch} from 'react-router';
import ROUTES from '../../imports/constants/routes'
import UserList from './containers/list';
import UserProfile from './containers/profile';


class UserModule extends Component {
  render() {
    return (
      <div className="user-module container">
        {this.props.children}
        <Switch>
          <Route exact path={ROUTES.USER.LIST} component={UserList} />
          <Route path={ROUTES.USER.PROFILE} component={UserProfile} />
        </Switch>
      </div>
    );
  }
}

export default UserModule;
