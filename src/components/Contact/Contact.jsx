import React from 'react'
import "./contact.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { faFacebookMessenger } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faPaperPlane } from '@fortawesome/free-regular-svg-icons'

function Contact() {
  return (
    <section className="contact_section section" id="contact">
        <h2 className="section_title">
            Get in touch
        </h2>
        <span className="section_subtitle">
            Contact Me
        </span>

        <div className="contact_container container grid">
            <div className="contact_content">
                <h3 className="contact_title">
                  Talk to me
                </h3>
              
                <div className="contact_info">

                  <div className="contact_card">
                    <FontAwesomeIcon icon={faEnvelope} className='contact_card-icon'/>

                    <h3 className="contact_card-title">Email</h3>
                    <span className="contact_card-data">saran.pnh@gmail.com</span>

                    <a href="mailto:saran.pnh@gmail.com" className="contact_button">
                      Write Me
                      <FontAwesomeIcon icon={faArrowRight} className='contact_button-icon'/>
                    </a>

                  </div>
                  <div className="contact_card">
                    <FontAwesomeIcon icon={ faFacebookMessenger} className='contact_card-icon'/>

                    <h3 className="contact_card-title">Messenger</h3>
                    <span className="contact_card-data">Saran Panhom</span>
                    
                    <a href="https://m.me/saran.panhom.3/" className="contact_button" target='__blank'>
                      Write Me
                      <FontAwesomeIcon icon={faArrowRight} className='contact_button-icon'/>
                    </a>

                  </div>

                </div>


            </div>
            <div className="contact_content">
              <h3 className="contact_title">
                Feel free to Contact me, I will get back to you as soon as possible.
              </h3>

              <form action="" className="contact_form">
                <div className="contact_form-div">
                  <label className="contact_form-tag">Name</label>
                  <input 
                    type="text" 
                    name='name'
                    className='contact_form-input'
                    placeholder='Enter your name'

                  />
                </div>
                <div className="contact_form-div">
                  <label className="contact_form-tag">Mail</label>
                  <input 
                    type="email" 
                    name='email'
                    className='contact_form-input'
                    placeholder='Enter your email'

                  />
                </div>
                <div className="contact_form-div contact_form-area">
                  <label className="contact_form-tag">Message</label>
                  <textarea name="message" id="" cols="30" rows="10" className='contact_form-input' placeholder='Enter your message'></textarea>
                </div>

                <button className="button button--flex">
                  Send Message
                  <FontAwesomeIcon icon={ faPaperPlane } className='button_icon'/>

                </button>

              </form>

            </div>

        </div>

    </section>
  )
}

export default Contact