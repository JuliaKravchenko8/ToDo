import { getItemTemplate } from "./getItemTemplate.js";
import { items } from "./items.js";

const refs = {
  list: document.querySelector(".list"),
  form: document.querySelector(".form"),
  myButton: document.querySelector(".myButton"),
};

const render = () => {
  const lis = items.map(getItemTemplate);

  refs.list.innerHTML = "";
  refs.list.insertAdjacentHTML("beforeend", lis.join(""));
};

const addItem = (text) => {
  const playload = {
    text,
    isDone: false,
  };

  items.push(playload);
};

const handleSubmit = (e) => {
  const { value } = e.target.elements.text;

  e.preventDefault();
  addItem(value);
  render();
  refs.form.reset();
};

// run
render();

// items.push("item 4");
// render();

// add event listeners
refs.form.addEventListener("submit", handleSubmit);

// <a class="link" href="google.com">GOOGLE</a>;

// const body = document.querySelector("body");
// const link = document.createElement("a");
// link.href = "https://google.com";
// link.textContent = "Google";
// link.classList.add("link");

// console.log(link.outerHTML);
