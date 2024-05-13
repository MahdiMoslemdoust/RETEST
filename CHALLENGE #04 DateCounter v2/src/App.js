import "./styles.css";
import React, { useState } from 'react';

export default function App() {
  const [step ,setStep] = useState(1);
  const [counter, setCounter] = useState(0)

  const date = new Date();
  date.setDate(date.getDate() + counter);


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
        <input 
        type='range' min='1' max='10' 
        value={step} 
        onChange={(e)=> setStep(Number(e.target.value))}>
        </input>
        <span>Step: {step}</span>
        </div>
        <div>
      <button onClick={MinusCounter}>-</button>
      <input type="text" value={counter} onChange={(e)=>setCounter(Number(e.target.value))}></input>
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
