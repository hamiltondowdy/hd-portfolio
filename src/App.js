import React from 'react';
import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import About from './components/About';
import Project from './components/Project';
import Contact from './components/Contact';

function App() {
  return (
    <div className='body-part'>
      <Navbar sticky="top" />
      {" "} 
      <About />
      {" "} 
      <Project />
      {" "} 
      <Contact />
    </div>
  );
}

export default App;
