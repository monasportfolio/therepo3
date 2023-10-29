import React, { useState } from 'react';
import '../Styles/Login.css';
import {Link} from 'react-router-dom'

export default function Login() {

    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`welcome back ${userName}!`);
    }

  return (
    <form className='LoginForm' onSubmit={handleSubmit}>
        <section className='formB'>
            <h1 className='Log FHead'>Login Here</h1>
            <section className='Log FName'>
                <label htmlFor='User'>User Name:</label>
                <input
                 type='text'
                 name='username'
                 value={userName}
                 id='User'
                 placeholder='Enter your name'
                 onChange={(e) => setUserName(e.target.value)}
                  required/>
            </section>

            <section className='Log FPass'>
                <label htmlFor='Pass'>Password:</label>
                <input
                 type='password'
                 name='password'
                 value={password}
                 id='Pass'
                 placeholder='enter your password'
                 onChange={(e) => setPassword(e.target.value)}
                 required/>
            </section>

            <section className='Log FBtn'>
                <Link to='/' className='linklogin'> LogIn</Link>
            </section>
        </section>
    </form>
  )
}

