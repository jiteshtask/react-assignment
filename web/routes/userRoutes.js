import React from 'react';
import {Router, Route, Switch} from 'react-router-dom';
import { history } from '../history/history';

import Signup_Login from '../components/signUp/index';
import FileStructure from '../components/fileStructure/index';
import '../../assets/css/style.scss'

const MainRoutes= ()=> (
  <Router history= {history}>
  <div className="user">
    <Switch>
      <Route exact path="/login" component={Signup_Login} />
      <Route exact path="/file-structure" component={FileStructure} />
    </Switch>
    </div>
  </Router>
)

export default MainRoutes;