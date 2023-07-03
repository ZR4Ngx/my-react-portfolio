import React from 'react'
import './footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';

function Footer() {
  return (
    <footer className="footer">
        <div className="footer_container container">
            <h1 className="footer_title">Saran</h1>

            <ul className="footer_list">
                <li>
                    <a href="#about" className="footer_link">About</a>
                </li>
                <li>
                    <a href="#skill" className="footer_link">Skill</a>
                </li>
                <li>
                    <a href="#contact" className="footer_link">Contact</a>
                </li>
            </ul>

            <div className="footer_social">
                <a href="https://www.instagram.com/srn.gx" className="footer_social-icon" target={'_blank'}>
                    <FontAwesomeIcon icon={ faInstagram } />
                </a> 
                <a href="https://github.com/ZR4Ngx" className="footer_social-icon" target={'_blank'}>
                    <FontAwesomeIcon icon={ faGithub } />
                </a>
                <a href="https://linkedin.com/in/saran-panhom-55b6ab266" className="footer_social-icon" target={'_blank'}>
                    <FontAwesomeIcon icon={ faLinkedin } />
                </a>
            </div>

            <span className="footer_copy">
                &#169; saranpnh. All right reserved
            </span>
        </div> 
    </footer>
  )
}

export default Footer