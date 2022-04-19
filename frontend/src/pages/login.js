import React, {useState} from 'react'
import './login.css';
import { Link } from 'react-router-dom'

function Login() {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  function setEmailFunction(event) {
    setEmail(event.target.value)
    console.log(email)
  }

  function setPasswordFunction(event) {
    setPassword(event.target.value)
    console.log(password);
  }

  function handleLogin() {
    fetch("http://localhost:4000/sessions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        email: email,
        password: password
      })
    })
    .then(resp => resp.json())
    .then(data => console.log(data))

  }

  return (
    <div id="loginparent">
      <div id="loginbox">
        <h2>You deserve a job that loves you back</h2>
        <h3>Continue to Aline</h3>
        <div id="logins">
        <input className='logininput' placeholder='Enter Username' onChange={setEmailFunction}></input>
        <input className='logininput' placeholder='Enter Password' onChange={setPasswordFunction}></input>
        <button id="loginbutton" className='logininput' onClick={handleLogin} >Login</button>
        </div>
        <div id="signup">
        <p>Dont have an account?</p> <Link to="/signup"><p id="sarea" >Sign up!</p></Link>
        </div>
      </div>
    </div>
  )
}

export default Login