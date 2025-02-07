import React from "react";
import { useState } from "react";

const Todo = () => {
  const [arr, setArr] = useState([]);
  const [array, setArray] = useState([]);
  const handleSubmit = (e) => {
    e.preventDefault();
    setArray([...array, arr]);
    setArr([])
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={arr}
          onChange={(e) => setArr(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
      {array.map((a) => (
        <h4 key={a}>{a}</h4>
      ))}
    </div>
  );
};

export default Todo;
