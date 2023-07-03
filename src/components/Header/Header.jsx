import React, { useState } from 'react'
import './Header.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons'

function Header() {
    window.addEventListener("header", function(){
        const header = this.document.querySelector(".header");

        // when header is higher than 560vh add show_header to `a` tag with headertop class
        if ((this.scrollY) >= 80) header.classList.add("scroll_header");
        else header.classList.remove("scroll_header");
    })

    const [Toggle, showMenu] = useState(false);
    const [activeNav, setActiveNav] = useState('#home');

  return (
    <header className="header">
        <nav className="nav container">
          <a href="#" className="nav_logo">
            Saran
          </a>
          
          <div className={Toggle ? "nav_menu show-menu" : "nav_menu"}>
            <ul className="nav_list grid">

              <li className="nav_item">
                <a href="#home" onClick={() => setActiveNav('#home')}
                className={ activeNav === "#home" ? "nav_link active-link": "nav_link"}>Home</a>
              </li>

              <li className="nav_item">
                <a href="#about" onClick={() => setActiveNav('#about')}
                className={ activeNav === "#about" ? "nav_link active-link": "nav_link"}>About</a>
              </li>

              <li className="nav_item">
                <a href="#skill" onClick={() => setActiveNav('#skill')}
                className={ activeNav === "#skill" ? "nav_link active-link": "nav_link"}>Skills</a>
              </li>

              <li className="nav_item">
                <a href="#contact" onClick={() => setActiveNav('#contact')}
                className={ activeNav === "#contact" ? "nav_link active-link": "nav_link"}>Contact</a>
              </li>

            </ul>

            <FontAwesomeIcon icon={faCircleXmark} className="nav_close" onClick={() => showMenu
            (!Toggle)} />

          </div>

          <div className="nav_toggle" onClick={() => showMenu
          (!Toggle)}>
            <FontAwesomeIcon icon={faBars} />
          </div>

        </nav>
    </header>
  )
}

export default Header