import './App.css';
import React from 'react';
import Title from './Title';
import InputShow from './InputShow';
import TalkSpace from './TalkSpace';
import FormDiv from './FormDiv';
import { checkSubmittedInput, alertInvalidInput } from './validate';
import { gameExplanation, generateTalksAboutInput } from './Talks';
import { generateAnswer, getCompareResult } from './Answer';

function App() {

  const [answer, setAnswer] = React.useState(generateAnswer()); // 상태: answer
  const [input, setInput] = React.useState("");  // 상태: input
  const [log, setLog] = React.useState([]); // 상태: 입력했던 숫자들
  const [talks, setTalks] = React.useState([gameExplanation]);  // 상태: talk
  const [counter, setCounter] = React.useState(0);  // 상태: counter(시도 횟수)
  const [correctFlag, setCorrectFlag] = React.useState(false); // 상태: 정답 맞춤 여부

  // form에서 input이 바뀔 때마다 불릴 함수
  const handleInputChange = (e) => {
    setInput(e.target.value);
  }

  // form에서 최종적으로 input을 전송했을 때 불릴 함수
  const handleFormSubmit = (e) => {
    e.preventDefault();

    // 이미 정답을 맞춘 경우
    if (correctFlag) {
      alert("이미 정답을 맞추셨습니다!\n새 게임을 진행하려면 페이지를 새로고침해주세요.");
      return;
    }

    const validation = checkSubmittedInput(input, log); // input에 있는 문제점 받아옴

    if (validation === "none") {
      const result = getCompareResult(input, answer);
      setCounter((prev) => {
        const nextCounter = prev + 1;
        // 바뀐 카운터 값이 talk에 들어가야 함
        setTalks((prev) => ([...prev, ...generateTalksAboutInput(input, result, nextCounter)]));
        return nextCounter;
      })
      setLog((prev) => ([...prev, input]));
      setCorrectFlag((result === "3 Strike")); // 정답을 맞춘 경우
      setInput("");
    }
    else alertInvalidInput(validation);
  }

  // talks가 바뀔 때마다 스크롤이 내려가도록 useRef와 useEffect 활용
  React.useEffect(() => {
    if (talks.length > 1) {
      let objDiv = document.getElementById("talkspace");
      objDiv.scrollTop = objDiv.scrollHeight;
    }
  }, [talks]);

  return (
    <div>
      <Title />
      <InputShow input={input} log={log} />
      <TalkSpace talks={talks} />
      <FormDiv input={input} handleInputChange={handleInputChange} handleFormSubmit={handleFormSubmit} />
    </div>
  )
}

export default App;
