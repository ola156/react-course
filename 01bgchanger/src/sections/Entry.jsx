import React, { useState, useContext } from "react";
import { UserContexts } from "../App";

const Entry = () => {
  const { updateUser } = useContext(UserContexts);
  const [inputVal, setInputVal] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (inputVal.trim()) {
      updateUser(inputVal);
      setInputVal("");
    }
  };
  return (
    <div>
      <h1>Update User</h1>
      <form onClick={handleSubmit}>
        <input
          type="text"
          value={inputVal}
          onChange={(e) => setInputVal(e.target.value)}
        />
        <button type="submit">update</button>
      </form>
    </div>
  );
};

export default Entry;
