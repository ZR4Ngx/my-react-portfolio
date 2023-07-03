import React from 'react';
import "./Home.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';


function Social() {
  return (
    <div className="home_social">
        <a href="https://www.instagram.com/srn.gx" className="home_social-icon" target={'_blank'}>
            <FontAwesomeIcon icon={ faInstagram } />
        </a> 
        <a href="https://github.com/ZR4Ngx" className="home_social-icon" target={'_blank'}>
            <FontAwesomeIcon icon={ faGithub } />
        </a>
        <a href="https://linkedin.com/in/saran-panhom-55b6ab266" className="home_social-icon" target={'_blank'}>
            <FontAwesomeIcon icon={ faLinkedin } />
        </a>
    </div>
  )
}

export default Social