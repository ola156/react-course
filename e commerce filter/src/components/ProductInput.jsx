import React from "react";

const ProductInput = () => {
  return (
    <div>
      <h3 className="my-4  text-center">Products</h3>
      <div className=" flex flex-col ms-14  ">
        <label htmlFor="all">
          <input type="checkbox" id="all" className="mr-3 " />
          All
        </label>
        <label htmlFor="sneaker">
          <input type="checkbox" id="sneaker" className="mr-3 " />
          Sneaker
        </label>
      </div>
    </div>
  );
};

export default ProductInput;
