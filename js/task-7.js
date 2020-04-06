"use strict";

const input = document.querySelector("#font-size-control");
const span = document.querySelector("#text");

input.addEventListener("input", handleInput);

function handleInput(e) {
  span.setAttribute("style", `font-size:${e.currentTarget.value}px;`);
}
