import React from 'react'
import './scrollup.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUp } from '@fortawesome/free-solid-svg-icons'

function ScrollUp() {
    window.addEventListener("scroll", function(){
        const scrollUp = this.document.querySelector(".scrollup");

        // when scroll is higher than 560vh add show_scroll to `a` tag with scrolltop class
        if ((this.scrollY) >= 560) scrollUp.classList.add("show_scroll");
        else scrollUp.classList.remove("show_scroll");
    })
  return (
    <a href="#" className="scrollup">
        <FontAwesomeIcon icon={faArrowUp} className='scrollup_icon'/>
    </a>
  )
}

export default ScrollUp