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
