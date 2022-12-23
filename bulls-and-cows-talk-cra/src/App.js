import './App.css';
import React from 'react';
import Title from './Title';
import InputShow from './InputShow';
import TalkSpace from './TalkSpace';
import FormDiv from './FormDiv';
import { generateAnswer, compareWithAnswer } from './Answer';
import { checkSubmittedInput, alertInvalidInput } from './validate';

function App() {
  // 상태: input
  const [input, setInput] = React.useState("");

  // form에서 input이 바뀔 때마다 불릴 함수
  const handleInputChange = (e) => {
    setInput(e.target.value);
  }

  // form에서 최종적으로 input을 전송했을 때 불릴 함수
  const handleFormSubmit = (e) => {
    e.preventDefault();

    const validation = checkSubmittedInput(input); // input에 있는 문제점 받아옴

    if (validation === "none") {
      alert("올바른 입력!"); // TODO: TalkSpace의 톡에 대한 상태를 변화시켜라.
    }
    else alertInvalidInput(validation);
  }

  return (
    <div>
      <Title />
      <InputShow input={input} />
      <TalkSpace />
      <FormDiv handleInputChange={handleInputChange} handleFormSubmit={handleFormSubmit} />
    </div>
  )
}









export default App;
