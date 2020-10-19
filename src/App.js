import React from 'react';
import {
  Header,
  Welcome,
  Searchbar,
  SearchResults,
  RepoDetails,
  Footer,
} from './components';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.scss';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faStar, faCodeBranch, faEye } from '@fortawesome/free-solid-svg-icons';

library.add(fab, faStar, faCodeBranch, faEye);

function App() {
  return (
    <Router>
      <Header />
      <Searchbar />
      <Switch>
        <Route exact path="/" component={Welcome} />
        <Route exact path="/search" component={SearchResults} />
        <Route path="/repos" component={RepoDetails} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
