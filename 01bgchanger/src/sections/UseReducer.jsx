import React, { useReducer } from "react";
import { useState } from "react";

const initialState = { count: 0 };

const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return { ...state, count: state.count + 1 };
    case "decrement":
      return { ...state, count: state.count - 1 };
    case "incrementby2":
      return { ...state, count: state.count + 2 };
    case "multipltby5":
      return { ...state, count: state.count * 5 };

    case "incrementbyamount":
      return { ...state, count: state.count + action.payload };
    case "reset":
      return { ...state, count: 0 };

    default:
      return state;
  }
};
const UseReducer = () => {
  const [number, setNumber] = useState("");
  const [state, dispatch] = useReducer(reducer, initialState);
  const handleChange = (e) => {
    setNumber(e.target.value);
  };

  const handleIncrement = () => {
    dispatch({ type: "incrementbyamount", payload: Number(number) });
    setNumber(0);
  };
  return (
    <div>
      <h1>Count : {state.count}</h1>

      <button onClick={() => dispatch({ type: "increment" })}>+</button>
      <button onClick={() => dispatch({ type: "decrement" })}>-</button>
      <button onClick={() => dispatch({ type: "reset" })}>reset</button>
      <button onClick={() => dispatch({ type: "incrementby2" })}>+2</button>
      <button onClick={() => dispatch({ type: "multipltby5" })}>*5</button>

      <input type="text" value={number} onChange={handleChange} />
      <button onClick={handleIncrement}>Add</button>
    </div>
  );
};

export default UseReducer;
