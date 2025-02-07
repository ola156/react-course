import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  function increment() {
    setCount(count + 1);
  }
  return (
    <div>
      {count}
      <button onClick={increment}>increment</button>
    </div>
  );
};

export default Counter;
