import "./styles.css";
import { useState } from "react"

export default function App() {


  const [bill, setBill] = useState("");
  const [myTip, setMyTip] = useState("")
  const [friendTip,setFriendTip] = useState("")



  function Bill(amount) {
  
    return (<label>
          How much was the bill? <input type="number" 
            value={amount}
            onChange={(e) => setBill(e.target.value)} />
        </label>)
  }
  
  function MyTip(amount) {
  
    return(<label>
          How did you like the service? 
          <select value={amount} onChange={(e) => setMyTip(e.target.value)} >
          <option value="0">Dissatisfied (0%)</option>
          <option value="0.05">It was OK (5%)</option>
          <option value="0.1">It was good (10%)</option>
          <option value="0.2">Absolutly amazing (20%)</option>
        </select>
        </label>)
  }
  
  function FriendsTip(amount) {
  
    return(<label>
      How did your friend like the service? 
      <select value={amount} onChange={(e) => setFriendTip(e.target.value)}>
      <option value="0">Dissatisfied (0%)</option>
      <option value="0.05">It was OK (5%)</option>
      <option value="0.1">It was good (10%)</option>
      <option value="0.2">Absolutly amazing (20%)</option>
    </select>
    </label>)
  }
  
  
  function TipCalculator(a,b,c) {
  return <div>
  {a>0 ?`You Pay ${(Number(b)+Number(c)).toFixed(2)*a/2 + Number(a)}$ (${a}$ + ${(Number(b)+Number(c)).toFixed(2)*a/2}$)` : ""}
  </div>
  }
  
  function handleReset(){
    setBill("")
    setMyTip("")
    setFriendTip("")
  
  }
  
return (
  <div className="App">
    {Bill(bill)}
    <br />
    {MyTip(myTip)}
    <br />
    {FriendsTip(friendTip)}
    <br />
    <h3>
    {TipCalculator(bill,myTip,friendTip)}
    </h3>
    <button className="butt" onClick={handleReset}>Reset</button>
  </div>
);
}


