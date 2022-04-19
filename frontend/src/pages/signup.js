import React from 'react'
import './signup.css';
import { Link } from 'react-router-dom'

function Signup() {
  return (
    <div id="signupparent">
      <div id="signupbox">
        <h2>You deserve a job that loves you back</h2>
        <h3>Sign up and begin to Aline</h3>
        <div id="signups">
        <input className='signupinput' placeholder='Enter Username'></input>
        <input className='signupinput' placeholder='Enter Password'></input>
        <button id="signupbutton" className='signupinput' >Login</button>
        </div>
        <div id="login">
        <p>Already have an account?</p> <Link to="/login"><p id="larea">Login here!</p></Link>
        </div>
      </div>
    </div>
  )
}

export default Signup