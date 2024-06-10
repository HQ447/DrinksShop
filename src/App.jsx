import { useState } from "react";
import "./App.css";
import End from "./End";
import Address from "./Address";
import Inception from "./Inception";
import Drinks from "./Drinks";
import Name from "./Name";
import Contact from "./Contact";
import Welcome from "./Welcome";

function App() {
  const [isShow, setisShow] = useState("welcome");

  function renderCom() {
    if (isShow == "welcome") return <Welcome setisShow={setisShow} />;
    if (isShow == "drinks") return <Drinks setisShow={setisShow} />;
    if (isShow == "name") return <Name setisShow={setisShow} />;
    if (isShow == "contact") return <Contact setisShow={setisShow} />;
    if (isShow == "address") return <Address setisShow={setisShow} />;
    // if (isShow == "inception") return <Inception setisShow={setisShow} />;
    if (isShow == "end") return <End />;
  }

  return (
    <section
      id="sec"
      className="flex w-full h-screen justify-center items-center"
    >
      {renderCom()}

      {isShow !== "welcome" ? (
        <div className="ribbon w-3/4 fixed bottom-6 flex justify-center items-center gap-24">
          <div
            className={`${isShow == "drinks" ? "active" : ""} dot rounded-full`}
            onClick={() => setisShow("drinks")}
          ></div>
          <div
            className={`${isShow == "name" ? "active" : ""} dot rounded-full`}
            onClick={() => setisShow("name")}
          ></div>
          <div
            className={`${
              isShow == "contact" ? "active" : ""
            } dot rounded-full`}
            onClick={() => setisShow("contact")}
          ></div>
          <div
            className={`${
              isShow == "address" ? "active" : ""
            } dot rounded-full`}
            onClick={() => setisShow("address")}
          ></div>
          {/* <div
            className={`${
              isShow == "inception" ? "active" : ""
            } dot rounded-full`}
            onClick={() => setisShow("inception")}
          ></div> */}
          <div
            className={`${isShow == "end" ? "active" : ""} dot rounded-full`}
            onClick={() => setisShow("end")}
          ></div>

          <div className="line"></div>
        </div>
      ) : (
        ""
      )}
    </section>
  );
}

export default App;
