import React, {useEffect} from 'react'
import './home.css';

// useEffect(() => {
//   document.body.style.overflow = 'hidden'
// }[])

function Home() {
  return (
    <div className='master'>

      <h1 className='Title'> Don't Work - Align </h1>
      <h2 className='subtitle'> Align Your Values With The Blockchain</h2>
      <div className='selectContainer'>
        <select className='select' name="Frontier" required>
        <option value="" disabled selected hidden>Choose Your Frontier</option>
        <option value="coffee">Data Science</option>
        <option value="tea">Software Engineering</option>
        <option value="Cyber Se">Cyber Security</option>
        <option value="milk">UX Design</option>
    </select>
      </div>
        

    </div>
    
  )
}

export default Home