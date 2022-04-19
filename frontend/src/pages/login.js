import React from 'react'
import './login.css';
import { Link } from 'react-router-dom'

function Login() {
  return (
    <div id="loginparent">
      <div id="loginbox">
        <h2>You deserve a job that loves you back</h2>
        <h3>Continue to Aline</h3>
        <div id="logins">
        <input className='logininput' placeholder='Enter Username'></input>
        <input className='logininput' placeholder='Enter Password'></input>
        <button id="loginbutton" className='logininput' >Login</button>
        </div>
        <div id="signup">
        <p>Dont have an account?</p> <Link to="/signup"><p id="sarea">Sign up!</p></Link>
        </div>
      </div>
    </div>
  )
}

export default Login