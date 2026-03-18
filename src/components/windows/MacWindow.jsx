import React, { useEffect, useState } from 'react'
import { Rnd } from 'react-rnd';
import "./MacWindow.scss";

const MacWindow = ({children,width="40vw",height="40vh", windowName, windowState, setwindowState, setMinimizedState}) => {
  const [closing, setClosing] = useState(false);
  const [minimizing, setMinimizing] = useState(false);
  const [maximized, setMaximized] = useState(true);
  const [rndState, setRndState] = useState({ width: window.innerWidth, height: window.innerHeight, x: 0, y: 0 });
  const [restoreRect, setRestoreRect] = useState({ width: 600, height: 400, x: 100, y: 80 });

  useEffect(() => {
    if (closing) {
      const timer = setTimeout(() => {
        setwindowState(state => ({ ...state, [windowName]: false }));
      }, 180);
      return () => clearTimeout(timer);
    }

    if (minimizing) {
      const timer = setTimeout(() => {
        setwindowState(state => ({ ...state, [windowName]: false }));
        setMinimizedState(state => ({ ...state, [windowName]: true }));
      }, 180);
      return () => clearTimeout(timer);
    }
  }, [closing, minimizing, setwindowState, setMinimizedState, windowName]);

  const handleClose = () => setClosing(true);
  const handleMinimize = () => setMinimizing(true);
  const toggleMaximize = () => {
    setMaximized((curr) => {
      if (curr) {
        // currently maximized -> restore
        setRndState({ ...restoreRect });
        return false;
      }
      // currently restored -> maximize
      setRestoreRect({ width: rndState.width, height: rndState.height, x: rndState.x, y: rndState.y });
      setRndState({ width: window.innerWidth, height: window.innerHeight, x: 0, y: 0 });
      return true;
    });
  };

  const size = maximized
    ? { width: window.innerWidth, height: window.innerHeight }
    : { width: rndState.width, height: rndState.height };
  const position = maximized ? { x: 0, y: 0 } : { x: rndState.x, y: rndState.y };

  return (
    <Rnd
      size={size}
      position={position}
      disableDragging={maximized}
      enableResizing={!maximized}
      onDragStop={(e, d) => setRndState((s) => ({ ...s, x: d.x, y: d.y }))}
      onResizeStop={(e, direction, ref, delta, position) => {
        setRndState({
          width: ref.style.width,
          height: ref.style.height,
          x: position.x,
          y: position.y,
        });
      }}
      minWidth={200}
      minHeight={150}
      bounds="parent"
    >
      <div className={`window ${closing ? 'closing' : minimizing ? 'minimizing' : 'opening'} ${maximized ? 'maximized' : ''}`}>
        <div className="nav">
          <div className="dots">
            <div onClick={handleClose} className="dot red"></div>
            <div onClick={toggleMaximize} className="dot yellow"></div>
            <div onClick={handleMinimize} className="dot green"></div>
            <div className="title"><p>sumirankamde - zsh</p></div>
          </div>
        </div>
        <div className="main-content">
          {children}
        </div>
      </div>
    </Rnd>
  );
}

export default MacWindow