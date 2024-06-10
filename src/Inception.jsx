import Button from "./components/Button";
import "./App.css";

function Inception({ setisShow }) {
  return (
    <div className="flex flex-col justify-center items-center bg-white py-3 rounded-lg  w-2/3 px-4 relative">
      <h1 className="sm-text w-full py-1 text-center shade text-white">
        Confirm Your Order
      </h1>
      <div className="flex w-full justify-around gap-6 my-6">
        <div className="flex flex-col">
          <h1>Name</h1>
          <h1>Last Name</h1>
          <h1>Email</h1>
          <h1>Address</h1>
          <h1>Phone No</h1>
        </div>
        <div className="flex flex-col">
          <h1>Products</h1>
          <h1>Price</h1>
          <h1>Cash on delivery</h1>
          <h1>Price</h1>
        </div>
      </div>
      <h1 className="flex md-text w-full py-1 justify-end">
        Total Price $0.00
      </h1>
      <div className="flex w-full gap-4 ">
        <Button text={"← Prev"} setValue={() => setisShow("address")} />
        <Button text={"Confirm →"} setValue={() => setisShow("end")} />
      </div>
    </div>
  );
}

export default Inception;
