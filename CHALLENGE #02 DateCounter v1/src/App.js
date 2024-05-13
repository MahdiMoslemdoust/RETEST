import "./styles.css";
import React, { useState } from 'react';

export default function App() {
  const [step ,setStep] = useState(1);
  const [counter, setCounter] = useState(0)
  const [date , setDate] = useState(new Date()) ;

  function AddStep() {
    setStep(step +1);
  }
  
  function MinusStep() {
    setStep(step -1);
  }

  function AddCounter() {
    setCounter(counter + step)
    date.setDate(date.getDate() + step);
  }

  function MinusCounter() {
    setCounter(counter - step)
    date.setDate(date.getDate() - step);
  }


  return (
    <div className="App">
      <div>
      <button onClick={MinusStep}>-</button>
      Step:{step}
      <button onClick={AddStep}>+</button>
        </div>
        <div>
      <button onClick={MinusCounter}>-</button>
      Counter:{counter}
      <button onClick={AddCounter}>+</button>
        </div>
   
    <div> {!counter ? 'Today is' : `${counter} days from today`} {FormattedDate(date)}</div>
      </div>
  );
}



function FormattedDate(date) {

  const days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
  const months = ['January','February','March','April','May','June','July','August','September','October','November','December'];
  
  const year = date.getFullYear();
  const month =months[date.getMonth()];
  const wday = days[date.getDay()];
  const day =date.getDate();
  
  
  return (`${wday} ${month} ${day} ${year}`)
  
  }

