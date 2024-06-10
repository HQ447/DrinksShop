import "../App.css";

function Input(props) {
  return (
    <div className="flex flex-col w-full  px-6">
      <label htmlFor="inp" className="my-3">
        {props.label}
      </label>
      <input
        type="text"
        id="inp"
        placeholder={props.placeholder}
        className="form-input w-4/5  py-1 bg-transparent focus:outline-none "
      />
    </div>
  );
}

export default Input;
