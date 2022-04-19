import './App.css';
import React, {useState, useEffect} from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import Results from "./pages/results"
import Navbar from './components/navbar';
import Login from './pages/login';
import Signup from './pages/signup';





function App() {

  let [jobs, setJobs] = useState([])
  const [frontier, setFrontier] = useState("")
  const [location, setLocation] = useState("")
  let [summary, setSummary] = useState([])

  console.log(jobs)

  useEffect(() => {
    fetch("http://localhost:4000/jobs")
    .then(resp => resp.json())
    .then(data => {
      setJobs(data)
    })
  }, [])

  useEffect(() => {
    document.body.style.overflow ='hidden';
}, [])

  function formData(frontier,location) {
   setFrontier(frontier)
   setLocation(location)
  }

  function displayNewCard(summary) {
    setSummary(summary)
  }


  return (
    <div className="App">
      
    <Navbar/>

    <Routes>

    <Route path="/" element={<Home formData={formData} />}/>
    <Route path="/results" element={<Results location={location} frontier={frontier} jobs={jobs} displayNewCard={displayNewCard} summary={summary} />}/>
    <Route path="/login" element={<Login/>}/>
    <Route path="/signup" element={<Signup/>}/>
    <Route path="/results" element={<Results location={location} frontier={frontier} jobs={jobs} />}/>


    </Routes>

    </div>
  );
}

export default App;
