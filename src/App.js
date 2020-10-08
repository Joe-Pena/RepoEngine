import React from 'react';
import { Header, Welcome, Searchbar } from './components';
import './App.scss';

function App() {
  return (
    <div className="App">
      <Header />
      <Searchbar />
      <Welcome />
    </div>
  );
}

export default App;
