import "./App.scss";
import { useState } from "react";
import Dock from './components/Dock';
import Nav from './components/Nav';
import Github from './components/windows/Github';
import Note from './components/windows/Note';
import Resume from './components/windows/Resume';
import Spotify from './components/windows/Spotify';
import Cli from './components/windows/Cli';

function App() {
  const [windowState, setWindowState] = useState({
    github: false,
    note: false,
    resume: false,
    spotify: false,
    cli: false,
  });
  const [minimizedState, setMinimizedState] = useState({
    github: false,
    note: false,
    resume: false,
    spotify: false,
    cli: false,
  });

  const openWindow = (name) => {
    setWindowState((s) => ({ ...s, [name]: true }));
    setMinimizedState((s) => ({ ...s, [name]: false }));
  };

  return (
    <main>
      <Nav />
      <Dock
        windowState={windowState}
        minimizedState={minimizedState}
        openWindow={openWindow}
      />
      {windowState.github && (
        <Github
          windowName="github"
          setwindowState={setWindowState}
          setMinimizedState={setMinimizedState}
        />
      )}
      {windowState.note && (
        <Note
          windowName="note"
          setwindowState={setWindowState}
          setMinimizedState={setMinimizedState}
        />
      )}
      {windowState.resume && (
        <Resume
          windowName="resume"
          setwindowState={setWindowState}
          setMinimizedState={setMinimizedState}
        />
      )}
      {windowState.spotify && (
        <Spotify
          windowName="spotify"
          setwindowState={setWindowState}
          setMinimizedState={setMinimizedState}
        />
      )}
      {windowState.cli && (
        <Cli
          windowName="cli"
          setwindowState={setWindowState}
          setMinimizedState={setMinimizedState}
        />
      )}
    </main>
  );
}

export default App;
