import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/homepage';
import NavbarState from './context/Navbar/NavbarState';

const App = () => {
  return (
    <NavbarState>
      <Router>
        <div>
          <Switch>
            <Route exact path="/" component={Home} />
          </Switch>
        </div>
      </Router>
    </NavbarState>
  );
};
export default App;
