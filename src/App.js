import './App.css';
import React from 'react';
import Navbar from './components/Navbar';
import Cv from './components/Cv';
import Portfolio from './components/Portfolio';
import Skills from './components/Skills';
import Contact from './components/Contact';
import ProgressBar from './components/ProgressBar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <ProgressBar />
      <Portfolio />
      <Contact />
    </div>
  );
}

export default App;
