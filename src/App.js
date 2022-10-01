import './App.css';
import Navbar from './components/Navbar';
import Collection from './components/Collection';
import About from './components/About';
import { Route, Routes } from 'react-router-dom';
import React, { Component }  from 'react';


function App() {
  return (
    <div className="App">
        <Navbar/>
        <Routes>
          <Route path="/" element={<Collection/>}/>
          <Route path="/About" element={<About/>}/>
        </Routes>

    </div>
  );
}

export default App;
