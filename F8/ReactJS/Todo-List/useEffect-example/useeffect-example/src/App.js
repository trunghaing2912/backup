import {useState} from 'react';
import './App.css';
import Content from './Content';
import Resize from './Resize';
import Countdown from './Countdown'
import Preview from './Preview';
import ChatApp from './ChatApp'
import LayoutEffect from './LayoutEffect';
import UseRef from './UseRef';

function App() {
  const[show, setShow] = useState(false)
  const[showResize, setShowResize] = useState(false)
  const[showCountDown, setShowCountDown] = useState(false)
  const[showPreview, setShowPreview] = useState(false)
  const[showChatApp, setShowChatApp] = useState(false)
  const[showLayoutEffect, setShowLayoutEffect] = useState(false)
  const[showRef, setShowRef] = useState(false)


  return (
    <div style={{padding: 20}}>
      <button onClick={() => setShow(!show)}>Toggle</button>
      {show && <Content/>}
      <button onClick={() => setShowResize(!showResize)}>Resize</button>
      {showResize && <Resize />}
      <button onClick={() => setShowCountDown(!showCountDown)}>Count Down</button>
      {showCountDown && <Countdown />}
      <button onClick={() => setShowPreview(!showPreview)}>Preview</button>
      {showPreview && <Preview />}
      <button onClick={() => setShowChatApp(!showChatApp)}>Chat App</button>
      {showChatApp && <ChatApp />}
      <button onClick={() => setShowLayoutEffect(!showLayoutEffect)}>Layout Effect</button>
      {showLayoutEffect && <LayoutEffect />}
      <button onClick={() => setShowRef(!showRef)}>Use Ref</button>
      {showRef && <UseRef />}
    </div>
  );
}

export default App;
