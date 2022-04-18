import React from 'react'
import './results.css';
import Jobcard from '../components/jobcard';

function Results({jobs}) {

  let jobsMap = jobs.map(job => {
    return (
      <Jobcard
        key={job.id}
        job={job}
        />
    )
  })


  return (
    <div id="resultspage">
      <div id="totalparent">
      <div id="jobpreviewcontainer">
        <div id="jobpreview">
        {jobsMap}
        {jobsMap}
        {jobsMap}
        {jobsMap}
        {jobsMap}
        {jobsMap}
        {jobsMap}
        </div>
      </div>
      <div id="positionsummary">
      </div>
      </div>
    </div>
  )
}

export default Results