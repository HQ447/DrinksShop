import { useState, useEffect } from "react";
import "./App.css";
import { IoTrashBin } from "react-icons/io5";

function Chart({ cart, setCart, handleIncDec }) {
  const [price, setPrice] = useState(0);
  const [count, setCount] = useState(0);

  function handleRemove(id) {
    let arr = cart.filter((item) => item.id !== id);
    setCart(arr);
    handleTotalPrice();
  }

  function handleTotalPrice() {
    let cash = 0;
    let countAmout = 0;
    {
      cart.map((item) => (cash += item.price * item.amount));
      cart.map((item) => (countAmout += item.amount));
    }

    setPrice(cash);
    setCount(countAmout);
  }

  useEffect(() => {
    handleTotalPrice();
  });

  return (
    <div className=" w-full flex flex-col overflow-auto  h-56 gap-3">
      {cart.map((item) => (
        <div
          key={item.id}
          className="flex justify-between p-4 bg-lime-200 rounded-md"
        >
          <div className="flex items-center gap-5">
            <img src={item.img} alt="error" className="w-20 h-20" />
            <div className="flex flex-col gap-3">
              <h1 className="text-xl font-bold">{item.name}</h1>
              <div className="inc flex gap-1 items-center ">
                <button
                  onClick={() => handleIncDec(item, -1)}
                  className=" flex justify-center items-center w-7 h-7  bg-white rounded-full "
                >
                  -
                </button>
                <p>{item.amount}</p>
                <button
                  onClick={() => handleIncDec(item, 1)}
                  className="flex justify-center items-center w-7 h-7 bg-white rounded-full"
                >
                  +
                </button>
              </div>
              <h1>
                {item.amount}x{item.price}
              </h1>
              <h1>RS {item.price * item.amount}</h1>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <button className="  text-red-600 text-3xl">
              <IoTrashBin onClick={() => handleRemove(item.id)} />
            </button>
          </div>
        </div>
      ))}
      <h1 className="flex md-text w-full py-1 px-3 justify-end">
        {cart.length === 0
          ? "Your Wishlist is Empty , Please Select Your Fav Products"
          : `Total Price of ${count} items are ${price}`}
      </h1>
    </div>
  );
}

export default Chart;
