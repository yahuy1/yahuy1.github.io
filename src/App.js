import React from 'react';
import Scrollspy from 'react-scrollspy';
import About from './components/About';
import Education from './components/Education';
import Honors from './components/Honors';
import Contacts from './components/Contacts';
import CV from './components/CV_HuyGiaNguyen.pdf'
import './app.scss';

function App() {
	return (
		<div id="top">

			{/* Navbar */}
			<nav className="navbar navbar-expand-sm sticky-top">

				{/* Brand */}
				<nav><a className="home" href="#top"><i className="bi bi-chevron-up" style={{ fontSize: '40px' }}></i></a></nav>

				{/* Navbar links */}
				<Scrollspy
					className="scrollspy nav navbar-nav"
					items={['about', 'education', 'honors', 'contacts']}
					currentClassName="current"
				>
					<li className="nav-item"><a className="nav-link" href="#about">About</a></li>
					<li className="nav-item"><a className="nav-link" href="#education">Work & Education</a></li>
					<li className="nav-item"><a className="nav-link" href="#honors">Honors & Projects</a></li>
					<li className="nav-item"><a className="nav-link" href="#contacts">Contacts</a></li>

					{/* Generate CV button */}
					<a className="btn" href={CV} target="_blank" rel="noreferrer">Download CV</a>
				</Scrollspy>
			</nav>

			{/* About */}
			<section id="about" className="page-section">
				<About />
			</section>

			{/* Work & Education */}
			<section id="education" className="page-section">
				<Education />
			</section>

			{/* Achievements */}
			<section id="honors" className="page-section">
				<Honors />
			</section>

			{/* Contact */}
			<section id="contacts" className="page-section">
				<Contacts />
			</section>
		</div>
	);
}

export default App;
