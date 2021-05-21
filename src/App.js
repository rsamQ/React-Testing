import './App.css';
import React from 'react';
import Navbar from './components/Navbar';
import Cv from './components/Cv';
import Portfolio from './components/Portfolio';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Cv />
      <Portfolio />
    </div>
  );
}

export default App;
