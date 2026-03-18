import React from 'react'
import MacWindow from './MacWindow'
import "./Resume.scss"

const Resume = () => {
  return (
    <MacWindow>
        <div className="resume-window">
            <embed src="/resume.pdf" style={{ border: 0, width: '100%', height: '100%' }} />
        </div>
    </MacWindow>
  )
}

export default Resume