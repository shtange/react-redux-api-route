import React, {Component} from 'react';
import {Route, Switch} from 'react-router';
import {BrowserRouter as Router, Redirect} from 'react-router-dom';
import ROUTES from '../imports/constants/routes';
import UserModule from '../modules/user/module';
import PageNotFound from './content/page_not_found';
import '../index.css';

class App extends Component {
  render() {
    return (
      <div className="app">
        <Router>
          <Switch>
            <Route exact path="/" render={() => (
              <Redirect to={ROUTES.USER.LIST}/>
            )} />
            <Route path={ROUTES.USER.HOME} component={UserModule} />
            <Route path="*" component={PageNotFound} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
