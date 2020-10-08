import React from 'react';
import { Header, Welcome, Searchbar } from './components';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.scss';

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/">
          <Searchbar />
          <Welcome />
        </Route>
        <Route path="/repo">{/* Repo details page */}</Route>
      </Switch>
    </Router>
  );
}

export default App;
