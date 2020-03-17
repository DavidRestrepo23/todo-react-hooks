import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from './containers/auth/LoginContainer';
import NewAccount from './containers/auth/NewAccountContainer';
import Projects from './components/projects/Projects';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Login}></Route>
          <Route exact path="/new-account" component={NewAccount}></Route>
          <Route exact path="/projects" component={Projects}></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
