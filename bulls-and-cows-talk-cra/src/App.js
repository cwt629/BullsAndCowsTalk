import './App.css';
import React from 'react';
import Title from './Title';
import InputShow from './InputShow';
import TalkSpace from './TalkSpace';
import FormDiv from './FormDiv';
import { generateAnswer, compareWithAnswer } from './Answer';

function App() {
  return (
    <div>
      <Title />
      <InputShow />
      <TalkSpace />
      <FormDiv />
    </div>
  )
}









export default App;
