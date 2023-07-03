import React from 'react';
import './About.css';
import Info from './Info';

import AboutImg from '../../assets/About_img.jpg';
import CV from '../../assets/Saran-CV.pdf';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileLines } from '@fortawesome/free-regular-svg-icons';


function About() {
  return (
    <section className="about section" id="about">
        <h2 className="section_title">
            About Me
        </h2>
        <span className="section_subtitle">My Introduction</span>

        <div className="about_container container grid">
            <img src={AboutImg} alt="" className="about_img" />

            <div className="about_data">

                <Info/>

                <p className="about_describ">
                    What I've got in my major?
                    <ul className="about_describ-list">
                        <li>Electronics and Digital System Design</li>
                        <li>Network and Telcommunication System</li>
                        <li>Software Development</li>
                    </ul>
                </p>

                <a download="" href={CV} className="button button--flex">
                    Dowload CV
                    <FontAwesomeIcon icon={faFileLines} className='doc-icon'/>
                </a>

            </div>


        </div>
    </section>
  )
}

export default About