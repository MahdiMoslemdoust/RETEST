import { useEffect,useState } from "react";

export default function App() {
  const [firstCur, setFirstCur] = useState("USD");
  const [secondCur, setSecondCur] = useState("EUR");
  const [amount, setAmount] = useState("");
  const [output, setOutput] = useState("");

  useEffect(
    function () {
      const controller = new AbortController();
      async function fetchData() {
        try {
          const res = await fetch(
            `https://api.frankfurter.app/latest?amount=${amount}&from=${firstCur}&to=${secondCur}`,
            { signal: controller.signal }
          );
          const data = await res.json();
          if (firstCur===secondCur) {
            setOutput(amount)
          }
          if (data.rates){
          const [rate] = Object.values(data.rates);
          setOutput(rate)}
            }
        catch (err) {
          if(err.name !== "AbortError")
          console.log(err.message)
          }
      }
      fetchData()
      return function () {
        controller.abort();
      };
    },
    [firstCur,secondCur,amount]
  );
  return (
    <div>
      <input
      type="text"
      placeholder="Enter the amount..."
      value={amount}
      onChange={(e) => setAmount(e.target.value)}
    />
      <select onChange={(e) => setFirstCur(e.target.value)}>
        <option value="USD" >USD</option>
        <option value="EUR" >EUR</option>
        <option value="CAD" >CAD</option>
        <option value="INR" >INR</option>
      </select>
      <select onChange={(e) => setSecondCur(e.target.value)}>
        <option value="EUR" >EUR</option>
        <option value="USD" >USD</option>
        <option value="CAD" >CAD</option>
        <option value="INR" >INR</option>
      </select>
  <p>{output}  {amount ? secondCur : ""}</p>
    </div>
  );
}
