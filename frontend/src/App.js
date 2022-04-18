import './App.css';
import React, {useState, useEffect} from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import Results from "./pages/results"
import Navbar from './components/navbar';





function App() {

  let [jobs, setJobs] = useState([])

  useEffect(() => {
    fetch("http://localhost:4000/jobs")
    .then(resp => resp.json())
    .then(data => {
      setJobs(data)
    })
  }, [])

  console.log(jobs)




  return (
    <div className="App">
      
    <Navbar/>

    <Routes>

    <Route path="/" element={<Home />}/>
    <Route path="/results" element={<Results />}/>

    </Routes>

    </div>
  );
}

export default App;
