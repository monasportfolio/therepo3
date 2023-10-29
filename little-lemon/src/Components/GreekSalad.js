import React from 'react';
import greekSalad from '../greek salad.jpg';
import delevery from '../delevery.png';

export default function lemonDessert() {
  return (
    <React.Fragment>
        <article className='gS'>
            <img src={greekSalad} alt='greek salad' className='gSImg'/>
            <h2 className='gsb gSh2'>Greek Salad</h2>
            <h3 className='gsb gSh3'> $12.00</h3>
            <p className='gsb gSp'>the famous greek salad of crispe lettus, peppers,
                <br/>
                olives and Chicago style feta Chees, garnished with
                <br/>
                crunchy garlic and rosemary croutons.
            </p>
            <p className='gsb gSLink'>Order delevery <img src={delevery} alt='delevery' className='gSimg'/></p>
        </article>
    </React.Fragment>
  )
}
