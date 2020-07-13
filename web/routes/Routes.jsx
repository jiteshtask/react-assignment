import React, { Component } from 'react';
import { Router,Route, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import { connect } from 'react-redux';


import User from './userRoutes';

const user = '/';

export const history = createBrowserHistory({});

class UserRoutes extends Component {
  render() {
    return (
      <Router history={history}>
        <div >
          <Switch>
            <Route path={user} component={User} />
          </Switch>
        </div>
      </Router>
    );
  }
}
export default connect(null, { })(UserRoutes);
