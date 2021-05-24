import './App.css';
import React from 'react';
import Navbar from './components/Navbar';
import Cv from './components/Cv';
import Portfolio from './components/Portfolio';
import Skills from './components/Skills';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Cv />
      <Skills />
      <Portfolio />
      <Contact />
    </div>
  );
}

export default App;
