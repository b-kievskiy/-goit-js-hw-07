"use strict";

const input = document.querySelector("#font-size-control");
const span = document.querySelector("#text");

input.addEventListener("input", e => {
  span.setAttribute("style", `font-size:${e.currentTarget.value}px;`);
});
