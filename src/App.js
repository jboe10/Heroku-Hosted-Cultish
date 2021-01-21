import React from 'react';
import './App.css';
import './styles/main.sass';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
// import Work from './components/work/Work';
// import Info from './components/info/Info';
// import Store from './components/store/Store';
import Contact from './components/contact/Contact';
// import Cultish from './components/cultish/Cultish';
// import Header from './components/Header';
// import Footer from './components/Footer';

import './App.css';

function App() {

  return (
    <div className="App">
      <Router>
          <Switch>
            <Route path="/">
              <Contact/>
            </Route>
          </Switch>
      </Router>
    </div>
  );
}

export default App;
