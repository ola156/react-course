import { useState } from "react";
import React from "react";

const BgChange = () => {
  const [color, setColor] = useState("yellow");
  return (
    <>
      <div className="w-full h-screen" style={{ backgroundColor: color }}>
        <div className="flex flex-wrap justify-center">
          <div className="absolute bottom-11 bg-white px-6 py-5  gap-3 rounded-lg flex flex-wrap">
            <button
              onClick={() => setColor("red")}
              className="rounded px-4 py-2  shadow-lg  text-white"
              style={{ backgroundColor: "red" }}
            >
              Red
            </button>
            <button
              onClick={() => setColor("green")}
              className="rounded px-4 py-2  shadow-lg "
              style={{ backgroundColor: "green" }}
            >
              Green
            </button>
            <button
              onClick={() => setColor("yellow")}
              className="rounded px-4 py-2  shadow-lg "
              style={{ backgroundColor: "yellow" }}
            >
              Yellow
            </button>
            <button
              onClick={() => setColor("purple")}
              className="rounded px-4 py-2  shadow-lg "
              style={{ backgroundColor: "purple" }}
            >
              Voilet
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default BgChange;
