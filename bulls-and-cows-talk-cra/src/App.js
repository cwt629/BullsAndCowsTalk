import './App.css';
import React from 'react';
import Title from './Title';
import InputShow from './InputShow';
import TalkSpace from './TalkSpace';
import FormDiv from './FormDiv';
import { generateAnswer, compareWithAnswer } from './Answer';

function App() {
  // 상태: input
  const [input, setInput] = React.useState("");

  // form에서 input이 바뀔 때마다 불릴 함수
  const handleInputChange = (e) => {
    setInput(e.target.value);
  }

  return (
    <div>
      <Title />
      <InputShow input={input} />
      <TalkSpace />
      <FormDiv onChange={handleInputChange} />
    </div>
  )
}









export default App;
