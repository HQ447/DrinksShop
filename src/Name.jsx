import Button from "./components/Button";
import "./App.css";
import Input from "./components/Input";

function Name({ setisShow }) {
  return (
    <div className="flex flex-col justify-center items-center bg-white py-3 rounded-lg w-2/3  px-4 relative">
      <h1 className="sm-text w-full py-1 text-center shade text-white">Name</h1>
      <div className="flex w-full justify-center items-center gap-1 my-6">
        <Input placeholder="john" label="First Name" />
        <Input placeholder="Dev" label="Last Name" />
      </div>
      <div className="flex w-full gap-4 ">
        <Button text={"← Prev"} setValue={() => setisShow("drinks")} />
        <Button text={"Next →"} setValue={() => setisShow("contact")} />
      </div>
    </div>
  );
}

export default Name;
