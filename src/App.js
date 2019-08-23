import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/homepage';
import AppState from './context/AppContext/AppState';
import SignUp from './components/signup';
import SignIn from './components/signin';
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
            <Route component={NotFound} />
          </Switch>
        </div>
      </Router>
    </AppState>
  );
};
export default App;
