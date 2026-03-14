import { useState } from 'react';
import "./App.scss";
import Dock from './components/Dock';
import Nav from './components/Nav';


function App() {

  return (
    <main>
      <Nav/>
      <Dock/>
    </main>
  )
}

export default App
