import React from 'react';
import CallToAction from './CallToAction';
import Specials from './Specials';
import CustomersSay from './CustomersSay';
import Chicago from './Chicago';
import '../Styles/HomePage.css';

function HomePage (){
    return(
        <main>
            <CallToAction />
            <Specials />
            <CustomersSay />
            <Chicago />
        </main>
    )
}

export default HomePage;