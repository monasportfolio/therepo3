import React from 'react';
import '../Styles/BookingForm.css';
import { useState } from 'react';
import glass from '../10988871.png';
import Mario from '../Mario.jpg';
import restaurant from '../restaurant.jpg';
import Adrian from '../restaurant chef B.jpg';

export default function BookingForm(props) {

    const [date, setDate] = useState("");
    const [time, setTime] = useState("");
    const [guests, setGuests] = useState("");
    const [occasion, setOccasion] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        props.submitForm(e);
        alert(`Date: ${date}, Time: ${time}, Guests: ${guests}, Occasion:${occasion} `);
    };

    function handleChange(e){
        setDate(e);
        //props.dispatch(e);
    }
    function handleSelect(e){
        setTime(e.target.value)
    }

  return (
    <React.Fragment>
        <form onSubmit={handleSubmit} className='OrderForm'>
            <div className='box box1'>
                <label htmlFor="res-date">Date</label>
                <input
                type='date'
                id='res-date'
                value={date}
                placeholder='select Date'
                onChange={(e) => handleChange(e.target.value)}
                required/>
            </div>

            <div className='box box2'>
                <label htmlFor='res-time'>Time</label>
                <select id='res-time' placeholder='Select Time' onChange={handleSelect} defaultValue="" required>
                    <option disabled={true} value="">Select Time</option>
                    <option>17:00</option>
                    <option>18:00</option>
                    <option>19:00</option>
                    <option>20:00</option>
                    <option>21:00</option>
                </select>
            </div>

            <div className='box box3'>
                <label htmlFor="guests">Number of Diners</label>
                <input type='number'
                placeholder='1'
                max={12}
                id='guests'
                value={guests}
                onChange={(e) => setGuests(e.target.value)}
                required/>
            </div>

            <div className='box box4'>
                <label htmlFor="occasion" >Occasion </label>
                <select id='occasion' value={occasion} onChange={(e) => setOccasion(e.target.value)}defaultValue='' required>
                    <option disabled={true} value=''><img src={glass} alt='glass'/> Occasion</option>
                    <option>Birthday</option>
                    <option>Anniversary</option>
                    <option>Engagement</option>
                    <option>Other</option>
                </select>
            </div>
            <input type='submit' value={"Make Your reservation"} className=' box box5'/>
        </form>
        <div className='imgsForm'>
            <img src={Mario} alt='ing of Mario and adrian'className='imgForm'/>
            <img src={restaurant} alt='restaurant outdoor'className='imgForm'/>
            <img src={Adrian} alt='Adrian' className='imgForm' />
        </div>
    </React.Fragment>
  )
}
