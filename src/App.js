
import { useState } from 'react'
import './App.css';
import ListComponent from './component/ListComponent'
import TestComponent from './component/TestComponent'

function App() {
  
  let data = 'Do you want to build a Snowman?';

  const answer = () => {
    return 'Go away Anna';
  }

  let [myString, setMyString] = useState(1);

  let [inputText, setInputText] = useState({
    text1: '',
    text2: ''
  });

  const onChange = (e) => {
    const {name, value} = e.target;
    console.log(name);
    console.log(value);

    setInputText({
      ...inputText, // 기존의 input 객체를 복사한 뒤
      [name]: value // name 키를 가진 값을 value 로 설정
    })
  }


  return (
    <div className="App">
      <nav>
        <div className='blog'>Blog</div>
      </nav>
      <h1>{ data }</h1>
      <h2 style={ { color: 'red' } }>{ answer() }</h2>
      <p onClick={ () => { setMyString(myString + 1) } }>Moe { myString } 名</p>

      <TestComponent title={ myString }></TestComponent>

      <ListComponent />


      <input name='text1' onChange={onChange}></input>
      <input name='text2' onChange={onChange}></input>

      <p>1 Input : { inputText.text1 }</p>
      <p>2 Input : { inputText.text2 }</p>
    </div>
  );
}

export default App;
