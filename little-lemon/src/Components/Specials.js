import React from 'react';
import './Specials.css';
import greekSalad from '../greek salad.jpg';
import burchetta from '../bruchetta.svg';
import lemonDessert from '../lemon dessert.jpg';
import delevery from '../delevery.png';

/* the component that loops over the specials that come from a data source */

function Specials(){
    return(
        <main className="Specials">
            <section id='sub-header'>
                <h1 className='heading1'>This weeks specials!</h1>
                <button className='menuB'>Online Menu</button>
            </section>

            <section className='cards'>
                <section id="card1" className='card'>
                    <img src={greekSalad} alt='greek salad' className='cardimg'/>
                    <h3>Greek salad</h3>
                    <h4>$12.00</h4>
                    <p>the famous greek salad of
                        crispy lettuce, peppers,
                        olives and Chicago style feta
                        cheese,garnished with                        crunchy garlic and rosemary
                        croutons.
                    </p>
                    <span className='cardFooter'>Order delivery   <img src={delevery} alt='delevery icon' className='delevery'/></span>
                </section>
                <section id="card2" className='card'>
                    <img src={burchetta} alt='burschetta' className='cardimg'/>
                    <h3>Bruschetta</h3>
                    <h4>$5.99</h4>
                    <p>Our Bruschetta is made from
                        grilled bread that has been
                        smeared with garlic and
                        seasoned with salt and olive
                        oil.
                        <br/>
                    </p>
                    <span className='cardFooter'>Order delivery   <img src={delevery} alt='delevery icon' className='delevery'/></span>
                </section>
                <section id="card3" className='card'>
                    <img src={lemonDessert} alt='lemon dessert' height={120} className='cardimg'/>
                    <h3>Lemon Dessert</h3>
                    <h4>$5.00</h4>
                    <p>This is comes straight from
                        grandma's recipe book, every
                        last ingredient has been
                        sourced and is as authenti
                        as can be imagined.
                    </p>
                    <span className='cardFooter'>Order delivery  <img src={delevery} alt='delevery icon' className='delevery'/></span>
                </section>
            </section>
        </main>
    );
}
export default Specials;