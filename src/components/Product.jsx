import React from "react";
import { BiCartAdd } from "react-icons/bi";

function Product({ obj, handleClick }) {
  return (
    <div className="flex  bg-lime-200 bg-purple-100 justify-between rounded-md py-3 px-3">
      <div className="flex items-center">
        <img src={obj.img} alt="loading error" className=" w-20 h-20" />
        <h1 className="text-xl font-bold">{obj.name}</h1>
      </div>
      <div className="flex items-center gap-3 ">
        <h1 className="text-xl">RS {obj.price}</h1>
        <div className="  text-2xl text-black flex justify-center items-center bg-green-500 cursor-pointer w-10 h-10 rounded-full ">
          <BiCartAdd onClick={() => handleClick(obj)} />
        </div>
      </div>
    </div>
  );
}

export default Product;
