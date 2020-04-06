"use strict";

let counterValue = 0;

function handleDecrement(e) {
  counterValue -= 1;
  document.querySelector("#value").textContent = counterValue;
}

document
  .querySelector('#counter button[data-action="decrement"]')
  .addEventListener("click", handleDecrement);

function handleIncrement(e) {
  counterValue += 1;
  document.querySelector("#value").textContent = counterValue;
}

document
  .querySelector('#counter button[data-action="increment"]')
  .addEventListener("click", handleIncrement);
