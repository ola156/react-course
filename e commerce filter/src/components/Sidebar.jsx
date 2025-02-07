import React from "react";
import ProductInput from "./ProductInput";

const Sidebar = () => {
  return (
    <div className="w-[20%] h-full fixed z-1 border-r border-gray-300">
      <h1 className="mt-7 text-center text-2xl">Filter</h1>
      <hr className="mt-4" />

      <div>
        <ProductInput />
      </div>
    </div>
  );
};

export default Sidebar;
