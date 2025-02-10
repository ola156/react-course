import React, { useReducer } from "react";

const initialState = { count: 0 };

const reducer = (state, type) => {
  switch (type) {
    case "increment":
      break;

    default:
      break;
  }
};
const UseReducer = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      UseReducer
      {state}
    </div>
  );
};

export default UseReducer;
