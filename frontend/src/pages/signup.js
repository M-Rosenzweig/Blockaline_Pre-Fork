import React, {useState} from 'react'
import './signup.css';
import { Link } from 'react-router-dom'

function Signup() {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [frontier, setFrontier] = useState('')

  function handleEmail(e) {
    setEmail(e.target.value)
  }

  function handlePassword (e) {
    setPassword(e.target.value)
    console.log(password)
  }

  function handleFrontier(e) {
    setFrontier(e.target.value)
  }

  function handleSubmit() {
    fetch("http://localhost:4000/seekers", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        email: email,
        password: password,
        frontier: frontier
      })
    })
    .then(resp => resp.json())
    .then(data => console.log(data))
  }

  return (
    <div id="signupparent">
      <div id="signupbox">
        <h2>Align Your Life</h2>
        <h3>Join Blockaline</h3>
        <div id="signups">
          <div id="names">
        <input className='nameinput' placeholder='Enter Your First Name' onChange={handleEmail}></input>
        <input className='nameinput' placeholder='Enter Your Last Name' onChange={handleEmail}></input>
          </div>
        <input className='signupinput' placeholder='Enter Your Email' onChange={handleEmail}></input>
        <input type="password" className='signupinput' placeholder='Create Password' onChange={handlePassword}></input>
        <select defaultValue="frontier" className='signupinput' onChange={handleFrontier}>
          <option value="frontier" disabled hidden> Choose Frontier</option>
          <option >Data Science</option>
          <option>Software Engineering</option>
          <option>Cyber Security</option>
          <option>UX Design</option>
        </select>
        <button id="signupbutton" className='signupinput' onClick={handleSubmit}>Sign Up</button>
        </div>
        <div id="login">
        <p>Already have an account?</p> <Link to="/login"><p id="larea">Login here!</p></Link>
        </div>
      </div>
    </div>
  )
}

export default Signup