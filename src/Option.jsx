import { useState } from "react";
import "./App.css";
import Data from "./Data";
import Product from "./components/Product";

function Option({ handleClick }) {
  return (
    <div className="w-full flex flex-col overflow-auto  h-56 gap-3 ">
      {Data.map((obj) => (
        <Product key={obj.id} obj={obj} handleClick={handleClick} />
      ))}
    </div>
  );
}

export default Option;
