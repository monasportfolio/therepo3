import React from 'react';
import './Navigation.css';

function Navigation (){
    return(
        <nav className="navbar">
            <ul className='container'>
                <li>Home</li>
                <li>About</li>
                <li>Menu</li>
                <li>Rservation</li>
                <li>Order Online</li>
                <li>Login</li>
            </ul>
        </nav>
    );
}
export default Navigation;