import './App.css';
import React from 'react';
import Navbar from './components/Navbar';
import Cv from './components/Cv';
import Contact from './components/Contact';
import ProgressBar from './components/ProgressBar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Cv />
      <ProgressBar />
      <Contact />
    </div>
  );
}

export default App;
