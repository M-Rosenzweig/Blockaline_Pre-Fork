import React from 'react'
import './jobcard.css';
import Jobsummarycard from './jobsummarycard';

function Jobcard({job}) {



  return (
    <div>
      <h3>{job.title}</h3>
      <h4>{job.description}</h4>
      <h4>{job.benefits}</h4>
    </div>
  )
}

export default Jobcard