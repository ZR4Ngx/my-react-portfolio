import React from 'react'
import './Skill.css'
import Board from './Board'


function Skills() {
  return (
    <section className="skill section" id="skill">
        <h2 className="section_title">
            Skills
        </h2>
        <span className="section_subtitle">
            My level?
        </span>

        <div className="skill_container container grid">
            
          <div className="skill_data">

            <Board />
            
          </div>

        </div>
    </section>
  )
}

export default Skills