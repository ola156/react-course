import React from "react";
import { useState } from "react";

const Cal = () => {
  const [inputValue, setInputValue] = useState("");
  const display = (value) => {
    setInputValue(inputValue + value);
  };

  const clear = () => {
    setInputValue("");
  };

  const calculate = () => {
    setInputValue(eval(inputValue));
  };

  return (
    <div className=" flex  justify-center my-[150px]">
      <div className="bg-slate-300 p-4 rounded">
        <input
          type="text"
          readOnly
          value={inputValue}
          className=" h-10 text-right rounded py-2 px-4 outline-none bg-slate-100"
        />

        <div className="mt-4 flex gap-4">
          <button
            className="bg-gray-400 p-2 rounded shadow w-20"
            onClick={() => clear()}
          >
            AC
          </button>
          <button
            className="bg-gray-400 p-2 rounded shadow w-10 ml-4 "
            onClick={() => display("/")}
          >
            /
          </button>

          <button
            className="bg-gray-400 p-2 rounded shadow w-10 "
            onClick={() => display("/100")}
          >
            %
          </button>
        </div>
        <div className="mt-2 flex gap-4">
          <button
            className="bg-gray-400 p-2 rounded shadow w-10"
            onClick={() => display("*")}
          >
            *
          </button>
          <button
            className="bg-gray-400 p-2 rounded shadow w-10 "
            onClick={() => display("9")}
          >
            9
          </button>
          <button
            className="bg-gray-400 p-2 rounded shadow w-10"
            onClick={() => display("8")}
          >
            8
          </button>
          <button
            className="bg-gray-400 p-2 rounded shadow w-10 "
            onClick={() => display("7")}
          >
            7
          </button>
        </div>

        <div className="mt-2 flex gap-4">
          <button
            className="bg-gray-400 p-2 rounded shadow w-10"
            onClick={() => display("-")}
          >
            -
          </button>
          <button
            className="bg-gray-400 p-2 rounded shadow w-10 "
            onClick={() => display("6")}
          >
            6
          </button>
          <button
            className="bg-gray-400 p-2 rounded shadow w-10"
            onClick={() => display("5")}
          >
            5
          </button>
          <button
            className="bg-gray-400 p-2 rounded shadow w-10 "
            onClick={() => display("4")}
          >
            4
          </button>
        </div>
        <div className="mt-2 flex gap-4">
          <button
            className="bg-gray-400 p-2 rounded shadow w-10"
            onClick={() => display("+")}
          >
            +
          </button>
          <button
            className="bg-gray-400 p-2 rounded shadow w-10 "
            onClick={() => display("3")}
          >
            3
          </button>
          <button
            className="bg-gray-400 p-2 rounded shadow w-10"
            onClick={() => display("2")}
          >
            2
          </button>
          <button
            className="bg-gray-400 p-2 rounded shadow w-10 "
            onClick={() => display("1")}
          >
            1
          </button>
        </div>
        <div className="mt-2 flex gap-4">
          <button
            className="bg-gray-400 p-2 rounded shadow w-10"
            onClick={() => display("00")}
          >
            00
          </button>
          <button
            className="bg-gray-400 p-2 rounded shadow w-10 "
            onClick={() => display("0")}
          >
            0
          </button>
          <button
            className="bg-gray-400 p-2 rounded shadow w-10"
            onClick={() => display(".")}
          >
            .
          </button>
          <button
            className="bg-gray-400 p-2 rounded shadow w-10 "
            onClick={() => calculate()}
          >
            =
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cal;
