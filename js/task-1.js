"use strict";
// const firstCat = document.querySelectorAll(".item")[0].children[0].innerText;
// const firstCatLength = document.querySelectorAll(".item")[0].children[1]
//   .children.length;

// const secondCat = document.querySelectorAll(".item")[1].children[0].innerText;
// const secondCatLength = document.querySelectorAll(".item")[1].children[1]
//   .children.length;

// const lastCat = document.querySelectorAll(".item")[2].children[0].innerText;
// const lastCatLength = document.querySelectorAll(".item")[2].children[1].children
//   .length;

// console.log(`Категория: "${firstCat}". Количество элементов ${firstCatLength}`);
// console.log(`Категория: "${secondCat}". Количество элементов ${secondCatLength}`);
// console.log(`Категория: "${lastCat}". Количество элементов ${lastCatLength}`);

const firstCat = document.querySelectorAll(".item h2");
const firstCatLength = document.querySelectorAll(".item ul");

console.log(
  `Категория: "${firstCat[0].innerText}". Количество элементов ${firstCatLength[0].children.length}`
);

console.log(
  `Категория: "${firstCat[1].innerText}". Количество элементов ${firstCatLength[1].children.length}`
);

console.log(
  `Категория: "${firstCat[2].innerText}". Количество элементов ${firstCatLength[2].children.length}`
);
