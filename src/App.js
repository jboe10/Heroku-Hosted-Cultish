import React from 'react';
import './App.css';
import './styles/main.sass';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Work from './components/work/Work';
import Info from './components/info/Info';
import Store from './components/store/Store';
import Contact from './components/contact/Contact';
import Cultish from './components/cultish/Cultish';

import './App.css';

function App() {

  return (
    <div className="App">
      <Router>
          <Switch>
            <Route path="/">
              <Cultish/>
            </Route>
            <Route path="/contact">
              <Contact/>
            </Route>
            <Route path="/store">
              <Store/>
            </Route>
            <Route path="/Info">
              <Info/>
            </Route>
            <Route path="/work">
              <Work/>
            </Route>
          </Switch>
      </Router>
    </div>
  );
}

export default App;
