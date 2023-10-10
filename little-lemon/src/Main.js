import React from 'react';

function Main() {
    return (
        <main>
            <section id="HeroSection">
                <h1>Little Lemon</h1>
                <h2>Chicago</h2>
                <p>
                    We are a family owned
                    Mediterranean restaurant,
                    focused on traditional
                    recipes served with a modern
                    twist.
                </p>
                <button><a href='#'>Reserve a table</a></button>
                <img href/>
            </section>
            <section id="Highlights">
                <h1>This weeks specials!</h1>
                <section id="card1">
                    <img href=""/>
                    <h3>Greek salad</h3>
                    <h4>$12.00</h4>
                    <p>the famous greek salad of
                        crispy lettuce, peppers,
                        olives and Chicago style feta
                        cheese,garnished with
                        crunchy garlic and rosemary
                        croutons.
                    </p>
                    <a>Order delivery<img /></a>
                </section>
                <section id="card2">
                    <img />
                    <h3>Bruschetta</h3>
                    <h4>$5.99</h4>
                    <p>Our Bruschetta is made from
                        grilled bread that has been
                        smeared with garlic and
                        seasoned with salt and olive
                        oil.
                    </p>
                    <a>Order delivery<img /></a>
                </section>
                <section id="card3">
                    <h3>Lemon Dessert</h3>
                    <h4>$5.00</h4>
                    <p>This is comes straight from
                        grandma's recipe book, every
                        last ingredient has been
                        sourced and is as authenti
                        as can be imagined.
                    </p>
                    <a>Order delivery<img /></a>
                </section>
            </section>
            <section id="testimonial">
                <h1>Testimonials</h1>
                <section className='boxes'>
                    <span>rating </span>
                    <img /><span>name </span>
                    <span>commint </span>
                </section>
                <section className='boxes'>
                    <span>rating </span>
                    <img /><span>name </span>
                    <span>commit </span>
                </section>
                <section className='boxes'>
                    <span>ratig </span>
                    <img /><span>name </span>
                    <span>commit </span>
                </section>
                <section className='boxes'>
                    <span>ratig </span>
                    <img /><span>name </span>
                    <span>commit </span>
                </section>
            </section>
            <section>
                <h1>Little Lemon</h1>
                <h2>Chicago</h2>
                <br/>
                <p>We are a familu owned Mediterranean
                    restaurant, focused on traditional recipes
                    served with a modern twist.
                </p>
                <img />
            </section>
        </main>



    );
}
export default Main;