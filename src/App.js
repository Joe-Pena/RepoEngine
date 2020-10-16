import React from 'react';
import {
  Header,
  Welcome,
  Searchbar,
  SearchResults,
  RepoDetails,
} from './components';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.scss';

function App() {
  return (
    <Router>
      <Header />
      <Searchbar />
      <Switch>
        <Route exact path="/" component={Welcome} />
        <Route exact path="/search" component={SearchResults} />
        <Route exact path="/repo" component={RepoDetails} />
      </Switch>
    </Router>
  );
}

export default App;
