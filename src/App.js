import React from 'react';
import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import About from './components/About';
import Project from './components/Project';
import Contact from './components/Contact';
import './App.css';


function App() {
  return (
    <div className='col-md justify-content-center margin-auto'>
      <Navbar sticky="top"  />
      <Project/>
  
      <About />
      <Contact />
    </div>
  );
}

export default App;
