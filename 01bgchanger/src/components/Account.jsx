import { useReducer } from "react";

const Account = () => {
  const [state, dispatch] = useReducer(reducer, { balance: 0, setBalance: 1 });
  function reducer(state, action) {
    if (action.type === "add") {
      return { ...state, balance: state.balance + state.setBalance };
    }
    if (action.type === "withdraw") {
      return { ...state, balance: state.balance - state.setBalance };
    }
    if (action.type === "setBalance") {
      return { ...state, setBalance: action.payload };
    }
  }

  return (
    <div>
      {state.balance}
      <input
        type="text"
        value={state.setBalance}
        onChange={(e) =>
          dispatch({ type: "setBalance", payload: Number(e.target.value) })
        }
      />

      <button
        onClick={() => dispatch({ type: "add", payload: 1 })}
        className="py-1 px-3 border"
      >
        Deposit
      </button>
      <button
        onClick={() => dispatch({ type: "withdraw", payload: 1 })}
        className="py-1 px-3 border"
      >
        Withdraw
      </button>
    </div>
  );
};

export default Account;
