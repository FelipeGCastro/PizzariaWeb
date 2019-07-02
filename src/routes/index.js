import React from 'react';
import { ConnectedRouter } from 'connected-react-router';
import { Switch } from 'react-router-dom';

import history from './history';

import Private from './private';
import Guest from './guest';

import Login from '../pages/Login';
import Dashdoard from '../pages/Dashboard';

const Routes = () => (
  <ConnectedRouter history={history}>
    <Switch>
      <Guest path="/signin" component={Login} />
      <Private exact path="/" component={Dashdoard} />
    </Switch>
  </ConnectedRouter>
);

export default Routes;
