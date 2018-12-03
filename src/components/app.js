import React, {Component} from 'react';
import {Route, Switch} from 'react-router';
import {BrowserRouter as Router} from 'react-router-dom';
import UserList from '../containers/user_list';
import UserProfile from '../containers/user_profile';
import PageNotFound from '../components/content/page_not_found';
import '../index.css';

class App extends Component {
  render() {
    return (
      <div className="app">
        <Router>
          <Switch>
            <Route exact path="/" component={UserList} />
            <Route path="/user/:username" component={UserProfile} />
            <Route path="*" component={PageNotFound} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
