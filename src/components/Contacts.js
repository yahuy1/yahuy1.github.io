import React from 'react';
import './contacts.scss';

export default function Contact() {
    return (
        <div>
            <div id="contact_container">
                <div>
                    <div className="contact_item">
                        <p>Email: <a href="mailto:nguyengiahuyak29@gmail.com" target="_blank" rel="noreferrer">nguyengiahuyak29@gmail.com</a></p>
                    </div>
                    <div className="contact_item">
                        <p>Facebook: <a href="https://www.facebook.com/yahuysan/" target="_blank" rel="noreferrer">Gia Huy</a></p>
                    </div>
                </div>

                <div>
                    <div className="contact_item">
                        <p>Linkedin: <a href="https://www.linkedin.com/in/huy-nguyen-3023611ba/" target="_blank" rel="noreferrer">Huy Nguyen</a></p>
                    </div>
                    <div className="contact_item">
                        <p>GitHub: <a href="https://github.com/yahuy1" target="_blank" rel="noreferrer">yahuy1</a></p>
                    </div>
                </div>

                <div>
                    <div className="contact_item">
                        <p>Phone: +1 (513) 837-7821</p>
                    </div>
                    <div className="contact_item">
                        <p>Address: Oxford, Ohio, United States</p>
                    </div>
                </div>
            </div>
            <p id="copyright">Made with ReactJS. Last Updated: August 2021. © 2021 Huy Gia Nguyen</p>
        </div>
    );
}