import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGraduationCap } from '@fortawesome/free-solid-svg-icons';
import { faAward } from '@fortawesome/free-solid-svg-icons';



function Info() {
  return (
    <div className="about_info grid">
        <div className="about_box">
            <FontAwesomeIcon icon={ faGraduationCap } className='about_icon'/>
            <h3 className="about_title">Education</h3>
            <span className="about_subtitle">King Mongkut's University of Technology Thonburi
                <p> Electronic and Telecommunication Engineering </p>
            </span>
        </div>
        <div className="about_box">
            <FontAwesomeIcon icon={ faAward } className='about_icon'/>
            <h3 className="about_title">Experience</h3>
            <span className="about_subtitle"> Intern Engineer
                <p>
                    NATIONAL TELECOM PUBLIC COMPANY LIMITED.
                </p>
            </span>
        </div>
    </div>
  )
}

export default Info