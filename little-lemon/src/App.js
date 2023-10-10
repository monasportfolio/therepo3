import React from 'react';
import './App.css';
import Main from './Components/Main.js';
import Navigation from './Components/Navigation';
import logolemon from './logolemon.svg';
/*import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';*/

function App() {
  return (
    <div className="App" >
      <header className="App-header">
        <img src={logolemon} alt="Logo" />
        <Navigation />
      </header>
      <Main />
    </div>
  );
}

export default App;
