import './App.css';
import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import Results from "./pages/results"
import Navbar from './components/navbar';





function App() {
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
