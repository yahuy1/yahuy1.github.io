import React from 'react';
import Fade from 'react-reveal/Fade';
import "./honors.scss";

export default function Honors() {
    return (
        <div id="container">
            <Fade up>
                <a className="honor_item" href="http://miamioh.meritpages.com/stories/Huy-Nguyen-Named-To-President-s-List-at-Miami-University/59756227">
                    <h5><b>President's List</b></h5>
                    <h6>Miami University</h6>
                    <h6>Spring 2021</h6>
                </a>
                
                <a className="honor_item" href="http://miamioh.meritpages.com/stories/Huy-Nguyen-Named-To-President-s-List-at-Miami-University-/49312901">
                    <h5><b>President's List</b></h5>
                    <h6>Miami University</h6>
                    <h6>Fall 2020</h6>
                    </a>

                <div className="honor_item">
                    <h5><b>VOI Third Prize</b></h5>
                    <h6>Vietnam Olympiad in Informatics</h6>
                    <h6>2020</h6>
                </div>

                <div className="honor_item">
                    <h5><b>APIO TST Contestant</b></h5>
                    <h6>Asia Pacific Informatics Olympiad</h6>
                    <h6>Team Selection Test</h6>
                    <h6>2019</h6>
                </div>

                <div className="honor_item">
                    <h5><b>VOI Second Prize</b></h5>
                    <h6>Vietnam Olympiad in Informatics</h6>
                    <h6>2019</h6>
                </div>
            </Fade>
        </div>
    );
}