import React, { useState } from "react";
import { createContext } from "react";
import Entry from "./sections/Entry";
import UserContext from "./sections/UserContext";

export const UserContexts = createContext();
const App = () => {
  const [user, setName] = useState({ name: "usman" });
  const updateUser = (inputVal) => {
    setName({ name: inputVal });
  };
  return (
    <UserContexts.Provider value={{ user, updateUser }}>
      <UserContext />
      <Entry />
    </UserContexts.Provider>
  );
};

export default App;
