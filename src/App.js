import React from 'react';
import Scrollspy from 'react-scrollspy';
import './App.css';
import './custom.scss';

function App() {
  return (
    <div id="top">
      <nav className="navbar navbar-expand-sm sticky-top">
        <nav><a className="name" href="#">Huy Nguyen Gia</a></nav>
        <Scrollspy 
          className="scrollspy nav navbar-nav" 
          items={ ['about', 'education', 'experience', 'achievements', 'contact'] } 
          currentClassName="current"
        >
          <li className="nav-item"><a className="nav-link" href="#about">About</a></li>
          <li className="nav-item"><a className="nav-link" href="#education">Education</a></li>
          <li className="nav-item"><a className="nav-link" href="#experience">Experience</a></li>
          <li className="nav-item"><a className="nav-link" href="#achievements">Achievements</a></li>
          <li className="nav-item"><a className="nav-link" href="#contact">Contact</a></li>
          <button className="btn btn-primary" onClick={() => {console.log(window.scrollY)}}>Generate CV</button>
        </Scrollspy>
      </nav>
        
      <div id="about" className="section">
        <h1>About</h1>
        <p>Hello, Portfolio Website In Production (=^･ω･^=)</p>
      </div>
      <div id="education" className="section">
        <h1>Education</h1>
      </div>
      <div id="experience" className="section">
        <h1>Experience</h1>
      </div>
      <div id="achievements" className="section">
        <h1>Achievements</h1>
      </div>
      <div id="contact" className="section">
        <h1>Contact</h1>
      </div>
    </div>
  );
}

export default App;
