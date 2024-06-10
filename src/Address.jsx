import Button from "./components/Button";
import "./App.css";
import Input from "./components/Input";

function Address({ setisShow }) {
  return (
    <div className="flex flex-col justify-center items-center bg-white py-3 rounded-lg  w-2/3 px-4 relative">
      <h1 className="sm-text w-full py-1 text-center shade text-white">
        Address
      </h1>
      <div className="flex w-full justify-around  my-6">
        <Input
          placeholder="street 000 , main city , Country."
          label="Current Address"
        />

        <div className="flex justify-center items-center gap-2 w-full">
          <input
            type="radio"
            className="sm-text"
            id="cod"
            value="COD"
            name="COD"
          />
          <label htmlFor="cod" className="sm-text">
            Cash on Delivery
          </label>
        </div>
      </div>
      <div className="flex w-full gap-4 ">
        <Button text={"← Prev"} setValue={() => setisShow("contact")} />
        <Button text={"Next →"} setValue={() => setisShow("end")} />
      </div>
    </div>
  );
}

export default Address;
