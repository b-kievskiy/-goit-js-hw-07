"use strict";

const ingredients = [
  "Картошка",
  "Грибы",
  "Чеснок",
  "Помидоры",
  "Зелень",
  "Приправы"
];

const ingredientsItems = ingredients.map(ingredient => {
  const createItemLi = document.createElement("li");
  createItemLi.textContent = ingredient;
  return createItemLi;
});

document.querySelector("#ingredients").append(...ingredientsItems);
