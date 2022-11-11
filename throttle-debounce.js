const refs = {
  input1: document.querySelector(".input1"),
  button: document.querySelector("button"),
};

const handleInput = (e) => {
  const { value } = e.target;

  console.log("input:", value);
};

const handleClick = () => {
  console.log("click...");
};

refs.button.addEventListener("click", handleClick);

refs.input1.focus();
refs.button.click();

// refs.input1.addEventListener("input", _.throttle(handleInput, 300));
refs.input1.addEventListener("input", _.debounce(handleInput, 300));
