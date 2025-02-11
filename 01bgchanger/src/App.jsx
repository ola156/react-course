import React, { useState } from "react";
import { createContext } from "react";
import Entry from "./sections/Entry";
import UserContext from "./sections/UserContext";
import UseReducer from "./sections/UseReducer";

export const UserContexts = createContext();
const App = () => {
  {
    /* const [user, setName] = useState({ name: "usman" });
  const updateUser = (inputVal) => {
    setName({ name: inputVal });
  };
    <UserContexts.Provider value={{ user, updateUser }}>
      <UserContext />
      <Entry />
    </UserContexts.Provider>*/
  }
  return (
    <div>
      <UseReducer />
    </div>
  );
};

export default App;
