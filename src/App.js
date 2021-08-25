import './App.css';
import {useEffect, useState} from 'react'

function App() {

  let [num, setNum] = useState(0);

  let [reFresh, setReFresh] = useState(0);
  
  useEffect(() => {
    console.log('useEffect');
    setNum(0);
  },[reFresh]);

  return (
    <div className="App">
      <input type='text' value={num} onChange={ () => {setNum(num + 1)} }/>
      <button onClick={ () => {setReFresh(1)} }>초기화</button>
    </div>
  );
}

export default App;
