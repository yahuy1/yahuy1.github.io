import React, { useState } from 'react';
import profilePic from '../myPhoto.jpg';
import Fade from 'react-reveal/Fade';
import './about.scss';

function About() {
    const [more, setMore] = useState(false);
    const [clicked, setClicked] = useState(false);

    return (
        <div>
            <div id="content-about">
                <div id="just-to-flex"></div>

                {/* Summary */}
                <div id="summary-about">
                    <Fade up cascade>
                        <div id="aaa" className={(clicked ? "animated-left-return " : "") + (more ? "animated-left-shift" : "")}>
                            {/* Profile Image */}
                            <div>
                                <div className="img-border">
                                    <img src={profilePic} alt="mypicture" height="180px" width="180px" />
                                </div>
                            </div>

                            {/* Description */}
                            <h1 style={{fontSize: "40px"}}>Nguyen Gia Huy</h1>
                            <p>Computer Science Sophomore @ Miami University</p>

                            {/* Icons */}
                            <div className="icon-container">
                                <a href="https://github.com/yahuy1" target="_blank"><i class="bi bi-github text-icon"></i></a>
                                <a href="https://www.linkedin.com/in/huy-nguyen-3023611ba/" target="_blank"><i class="bi bi-linkedin text-icon"></i></a>
                                <a href="mailto:nguyengiahuyak29@gmail.com" target="_blank"><i class="bi bi-google text-icon"></i></a>
                                <a href="https://www.facebook.com/yahuysan/" target="_blank"><i class="bi bi-facebook text-icon"></i></a>
                            </div>
                        </div>
                    </Fade>
                </div>

                {/* Details */}
                <div id="more-about" className={"hidden " + (clicked ? "animated-right-return " : "") + (more ? "animated-right-shift" : "")}>
                    <h1>About Me</h1>
                    {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vitae libero condimentum, finibus orci vel, imperdiet augue. Nulla odio tellus, faucibus nec maximus cursus, eleifend eu odio. Maecenas nec quam at nisl pellentesque convallis. Aenean ut mauris semper, mollis massa id, porttitor odio. Quisque sed accumsan augue. Vestibulum vel velit a felis ullamcorper imperdiet a pretium est. Suspendisse luctus bibendum quam pretium vehicula. Proin tempor pellentesque eros, vestibulum convallis massa lobortis ut. Morbi consequat in dolor vel semper. Maecenas elementum faucibus felis, rutrum commodo lectus faucibus ut.</p> */}
                    <p>Hello There!</p>
                    <p>My name is Huy. I am currently pursuing a Bachelor's Degree in Computer Science at Miami University and working as a web developer. I am competent at React, Express, NodeJS, and have had experience with other tools (jQuery, GraphQL, Amplify, . . .). I also love competitive programming and have been participating in this sport for a few years.</p>
                    <p>At the moment, I am focusing improving my skills, as well as learing new tools for Full Stack Software Development, and Artificial Intelligence too.</p>
                    <p>I am always open to new opportunities and challenges. If you would like to reach me, feel free to drop me a message using any method under the contact section.</p>
                    <p>Thank you for visiting :)</p>
                </div>
            </div>
            <Fade delay={1500}>
                <button style={{marginTop: "2vh"}}className="btn btn-primary" onClick={() => {setClicked(true); setMore(!more);}}>{!more ? "More About Me" : "Just Briefly"}</button>
            </Fade>
        </div>
    );
}

export default About;