import React from "react";
import { AiOutlineShoppingCart, AiOutlineUserAdd } from "react-icons/ai";
import { FiHeart } from "react-icons/fi";

const Navbar = () => {
  return (
    <nav className="relative z-10 flex border-b-2  border-gray-100  border-[1px] justify-around items-center p-4  ml-[17rem]">
      <div>
        <input
          type="text"
          className="px-4 py-3 border-[1px] border-gray-200 outline-none mr-4 rounded relative w-[14rem]"
          placeholder="Enter Shoe type"
        />
      </div>

      <div className="flex">
        <a href="#">
          <FiHeart className="w-[1.5rem] h-[1.5rem] ml-[1rem]" />
        </a>
        <a href="#">
          <AiOutlineShoppingCart className="w-[1.5rem] h-[1.5rem] ml-[1rem]" />
        </a>
        <a href="#">
          <AiOutlineUserAdd className="w-[1.5rem] h-[1.5rem] ml-[1rem]" />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
