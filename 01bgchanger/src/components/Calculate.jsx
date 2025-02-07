import React, { useState } from "react";

const Calculate = () => {
  const [inputValue, setInputValue] = useState("");

  const display = (value) => {
    setInputValue(inputValue + value);
    console.log(value);
  };

  const clear = () => {
    setInputValue("");
  };

  const calculate = () => {
    setInputValue(eval(inputValue));
  };

  return (
    <div className="w-[40%] my-[100px] mx-auto p-8 bg-slate-400">
      <input
        type="text"
        value={inputValue}
        className="w-full outline-none border-none bg-slate-200 h-7"
        readOnly
      />

      <div className="flex w-full ">
        <span
          className="w-[40%] bg-white cursor-pointer"
          onClick={() => clear()}
        >
          AC
        </span>
        <span
          className="p-3 bg-white cursor-pointer"
          onClick={() => display("/")}
        >
          /
        </span>
        <span
          className="p-3 bg-white cursor-pointer"
          onClick={() => display("+")}
        >
          +
        </span>
        <span
          className="p-3 bg-white cursor-pointer"
          onClick={() => display("4")}
        >
          4
        </span>
        <span
          className="p-3 bg-white cursor-pointer"
          onClick={() => display("2")}
        >
          2
        </span>
        <span
          className="p-3 bg-white cursor-pointer"
          onClick={() => calculate()}
        >
          =
        </span>
      </div>
    </div>
  );
};

export default Calculate;
