import React from 'react';
import {Link} from 'react-router-dom';
//import logolemon from '../logolemon.svg';
import '../Styles/Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faXTwitter } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';

export default function Footer() {

  return (
    <React.Fragment>
        <footer>
            <section className='fSection contact'>
                <h6 className='footHeader'>Contact us:</h6>
                <p><FontAwesomeIcon icon={faPhone} /> : 000-000-00</p>
                <p><FontAwesomeIcon icon={faEnvelope} /> : liLemon@gmail.com</p>
            </section>
            <section className='fSection footnav'>
                <h6 className='footHeader'>Doormat:</h6>
                <section className='navItems'>
                <Link to="/">Home</Link>
                <Link to="/About">About</Link>
                <Link to="/Menu">Menu</Link>
                <Link to="/Reservation">Reservation</Link>
                <Link to="/Order">Order Online</Link>
                <Link to="/Login">Login</Link>
                </section>
            </section>
            <section className='fSection socialMedia'>
                <h6 className='footHeader'>FOLLOW US ON</h6>
                    <a href='https://www.instagram.com'><FontAwesomeIcon icon={faInstagram} />  instagrame</a>
                    <a href='https://www.facebook.com'><FontAwesomeIcon icon={faFacebook} />  Facebook</a>
                    <a href='https://twitter.com/x'><FontAwesomeIcon icon={faXTwitter} />  Tiktok</a>
            </section>
            <section className='fSection2 copyrt'>
                <p>For any support or help you can contact us via out the phone number or email</p>
                <p>&copy; LittleLemon.com</p>
            </section>
        </footer>
    </React.Fragment>
  )
}
//<img src={logolemon} alt='footer logo' className='FooterLogo'/>