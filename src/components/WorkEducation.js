import React, {useState} from 'react';
import Fade from 'react-reveal/Fade';
import SwiperCore, { Mousewheel, Navigation, Controller } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import './work_education.scss';

SwiperCore.use([Mousewheel, Navigation, Controller]);

export default function WorkEducation() {
    return (
        <Fade left cascade>
            <Swiper
                mousewheel={{forceToAxis: "true"}}
                setWrapperSize={true}
                freeMode={true}
                spaceBetween={0}
                slidesPerView={1}
            >
                <SwiperSlide>
                    <section style={{width: "200vw"}}>
                        <section class="timeline">
                            <ol>
                            <li>
                                <div>
                                <time>1957</time> In mattis elit vitae odio posuere, nec maximus massa varius. Suspendisse varius volutpat mattis. Vestibulum id magna est.
                                </div>
                            </li>
                            <li>
                                <div>
                                <time>1957</time> In mattis elit vitae odio posuere, nec maximus massa varius. Suspendisse varius volutpat mattis. Vestibulum id magna est.
                                </div>
                            </li>
                            <li>
                                <div>
                                <time>1957</time> In mattis elit vitae odio posuere, nec maximus massa varius. Suspendisse varius volutpat mattis. Vestibulum id magna est.
                                </div>
                            </li>
                            <li>
                                <div>
                                <time>1967</time> Aenean condimentum odio a bibendum rhoncus. Ut mauris felis, volutpat eget porta faucibus, euismod quis ante.
                                </div>
                            </li>
                            <li>
                                <div>
                                <time>1977</time> Vestibulum porttitor lorem sed pharetra dignissim. Nulla maximus, dui a tristique iaculis, quam dolor convallis enim, non dignissim ligula ipsum a turpis.
                                </div>
                            </li>
                            <li>
                                <div>
                                <time>1985</time> In mattis elit vitae odio posuere, nec maximus massa varius. Suspendisse varius volutpat mattis. Vestibulum id magna est.
                                </div>
                            </li>
                            <li>
                                <div>
                                <time>2000</time> In mattis elit vitae odio posuere, nec maximus massa varius. Suspendisse varius volutpat mattis. Vestibulum id magna est.
                                </div>
                            </li>
                            <li>
                                <div>
                                <time>2005</time> In mattis elit vitae odio posuere, nec maximus massa varius. Suspendisse varius volutpat mattis. Vestibulum id magna est.
                                </div>
                            </li>
                            <li></li>
                            </ol>
                        </section>
                    </section>
                </SwiperSlide>
                <SwiperSlide>
                </SwiperSlide>
            </Swiper>
        </Fade>
    );
}
