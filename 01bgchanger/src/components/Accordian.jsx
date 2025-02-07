import React, { useState } from "react";
import data from "../assets/data.js";

const Accordian = () => {
  const [items, setItems] = useState(null);
  const [selected, setSelected] = useState(false);
  const [multiple, setMultiple] = useState([]);
  const handleSingle = (id) => {
    setItems(id === items ? null : id);
  };

  const handleAll = (id) => {
    let copyMultiple = [...multiple];
    const findIndex = copyMultiple.indexOf(id);
    if (findIndex === -1) {
      copyMultiple.push(id);
    } else {
      copyMultiple.slice(findIndex, 1);
      setMultiple(copyMultiple);
    }
  };

  return (
    <div className="">
      <div className="flex justify-center mb-10 rounded ">
        <button
          onClick={() => setSelected(!selected)}
          className="bg-amber-800 text-white px-5 py-2"
        >
          Open All
        </button>
      </div>
      <div>
        {data && data.length ? (
          data.map((datas) => (
            <div key={datas.id} className="flex justify-center text-white ">
              <div className="bg-amber-800 px-6 pb-5 w-[40%] mx-auto  mb-4">
                <div className="flex w-full justify-between p-3 text-xl">
                  <h4>{datas.question}?</h4>{" "}
                  <span
                    onClick={
                      setSelected
                        ? () => handleSingle(datas.id)
                        : () => handleAll(datas.id)
                    }
                  >
                    +
                  </span>
                </div>
                <div>
                  {items === datas.id || multiple.indexOf(datas.id) !== -1 ? (
                    <div className="text-sm">{datas.answer}</div>
                  ) : null}
                </div>
              </div>
            </div>
          ))
        ) : (
          <div>No Data</div>
        )}
      </div>
    </div>
  );
};

export default Accordian;
