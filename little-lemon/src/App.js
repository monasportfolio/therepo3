import React from 'react';
import './App.css';
import Nav from './Components/Nav.js';
import logolemon from './logolemon.svg';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import HomePage from './Components/HomePage.js';
import Specials from './Components/Specials';
import About from './Components/About.js';
import Footer from './Components/Footer';
import GreekSalad from './Components/GreekSalad';
import Login from './Components/Login';
import Success from './Components/Success';
import BookingForm from './Components/BookingForm';

function App() {
  return (
    <Router>
      <div className="App" >
          <header className="App-header">
            <img src={logolemon} alt="Logo" className='logo'/>
            <Nav />
          </header>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/About" element={<About />} />
            <Route path="/Menu" element={<Specials />} />
            <Route path="Reservation" element={<BookingForm />} />
            <Route path="/Order" element={<BookingForm />} />
            <Route path="/Login" element={< Login/>} />
            <Route path='/greekSalad' element={<GreekSalad />} />
            <Route path='/Success' element={<Success />}/>
          </Routes>
          <Footer />
      </div>
    </Router>
  );
}

export default App;
/*it sholdnt be a <div> change it */