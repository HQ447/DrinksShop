import "../App.css";

function Button(props) {
  return (
    <button
      onClick={props.setValue}
      className="bg-green w-full flex rounded-lg py-2 flex justify-center items-center"
    >
      <h1>{props.text}</h1>
    </button>
  );
}

export default Button;
