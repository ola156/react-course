import React from "react";
import { useContext } from "react";
import { UserContexts } from "../App";

const UserContext = () => {
  const { user } = useContext(UserContexts);
  return (
    <div>
      <h1>User Profile</h1>
      <p>Name: {user.name}</p>
    </div>
  );
};

export default UserContext;
