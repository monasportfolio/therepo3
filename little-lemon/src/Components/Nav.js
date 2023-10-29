import React from 'react';
import '../Styles/Nav.css';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';

function Nav (){
  const [isMobile, setIsMobile] = useState (false)
    return(
      <nav>
        <section className={isMobile ? 'navLinksMobile' :'navLinks'} onClick={() => setIsMobile(false)}>
          <Link to="/" className='nav-item'>Home</Link>
          <Link to="/About" className='nav-item'>About</Link>
          <Link to="/Menu" className='nav-item'>Menu</Link>
          <Link to="/Reservation" className='nav-item'>Rservation </Link>
          <Link to="/Order" className='nav-item'> Order </Link>
          <Link to="/Login" className='nav-item'>Login</Link>
        </section>

        <section className='ham' onClick={() => setIsMobile(!isMobile)}>
          {isMobile ?
          (<FontAwesomeIcon icon={faXmark} className='hamBtn first' />) :
          (<FontAwesomeIcon icon={faBars} className='hamBtn second' />)}
        </section>
      </nav>
    );
}
export default Nav;