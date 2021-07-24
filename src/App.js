import React from 'react';
import Scrollspy from 'react-scrollspy';
import Fade from 'react-reveal/Fade';
import About from './components/About';
import WorkEducation from './components/WorkEducation';
import './app.scss';

function App() {
  return (
    <div id="top">

      {/* Navbar */}
      <nav className="navbar navbar-expand-sm sticky-top">
        
        {/* Brand */}
        <nav><a className="home" href="#top"><i className="bi bi-chevron-up" style={{fontSize: '40px'}}></i></a></nav>
        
        {/* Navbar links */}
        <Scrollspy 
          className="scrollspy nav navbar-nav" 
          items={ ['about', 'work_education', 'achievements', 'contact'] } 
          currentClassName="current"
        >
          <li className="nav-item"><a className="nav-link" href="#about">About</a></li>
          <li className="nav-item"><a className="nav-link" href="#work_education">Work & Education</a></li>
          <li className="nav-item"><a className="nav-link" href="#achievements">Achievements</a></li>
          <li className="nav-item"><a className="nav-link" href="#contact">Contact</a></li>

          {/* Generate CV button */}
          <button className="btn">Download CV</button>
        </Scrollspy>
      </nav>
      
      {/* About */}
      <section id="about" className="page-section">
        <About />
      </section>

      {/* Work & Education */}
      <section id="work_education" className="page-section">
          <WorkEducation />
      </section>

      <Fade>

        {/* Achievements */}
        <section id="achievements" className="page-section">
          <h1>Achievements</h1>
        </section>

        {/* Contact */}
        <section id="contact" className="page-section">
          <h1>Contact</h1>
        </section>
      </Fade>
    </div>
  );
}

export default App;
