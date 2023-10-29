/* the component that describes the Little Lemon Chicago restaurant and gives a short backstory for it */
import React from 'react';
import restaurant from '../restaurant.jpg';
import '../Styles/Chicago.css';

function Chicago() {
  return (
    <React.Fragment>
      <main className='container4'>
        <section className='Chicago'>
          <h1>Little Lemon</h1>
          <h2>Chicago</h2>
          <br/>
          <p>We are a family owned Mediterranean
            restaurant, focused on traditional recipes
            served with a modern twist.
          </p>
        </section>
        <img src={restaurant} alt='restaurant' className='Chicagoimg'/>
      </main>
    </React.Fragment>
  )
}

export default Chicago
