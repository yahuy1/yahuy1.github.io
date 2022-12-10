import React from 'react';
import Fade from 'react-reveal/Fade';
import "./honors.scss";

export default function Honors() {
    return (
        <div id="honors-container">
            <div class="container-2">
                <h1>Awards</h1><br />
                <div class="container-1">
                    <Fade down>
                        <a className="honor_item" target="_blank" href="http://miamioh.meritpages.com/stories/Huy-Nguyen-Named-To-President-s-List-at-Miami-University/59756227" rel="noreferrer">
                            <h4><i>President's List</i></h4>
                            <h6>Miami University</h6>
                            <h6>Spring 2021</h6>
                        </a>
                        
                        <a className="honor_item" target="_blank" href="http://miamioh.meritpages.com/stories/Huy-Nguyen-Named-To-President-s-List-at-Miami-University-/49312901" rel="noreferrer">
                            <h4><i>President's List</i></h4>
                            <h6>Miami University</h6>
                            <h6>Fall 2020</h6>
                            </a>

                        <div className="honor_item">
                            <h4><i>VOI Third Prize</i></h4>
                            <h6>Vietnam Olympiad in Informatics</h6>
                            <h6>2020</h6>
                        </div>

                        <div className="honor_item">
                            <h4><i>APIO TST Contestant</i></h4>
                            <h6>Asia Pacific Informatics Olympiad</h6>
                            <h6>Team Selection Test</h6>
                            <h6>2019</h6>
                        </div>

                        <div className="honor_item">
                            <h4><i>VOI Second Prize</i></h4>
                            <h6>Vietnam Olympiad in Informatics</h6>
                            <h6>2019</h6>
                        </div>
                    </Fade>
                </div>
            </div>
            <div class="container-2">
                <h1>Projects</h1><br />
                <div class="container-1 project">
                    <Fade down>
                        <a className="honor_item project" target="_blank" href="https://github.com/yahuy1/java-atm" rel="noreferrer">
                            <h4><i>Java ATM Application</i></h4>
                            <br/><br/>
                            <h6>ATM simulator that runs on console</h6>
                            <br></br>
                            <h6><i>Java</i></h6>
                            <br></br>
                        </a>
                        <a className="honor_item project" target="_blank" href="https://github.com/yahuy1/cse383_final_project" rel="noreferrer">
                            <h4><i>Weather App</i></h4>
                            <br/><br/>
                            <h6>Generate 5-day weather forecast for selected location.</h6>
                            <br />
                            <h6><i>HTML/CSS, jQuery, Bootstrap, OpenStack, PHP</i></h6>
                            <br />
                        </a>
                        <a className="honor_item project" target="_blank" href="https://github.com/yahuy1/tickingstabs" rel="noreferrer">
                            <h4><i>Ticking Stabs</i></h4>
                            <br/><br/>
                            <h6>Minimalistic cusotmizable typing test application</h6>
                            <br />
                            <h6><i>React</i></h6>
                            <br />
                        </a>
                    </Fade>
                </div>
            </div>
        </div>
    );
}