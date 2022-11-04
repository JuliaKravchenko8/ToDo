const refs = {
  step: document.querySelector(".step"),
  value: document.querySelector(".value"),
  increment: document.querySelector(".increment"),
  decrement: document.querySelector(".decrement"),
  //   пошук через атрибути, якщо класи однакові
  //   increment: document.querySelector('button[data-action="increment"]'),
  //   decrement: document.querySelector('button[data-action="decrement"]'),
};

let count = 0;
let step = 1;
console.log(refs);
const render = () => {
  refs.value.textContent = count;
};

const handleDecrement = () => {
  count -= step;
  render();
};

const handleIncrement = () => {
  count += step;
  render();
};

const handleStepChange = (event) => {
  step = Number(event.target.value);

  refs.value.style.fontSize = `${step}px`;
};
render();

refs.decrement.addEventListener("click", handleDecrement);
refs.increment.addEventListener("click", handleIncrement);
refs.step.addEventListener("change", handleStepChange);
