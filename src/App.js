import React, { useEffect } from 'react';
import Scrollspy from 'react-scrollspy';
import Reveal from 'react-reveal/Reveal';
import About from './components/About';
import './App.css';
import './custom.scss';

function App() {
  return (
    <div id="top">

      {/* Navbar */}
      <nav className="navbar navbar-expand-sm sticky-top">
        
        {/* Brand */}
        <nav><a className="name" href="#">Huy</a></nav>
        
        {/* Navbar links */}
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

          {/* Generate CV button */}
          <button className="btn btn-primary"  onClick={() => {console.log(window.scrollY)}}>Generate CV</button>
        </Scrollspy>
      </nav>
      
      {/* Main */}
      <Reveal effect="animated-fadeInUp">
        {/* About */}
        <section id="about" className="section">
          <About />
        </section>

        {/* Education */}
        <section id="education" className="section">
          <h1>Education</h1>
        </section>

        {/* Experience */}
        <section id="experience" className="section">
          <h1>Experience</h1>
        </section>

        {/* Achievements */}
        <section id="achievements" className="section">
          <h1>Achievements</h1>
        </section>

        {/* Contact */}
        <section id="contact" className="section">
          <h1>Contact</h1>
        </section>
      </Reveal>
    </div>
  );
}

export default App;
