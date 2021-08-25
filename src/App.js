import logo from './logo.svg';
import './App.css';
import { useState, useRef } from 'react';

function App() {

  const myRef = useRef();

  const clickEvent = () => {
    
    myRef.current.focus()
  }

  return (
    <div className="App">
      <input type='text' className='txt1' ref={myRef} />
      <input type='text' className='txt2' />
      <input type='button' onClick={clickEvent} />
    </div>
  );
}

export default App;
