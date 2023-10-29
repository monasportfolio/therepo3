import React, { Component } from 'react'
import '../Styles/About.css'

export class About extends Component {
  render() {
    return (
      <main className='About'>
        <section className='abimg'></section>
        <section className='abtext'>
          <h1 className='AboutH'>About Us</h1>
          <p className='AboutP'>Little lemon is a place where you can experience the authentic flavors of the italian culture, the restaurant is warm
            and inviting, with traditional artwork and furnishings that create a cozy atmosphere.
            The menu features dishes the prepared using traditional cooking methods and ingredients.
            From appetizers to entrees to desserts, each dish is carefully crafted to showcase the unique flavors and textures fo your cuisine.
            the signature dish of our restaurant is the burschetta, which is a popular Italian food, the portion is generous, and the flavors
            are rich and satisfying. The service is friendly and attentive, and the prices are reasonable for the quality of the food.
            Overall, Little Lemon is a must-visit destination for anyone looking to explore the rich culinary heritage of italy
          </p>
        </section>
      </main>
    )
  }
}
export default About
