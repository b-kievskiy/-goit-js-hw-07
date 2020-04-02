"use strict";

const input = document.querySelector("#name-input");
const output = document.querySelector("#name-output");

input.addEventListener("input", e => {
  if (event.currentTarget.value === "") {
    output.textContent = "незнакомец";
  } else {
    output.textContent = event.currentTarget.value;
  }
});
