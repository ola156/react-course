import React, { useState } from "react";

const MyTodoList = ({ todo, setTodos, todos }) => {
  const [completed, setCompleted] = useState(false);
  const [count, setCount] = useState(0);

  const handleCom = () => {
    setCompleted(!completed);
  };
  const handleDelete = (todo) => {
    console.log(todo);
    setTodos(
      todos.filter((item) => {
        item !== todo;
        console.log(item);
      })
    );
  };
  return (
    <div>
      <li className="p-1 mb-2 flex justify-between" key={todo}>
        <h5
          className={`${completed ? "line-through" : ""} `}
          onClick={handleCom}
        >
          {todo}
        </h5>{" "}
        <span
          onClick={() => handleDelete(todo)}
          className=" bg-gray-600 py-1 px-3 rounded-lg cursor-pointer"
        >
          Del
        </span>
      </li>
    </div>
  );
};

export default MyTodoList;
