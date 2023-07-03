import React from 'react'

function Board() {
  return (
    <div className="skill_info grid">
        <div className="skill_box">
            <h3 className="skill_title">
                Technical
            </h3>
            <span className="skill_subtitle">
                I learn many things, Maybe I'm A Jack Of All Trades.
            </span>
            <h4 className='skill_topic'>
                What I learn and Practice :
            </h4>
            <ul className="skill_list">
                <li>Python - Often Use.</li>
                <li>MATLAB - Often use.</li>
                <li>LTspice - Often use.</li>
                <li>HTML/CSS/JS - Basic.</li>
                <li>ReactJS - Beginer</li>
                <li>Assembly - Forgotten</li>
                <li>VHDL - Forgotten</li>
            </ul>

        </div>
        <div className="skill_box">
            <h3 className="skill_title">
                 Design and Creativity
            </h3>
            <span className="skill_subtitle">
                I love simple and clean design patterns.
            </span>
            <h4 className='skill_topic'>
                Tools I use :
            </h4>
            <ul className="skill_list">
                <li>Figma Prototyping - Basic.</li>
                <li>DaVinci Resolve - Basic.</li>
                <li>Audacity - Often use</li>
                <li>OBS - Basic</li>
            </ul>

            

        </div>
        <div className="skill_box">
            <h3 className="skill_title">
                Soft Skill
            </h3>
            <span className="skill_subtitle">
                I like to improve my soft skill whether speaking, musics and ect.
            </span>
            
            <h4 className='skill_topic'>
                Always development. :
            </h4>
            <ul className="skill_list">
                <li>Public Speaking - Good.</li>
                <li>Design Thinking - Often Use.</li>
                <li>Research - Good.</li>
                <li>Teamwork - Good.</li>
            </ul>
        </div>
    </div>
  )
}

export default Board