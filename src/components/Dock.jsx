import React from 'react'
import "./Dock.scss"
const Dock = ({windowState, minimizedState, openWindow}) => {
  return (
    <footer className='dock'>
      <div
        onClick={() => openWindow('github')}
        className={`icon github ${minimizedState.github ? 'minimized' : ''}`}
      >
        <img src="./doc-icons/github.svg" alt="" />
        {minimizedState.github && <span className="minimized-badge" />}
      </div>
      <div
        onClick={() => openWindow('note')}
        className={`icon note ${minimizedState.note ? 'minimized' : ''}`}
      >
        <img src="./doc-icons/note.svg" alt="" />
        {minimizedState.note && <span className="minimized-badge" />}
      </div>
      <div
        onClick={() => openWindow('resume')}
        className={`icon pdf ${minimizedState.resume ? 'minimized' : ''}`}
      >
        <img src="./doc-icons/pdf.svg" alt="" />
        {minimizedState.resume && <span className="minimized-badge" />}
      </div>
      <div className="icon calender"><img src="./doc-icons/calender.svg" alt="" /></div>

      <div
        onClick={() => openWindow('spotify')}
        className={`icon spotify ${minimizedState.spotify ? 'minimized' : ''}`}
      >
        <img src="./doc-icons/spotify.svg" alt="" />
        {minimizedState.spotify && <span className="minimized-badge" />}
      </div>
      <div className="icon mail"><img src="./doc-icons/mail.svg" alt="" /></div>
      <div className="icon link"><img src="./doc-icons/link.svg" alt="" /></div>
      <div
        onClick={() => openWindow('cli')}
        className={`icon cli ${minimizedState.cli ? 'minimized' : ''}`}
      >
        <img src="./doc-icons/cli.svg" alt="" />
        {minimizedState.cli && <span className="minimized-badge" />}
      </div>
    </footer>
  );
};

export default Dock 