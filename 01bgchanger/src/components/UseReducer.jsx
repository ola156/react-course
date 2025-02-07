import React, { useReducer } from "react";

const UseReducer = () => {
  function reducer(action, state) {
    switch (action) {
      case "increment":
        return { ...state, count: state.count + 1 };
      case "decrement":
        return { ...state, count: state.count + 1 };
      case "reset":
        return { ...state, count: 0 };
      default:
        return state;
    }
  }

  const [state, dispatch] = useReducer(reducer, { count: 0 });

  return (
    <div>
      <h1 className="text-4xl"> Count: {state.count}</h1>
      <button onClick={() => dispatch({ type: "increment" })}>+</button>
    </div>
  );
};

export default UseReducer;
