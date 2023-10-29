/* testimonials, including star ratings, customer images and customer details */
import React from 'react';
import '../Styles/CustomersSay.css';
import fatma from '../fatma.jpg';
import kushi from '../kushi.jpeg';
import naumi from '../naumi.jpeg';
import willeam from '../willeam.jpeg';
import vstars from '../vstars.jpeg';
import rstars from '../rstars.png';

function CustomersSay() {
  return (
    <main className='testimonial'>
      <h1>What Our Customers Say!</h1>

      <section className='rates'>
        <section className='rate' id='rate1'>
          <img src={vstars} alt='' className='stars' />
          <img src={fatma} alt='first rate' className='rateimg'/><span className='ratename'>fatma salman</span>
          <p className='cmnt'><span>commint:</span>  that was tasty and the delevery was on time</p>
        </section>

        <section className='rate' id='rate2'>
          <img src={vstars} alt='' className='stars'/>
          <img src={kushi} alt='sec rate' className='rateimg'/><span className='ratename'>ishaan advik </span>
          <p className='cmnt'><span>commint:</span>  dalesios food thank you for your efforts</p>
        </section>

        <section className='rate' id='rate3'>
          <img src={rstars} alt='' className='stars' />
          <img src={naumi} alt='therd rate' className='rateimg'/><span className='ratename'>naumi jakson</span>
          <p className='cmnt'><span>commint:</span>  i liked it.</p>
        </section>

        <section className='rate' id='rate4'>
          <img src={vstars} alt='' className='stars' />
          <img src={willeam} alt='forth rate' className='rateimg'/><span className='ratename'>will peterson</span>
          <p className='cmnt'><span>commint: </span>didn't expect it to be that good!</p>
        </section>
      </section>

    </main>
  )
}

export default CustomersSay
