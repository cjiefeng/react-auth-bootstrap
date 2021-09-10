import loadable from '@loadable/component';
import React from "react";
import { Route, Router, Switch } from "react-router-dom";
import history from './history';

const Index = loadable(() => import('./Pages/Index/Index'));
const Open = loadable(() => import('./Pages/Open/Open'));
const Protect = loadable(() => import('./Pages/Protect/Protect'));

const Routes = (props) => {
  return (
    <Router history={history}>
      <Switch>
        <Route
          exact
          path="/"
          render={(passProps) => (
            <Index {...passProps} />
          )}
        />
        <Route
          exact
          path="/Open"
          render={(passProps) => (
            <Open {...passProps} />
          )}
        />
        <Route
          exact
          path="/Protect"
          render={(passProps) => (
            <Protect {...passProps} />
          )}
        />
      </Switch>
    </Router>
  )
}

export default Routes;
