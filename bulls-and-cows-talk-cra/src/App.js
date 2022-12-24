import './App.css';
import React from 'react';
import Title from './Title';
import InputShow from './InputShow';
import TalkSpace from './TalkSpace';
import FormDiv from './FormDiv';
import { checkSubmittedInput, alertInvalidInput } from './validate';
import { gameExplanation, generateTalksAboutInput } from './Talks';
import { generateAnswer } from './Answer';

function App() {

  const [answer, setAnswer] = React.useState(generateAnswer()); // 상태: answer
  const [input, setInput] = React.useState("");  // 상태: input
  const [counter, setCounter] = React.useState(0);  // 상태: counter(시도 횟수)
  const [log, setLog] = React.useState([]); // 상태: 입력했던 숫자들
  const [talks, setTalks] = React.useState([gameExplanation]);  // 상태: talk


  // form에서 input이 바뀔 때마다 불릴 함수
  const handleInputChange = (e) => {
    setInput(e.target.value);
  }

  // form에서 최종적으로 input을 전송했을 때 불릴 함수
  const handleFormSubmit = (e) => {
    e.preventDefault();

    const validation = checkSubmittedInput(input, log); // input에 있는 문제점 받아옴

    if (validation === "none") {
      setCounter(counter + 1);
      setTalks([...talks, ...generateTalksAboutInput(input, answer, counter)]);
      setLog([...log, input]);
    }
    else alertInvalidInput(validation);
  }

  return (
    <div>
      <Title />
      <InputShow input={input} log={log} />
      <TalkSpace talks={talks} />
      <FormDiv handleInputChange={handleInputChange} handleFormSubmit={handleFormSubmit} />
    </div>
  )
}









export default App;
