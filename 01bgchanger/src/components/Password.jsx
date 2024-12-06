import React, { useState } from "react";
import Todoitem from "./Todoitem";

const Password = () => {
  const [todo, setTodo] = useState({ name: "", stasus: false });
  const [todos, setTodos] = useState([]);

  function handleSubmit(e) {
    e.preventDefault();
    setTodos([...todos, todo]);
    setTodo({ name: "", stasus: false });
  }

  const completedTodo = todos.filter((todo) => todo.status).length;
  const totalTodo = todos.length;

  const sortedTodos = todos
    .slice()
    .sort((a, b) => Number(a.status) - Number(b.status));

  return (
    <div className="mt-7 flex justify-center flex-col items-center ">
      <form onSubmit={handleSubmit}>
        <input
          onChange={(e) => setTodo({ name: e.target.value, status: false })}
          type="text"
          value={todo.name}
          placeholder="Enter a todo"
          className="py-2 px-3 mr-3 outline-none border  border-gray-500 "
        />

        <button
          type="submit"
          className="py-[12px] px-[20px] bg-black rounded text-white border-none"
        >
          Submit
        </button>
      </form>
      {sortedTodos.map((item) => (
        <Todoitem
          key={item.name}
          item={item}
          todos={todos}
          setTodos={setTodos}
        />
      ))}
      <div className="flex w-[50%] items-center justify-between bg-yellow-200 px-20 py-3 mt-7">
        <p>Completed Todos: {completedTodo}</p>
        <p> Total todos: {totalTodo}</p>
      </div>
    </div>
  );
};

export default Password;
