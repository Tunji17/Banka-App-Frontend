import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Dashboard from './dashboard';
import NotFound from '../notfound';
import './baseClient.css';

const App = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/dashboard" component={Dashboard} />
          <Route component={NotFound} />
        </Switch>
      </div>
    </Router>
  );
};
export default App;
