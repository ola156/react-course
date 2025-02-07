import React, { useState } from "react";

const Profile = () => {
  const [name, setName] = useState({ name: "joe", age: 18 });
  const [inputName, setInputName] = useState("");
  const [inputAge, setInputAge] = useState("");

  function handleClick() {
    setName({ ...name, name: inputName, age: inputAge });
  }

  return (
    <div>
      <input
        className="border border-red-600"
        type="text"
        value={inputName}
        onChange={(e) => setInputName(e.target.value)}
      />
      <input
        type="number"
        className="border border-blue-600"
        value={inputAge}
        onChange={(e) => setInputAge(e.target.value)}
      />

      <button onClick={handleClick}>Change</button>

      <div>
        <h1>{name.name}</h1> <h3>{name.age}</h3>
      </div>
    </div>
  );
};

export default Profile;
