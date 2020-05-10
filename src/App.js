import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from './containers/auth/LoginContainer';
import NewAccount from './containers/auth/NewAccountContainer';
import Projects from './containers/projects/ProjectContainer';
import AuthToken from './config/token';
import PrivateRoute from './components/routes/PrivateRoute';

const token = localStorage.getItem('token');

if (token) {
  AuthToken(token);
}

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/new-account" component={NewAccount} />
          <PrivateRoute exact path="/projects" component={Projects} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
