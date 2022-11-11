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

// function throttle(callback, delay) {
//   let id = 0;

//   return function (e) {
//     if (id) return;

//     id = setTimeout(() => {
//       callback(e);
//       clearTimeout(id);
//       id = 0;
//     }, delay);
//   };
// }

// refs.input1.addEventListener("input", _.throttle(handleInput, 300));

function debounce(callback, delay) {
  let id = 0;

  return function (e) {
    if (id) {
      clearTimaout(id);
      id = 0;
    }

    id = setTimeout(() => {
      callback(e);
      clearTimeout(id);
      id = 0;
    }, delay);
  };
}

refs.input1.addEventListener("input", _.debounce(handleInput, 300));
