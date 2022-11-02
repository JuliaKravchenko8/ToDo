import { Item } from "./Item.js";
import { items } from "./items.js";

const refs = {
  list: document.querySelector(".list"),
  form: document.querySelector(".form"),
  myButton: document.querySelector(".myButton"),
};

const render = () => {
  const lis = items.map((item) => Item(item));

  refs.list.innerHTML = "";
  refs.list.insertAdjacentHTML("beforeend", lis.join(""));
};

const addItem = (e) => {
  e.preventDefault();

  const { value } = e.target.elements.text;
  const playload = {
    text: value,
    isDone: false,
  };

  refs.form.reset();
  items.push(playload);
  render();
};

// run
render();

// items.push("item 4");
// render();

// add event listeners
refs.form.addEventListener("submit", addItem);
