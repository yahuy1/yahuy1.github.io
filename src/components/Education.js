import React from 'react';
import Fade from 'react-reveal/Fade';
import SwiperCore, { Mousewheel, Navigation, Controller } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import './education.scss';

SwiperCore.use([Mousewheel, Navigation, Controller]);

export default function WorkEducation() {
    return (
        <Swiper
            mousewheel={{forceToAxis: "true"}}
            freeMode={true}
            spaceBetween={0}
            slidesPerView={1}
            grabCursor={true}
        >
            <SwiperSlide>
                <section style={{width: "200vw"}}>
                    <section className="timeline">
                        <Fade right cascade>
                            <ol>
                            <li>asd
                                <div>
                                    <time>Aug 2017</time> 
                                    <p><b>Phan Boi Chau High School for The Gifted</b></p>
                                    <p>Informatics Specialized Class</p>
                                </div>
                            </li>
                            <li>
                                <div>
                                    <time>May 2020</time> 
                                    <p><b>Phan Boi Chau High School for the Gifted</b></p>
                                    <ul className="timeline-item-list">
                                        <p>Graduate</p>
                                        <li>11th Grade GPA: 9.2</li>
                                        <li>12th Grade GPA: 9.3</li>
                                    </ul>
                                </div>
                            </li>
                            <li>
                                <div>
                                    <time>Aug 2020</time>
                                    <p><b>Miami University</b></p>
                                    <p>B.S. in Computer Science</p>
                                </div>
                            </li>
                            <li>
                                <div>
                                <time>Dec 2020</time> 
                                <p><b>BENIT PTY LTD</b></p>
                                <p>Software Engineer Intern</p>
                                </div>
                            </li>
                            <li>
                                <div>
                                <time>Mar 2021</time>
                                <p><b>BENIT PTY LTD</b></p>
                                <ul className="timeline-item-list">
                                        <p>End of Internship</p>
                                        <li>Develop grading functionality for an educational website</li>
                                        <li>Re-design the company's intern roadmap</li>
                                    </ul>
                                </div>
                            </li>
                            <li>
                                <div>
                                <time>April 2021</time> 
                                <p><b>Developh Vietnam</b></p>
                                <p>Mentor/Developer</p>
                                </div>
                            </li>
                            <li></li>
                            </ol>
                        </Fade>
                    </section>
                </section>
            </SwiperSlide>
            <SwiperSlide>
                <div style={{width: "0vw"}}></div>
            </SwiperSlide>
        </Swiper>
    );
}
