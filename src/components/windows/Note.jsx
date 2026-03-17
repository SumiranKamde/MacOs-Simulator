import React,{useEffect, useState} from 'react'
import Markdown from 'react-markdown'
import SyntaxHighLighter from 'react-syntax-highlighter';
import {atelierDuneDark} from 'react-syntax-highlighter/dist/esm/styles/hljs';
import MacWindow from './MacWindow'
import "./Note.scss"


const Note = () => {
    const[markdown, setmarkdown]=useState(null)
    useEffect(()=>{
        fetch("/note.txt")
        .then(res => res.text())
        .then(text => setmarkdown(text))

    },[])
  return (
    <MacWindow>
      <div className="note-window">
        {markdown ? <SyntaxHighLighter language='typescript' style={atelierDuneDark}>{markdown}</SyntaxHighLighter>:<p>Loading...</p>}
      </div>
    </MacWindow>
  )
}

export default Note