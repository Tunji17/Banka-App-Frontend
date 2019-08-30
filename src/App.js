import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/homepage';
import AppState from './context/AppContext/AppState';
import SignUp from './components/signup';
import SignIn from './components/signin';
import Client from './components/client/dashboard';
import Staff from './components/staff/dashboard';
import Admin from './components/admin/dashboard';
import NotFound from './components/notfound';

const App = () => {
  return (
    <AppState>
      <Router>
        <div>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/signup" component={SignUp} />
            <Route exact path="/signin" component={SignIn} />
            <Route exact path="/user" component={Client} />
            <Route exact path="/staff" component={Staff} />
            <Route exact path="/admin" component={Admin} />
            <Route component={NotFound} />
          </Switch>
        </div>
      </Router>
    </AppState>
  );
};
export default App;
