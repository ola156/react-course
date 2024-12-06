import React from "react";

const Todoitem = ({ item, todos, setTodos }) => {
  const handleDelete = (item) => {
    console.log("delete ", item);
    setTodos(todos.filter((todo) => todo !== item));
  };

  const handleDash = (name) => {
    console.log("click ", name);
    setTodos(
      todos.map((todo) =>
        todo.name === name ? { ...todo, status: !todo.status } : todo
      )
    );
  };

  return (
    <div className="flex justify-between w-2/4 py-3 px-4 my-3 border border-gray-300 ">
      <h1 key={item.name} className="">
        <span
          onClick={() => handleDash(item.name)}
          className={`${item.status === true ? "line-through" : ""} `}
        >
          {item.name}
        </span>
      </h1>
      <button
        onClick={() => handleDelete(item)}
        className="py-[3px] px-[19px] bg-black rounded text-white border-none  items-center"
      >
        x
      </button>
    </div>
  );
};

export default Todoitem;
