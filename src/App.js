import React from 'react';
import { Header, Welcome, Searchbar, SearchResults } from './components';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.scss';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import {
  faStar,
  faCodeBranch,
  faEye,
  faWrench,
} from '@fortawesome/free-solid-svg-icons';

library.add(fab, faStar, faCodeBranch, faEye, faWrench);

function App() {
  return (
    <Router>
      <Header />
      <Searchbar />
      <Switch>
        <Route exact path="/" component={Welcome} />
        <Route exact path="/search" component={SearchResults} />
      </Switch>
    </Router>
  );
}

export default App;
