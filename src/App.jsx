import { useState } from 'react';
import "./App.scss";
import Dock from './components/Dock';
import Nav from './components/Nav';
import Github from './components/windows/Github';
import Note from './components/windows/Note';
function App() {

  return (
    <main>
      <Nav/>
      <Dock/>
      <Github/>
      <Note/>
    </main>
  )
}

export default App
