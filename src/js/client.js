import React from "react";
import { render } from "react-dom";
import { Router, Route, IndexRoute, browserHistory, replace } from "react-router";


import App from "./pages/App";
import AuthResponse from "./pages/AuthResponse";
import About from "./pages/About";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Logout from "./pages/Logout";

import auth from "./auth"

const app = document.getElementById('app');

render(<Router history={browserHistory}>
        <Route path="/" component={App}>
          <Route path="login" component={Login} />
          <Route path="logout" component={Logout} />
          <Route path="about" component={About} />
          <Route path="auth-answer" component={AuthResponse} />
          <Route path="dashboard" name="stats" component={Dashboard} onEnter={requireAuth} />
        </Route>
      </Router>, app);

function requireAuth(nextState, replace) {
  if (!auth.loggedIn()) {
    replace({
      pathname: '/login',
      state: { nextPathname: nextState.location.pathname }
    });
    console.log(nextState)
  }
}