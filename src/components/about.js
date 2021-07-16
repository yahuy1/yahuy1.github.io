import React, { useState } from 'react';
import profilePic from '../myPhoto.jpg';
import Reveal from 'react-reveal/Reveal';

function About() {
    return (
        <Reveal effect="animated-fadeInUp" cascade>
            {/* Profile Image */}
            <div className="img-border">
                <img 
                    src={profilePic} 
                    alt="mypicture" 
                    height="180px" 
                    width="180px" 
                />
            </div>

            {/* Description */}
            <h1 style={{fontSize: "40px"}}>Nguyen Gia Huy</h1>
            <p>Computer Science Sophomore @ Miami University</p>

            {/* Icons */}
            <div className="icon-container">
                <a href="https://github.com/yahuy1"><i class="bi bi-github text-icon"></i></a>
                <a href="https://www.linkedin.com/in/huy-nguyen-3023611ba/"><i class="bi bi-linkedin text-icon"></i></a>
                <a href="mailto:nguyengiahuyak29@gmail.com"><i class="bi bi-google text-icon"></i></a>
                <a href="https://www.facebook.com/yahuysan/"><i class="bi bi-facebook text-icon"></i></a>
            </div>
        </Reveal>
    );
}

export default About;