const refs = {
  button: document.querySelector("button"),
  input: document.querySelector("input"),
};

// click
// let size = 12;

// const handleWindowClick = () => {
//   console.log("click in window");
// };

// const handleBodyClick = () => {
//   console.log("click in body");
// };

// const handleClick = (event) => {
//   console.log("click on button");
//   event.target.style.fontSize = `${size++}px`;
// };

// window.addEventListener("click", handleWindowClick);
// document.body.addEventListener("click", handleBodyClick);
// refs.button.addEventListener("click", handleClick);

// --- input ---
const handleInput = (event) => {
  console.log(event.target.value);
};

refs.input.addEventListener("input", _.debounce(handleInput, 1000));
