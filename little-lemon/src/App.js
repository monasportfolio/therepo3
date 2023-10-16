import React from 'react';
import './App.css';
import Nav from './Components/Nav.js';
import logolemon from './logolemon.svg';
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import HomePage from './Components/HomePage.js';
import About from './Components/About.js';
import CallToAction from './Components/CallToAction';
import Specials from './Components/Specials';
import CustomersSay from './Components/CustomersSay.js';
import Chicago from './Components/Chicago';
import BookingPage from './Components/BookingPage';

function App() {
  return (
    <Router>
      <div className="App" >
          <header className="App-header">
            <img src={logolemon} alt="Logo" className='logo'/>
            <Nav />
          </header>
          <main>
            <CallToAction />
            <Specials />
            <CustomersSay />
            <Chicago />
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/About" element={<About />} />
              <Route path="/Menu" element={<Specials />} />
              <Route path="Reservation" element={<BookingPage />} />
              <Route path="/Order" element={<BookingPage />} />
              <Route path="/Login" element={< HomePage/>} />
            </Routes>
          </main>
          <footer>
            <img src={logolemon} alt='Logo' className='FooterLogo'/>
            <section>
              <p className='header'>Contact us:</p>
              <p>Pone No:000-000-00</p>
              <p>Email:littleLemon@gmail.com</p>
            </section>
            <section className='footnav'>
              <p className='header'>Doormat:</p>
              <br/>
              <Link to="/">Home</Link>
              <Link to="/About">About</Link>
              <Link to="/Menu">Menu</Link>
              <Link to="/Reservation">Reservation</Link>
              <Link to="/Order">Order Online</Link>
              <Link to="/Login">Login</Link>
            </section>
            <section>
              <p className='header'>Our social media:</p>
              <p>Instagram
              <br/>
              X
              <br/>
              Facebooks
              <br/>
              Tiktok</p>
            </section>
          </footer>
      </div>
    </Router>
  );
}

export default App;
/*it sholdnt be a <div> change it */