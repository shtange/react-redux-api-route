import React from 'react';
import { Route, Switch } from 'react-router';
import { BrowserRouter as Router, Redirect } from 'react-router-dom';
import ROUTES from '../constants/routes';
import UserList from '../containers/User/List';
import UserProfile from '../containers/User/Profile';
import ContentNotFound from './Content/NotFound';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <div className="app">
        <Router>
          <Switch>
            <Route exact path="/" render={() => (
              <Redirect to={ROUTES.USER.LIST}/>
            )} />
            <Route exact path={ROUTES.USER.LIST} component={UserList} />
            <Route path={ROUTES.USER.PROFILE} component={UserProfile} />
            <Route path="*" component={ContentNotFound} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
