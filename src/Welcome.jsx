import "./App.css";
import { CiBeerMugFull } from "react-icons/ci";
import Button from "./components/Button";

function Welcome({ setisShow }) {
  return (
    <div className="flex flex-col  justify-center items-center bg-white py-3 rounded-lg w-2/3 px-4 ">
      <CiBeerMugFull className="lg-text" />
      <h1>Juice Up</h1>
      <h1 className="lg-text mt-7">Drink Your Roots!</h1>
      <p className="sm-text mb-7">Shop in 6 Simple Steps</p>
      <Button text={"Start →"} setValue={() => setisShow("drinks")} />
    </div>
  );
}

export default Welcome;
