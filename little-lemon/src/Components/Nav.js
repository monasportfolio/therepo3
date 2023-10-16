import React from 'react';
import './Nav.css';
import { Link } from 'react-router-dom';
import iconHam from '../iconHam.svg';

function Nav (){
    return(
        <nav className="container">
                <img src={iconHam} alt='hamburgerIcon' className='hamburger'/>
            <Link to="/" className='nav-item'>Home</Link>
            <Link to="/About" className='nav-item'>About</Link>
            <Link to="/Menu" className='nav-item'>Menu</Link>
            <Link to="/Reservation" className='nav-item'>Rservation </Link>
            <Link to="/Order" className='nav-item'> Order </Link>
            <Link to="/Login" className='nav-item'>Login</Link>
        </nav>
    );
}
export default Nav;

/*
    <div className='hamburger'>
        <span className='bar'></span>
        <span className='bar'></span>
        <span className='bar'></span>
        <span className='bar'></span>
    </div>

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
})

document.querySelectorAll("nav-item").forEach(n => n.addEventListener("click", () =>{
    hamburger.classList.remove("active");
}))*/
