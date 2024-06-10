import Button from "./components/Button";
import { FaCartShopping } from "react-icons/fa6";
import { IoArrowBackCircle } from "react-icons/io5";
import "./App.css";
import { useState } from "react";
import Chart from "./Chart";
import Option from "./Option";

function Drinks({ setisShow }) {
  const [showChart, setShowChart] = useState(false);
  const [cart, setCart] = useState([]);

  function handleClick(item) {
    if (cart.indexOf(item) !== -1) return;
    setCart([...cart, item]);
    console.log(cart);
  }

  function handleIncDec(item, d) {
    const ind = cart.indexOf(item);
    const arr = cart;
    arr[ind].amount += d;
    if (arr[ind].amount === 0) arr[ind].amount = 1;
    setCart([...arr]);
    console.log(arr[ind].amount);
  }

  function handleIcon() {
    setShowChart((prev) => !prev);
  }

  return (
    <div className="flex flex-col  justify-center items-center bg-white  py-3 rounded-lg   w-2/3 px-4 relative">
      <div className="flex relative  w-full justify-center items-center  py-1">
        <h1 className="md-text text-grey">
          {showChart ? "Selected Drinks" : "Choose Your Drink"}
        </h1>
        <div className="icons absolute right-3 flex md-text">
          {showChart ? (
            <IoArrowBackCircle onClick={handleIcon} />
          ) : (
            <div className="flex relative p-3">
              <p className=" w-4 h-4 absolute right-0 text-xs flex justify-center items-center top-0 rounded-full bg-red-600 text-white">
                {cart.length}
              </p>
              <FaCartShopping onClick={handleIcon} />
            </div>
          )}
        </div>
      </div>
      <div className="flex w-full my-5">
        {showChart ? (
          <Chart cart={cart} setCart={setCart} handleIncDec={handleIncDec} />
        ) : (
          <Option handleClick={handleClick} />
        )}
      </div>

      <Button text={"Next →"} setValue={() => setisShow("name")} />
    </div>
  );
}

export default Drinks;
