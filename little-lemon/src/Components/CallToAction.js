import React from 'react';
import './CallToAction.css';
import restauranfood from'../restauranfood.jpg';
/* sometimes referred to as the jumbotron or the hero, this component is the call-to-action section that guides the user to click a call-to-action button while enticing them to do so in as few words as possible */

function CallToAction() {
    return(
        <section className='Hero'>
            <section className='desc'>
                <h1>Little Lemon</h1>
                <h2>Chicago</h2>
                <p>
                    We are a family owned
                    <br/>
                    Mediterranean restaurant,
                    <br/>
                    focused on traditional
                    <br/>
                    recipes served with a modern
                    <br/>
                    twist.
                </p>
                <br/>
                <button>Reserve a table</button>
            </section>
            <section className='desc-img'>
                    <img src={restauranfood} alt='chefFood' className='imgHero'/>
            </section>
        </section>

    )

}
export default CallToAction;