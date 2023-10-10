import React from 'react';
import './App.css';
import Main from './Main.js';
import Navigation from './Navigation';

function App() {
  return (
    <div className="App" >
      <header className="App-header">
        <img src="lemon-Logo.svg" alt="Logo" />
        <Navigation />
      </header>
      <Main />
    </div>
  );
}

export default App;
