import React, { useState } from "react";
import MyTodoList from "./MyTodoList";

const MyTodo = () => {
  const [query, setQuery] = useState("");
  const [todos, setTodos] = useState([]);

  const handleChange = (event) => {
    setQuery(event.target.value);
  };

  const handleClick = () => {
    setTodos([...todos, query]);
    setQuery("");
  };
  return (
    <div className="p-6 mx-auto flex justify-center flex-col w-[500px]">
      <h1 className="text-center font-semibold mb-3 text-3xl">Todo</h1>
      <div>
        <input
          className="outline-none border-gray-200 border h-9 w-[60%] p-3"
          type="text"
          value={query}
          onChange={handleChange}
        />
        <button
          className=" bg-slate-500 ms-1 p-2 rounded w-[20%]"
          onClick={handleClick}
        >
          Add Todo
        </button>
      </div>

      <ul className="p-2 mt-4">
        {todos.map((todo) => (
          <MyTodoList
            todo={todo}
            todos={todos}
            setTodos={setTodos}
            key={todo}
          />
        ))}
      </ul>
    </div>
  );
};

export default MyTodo;
