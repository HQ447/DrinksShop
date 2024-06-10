import Button from "./components/Button";
import "./App.css";
import Input from "./components/Input";

function Contact({ setisShow }) {
  return (
    <div className="flex flex-col justify-center items-center bg-white py-3 rounded-lg  w-2/3 px-4 relative">
      <h1 className="sm-text w-full py-1 text-center shade text-white">
        Contact
      </h1>
      <div className="flex w-full justify-around my-6">
        <Input placeholder="john123@gmail.com" label="Email Address" />
        <Input placeholder="+0000000" label="Phone No" />
      </div>
      <div className="flex w-full gap-4 ">
        <Button text={"← Prev"} setValue={() => setisShow("name")} />
        <Button text={"Next →"} setValue={() => setisShow("address")} />
      </div>
    </div>
  );
}

export default Contact;
