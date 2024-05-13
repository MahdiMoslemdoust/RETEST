import { useReducer } from "react";
import styles from "./styles.css";

export default function App() {
  const initialState = {
    balance: 0,
    loan: 0,
    isActive: false,
  };

  const [{ balance, loan, isActive }, dispatch] = useReducer(
    reducer,
    initialState
  );
  function reducer(state, action) {
    switch (action.type) {
      case "openAcc":
        return {
          ...state,
          balance: 500,
          isActive: true,
        };
      case "dep":
        return {
          ...state,
          balance: state.balance + 150,
        };
      case "wit":
        return {
          ...state,
          balance: state.balance - 50,
        };
      case "reqL":
        return {
          ...state,
          balance: state.balance + 5000,
          loan: state.loan + 5000,
        };
      case "closeAcc":
        if (state.balance === 0 && state.loan === 0) {
          return {
            ...state,
            isActive: false,
          };
        }
        if (state.loan !== 0) {
          alert("you must pay the loan first");
          return {
            ...state,
          };
        }
      case "payL":
        if (state.balance >= 5000) {
          return {
            ...state,
            balance: state.balance - 5000,
            loan: state.loan - 5000,
          };
        }
        if (state.balance < 5000) {
          alert(
            "your balance is not enough to pay the loan!😢 more Deposit plz"
          );
          return { ...state };
        }
      default:
        console.log("Ridi golam");
    }
  }
  return (
    <div className="App">
      <h1>useReducer Bank Account</h1>
      <p>Balance: {balance}</p>
      <p>Loan: {loan}</p>

      <p>
        <button
          onClick={() => dispatch({ type: "openAcc" })}
          disabled={isActive}
        >
          Open account
        </button>
      </p>
      <p>
        <button onClick={() => dispatch({ type: "dep" })} disabled={!isActive}>
          Deposit 150
        </button>
      </p>
      <p>
        <button
          onClick={() => dispatch({ type: "wit" })}
          disabled={!isActive || balance === 0}
        >
          Withdraw 50
        </button>
      </p>
      <p>
        <button onClick={() => dispatch({ type: "reqL" })} disabled={!isActive}>
          Request a loan of 5000
        </button>
      </p>
      <p>
        <button
          onClick={() => dispatch({ type: "payL" })}
          disabled={loan === 0}
        >
          Pay loan
        </button>
      </p>
      <p>
        <button
          onClick={() => dispatch({ type: "closeAcc" })}
          disabled={balance !== 0 || isActive === false || loan !== 0}
        >
          Close account
        </button>
      </p>
    </div>
  );
}
