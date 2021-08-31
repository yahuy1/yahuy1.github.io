import React from 'react';
import Fade from 'react-reveal/Fade';
import "./honors.scss";

export default function Honors() {
    return (
        <div id="container">
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
    );
}