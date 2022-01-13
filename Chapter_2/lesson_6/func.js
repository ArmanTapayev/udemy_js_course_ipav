"use strict";

let num = 20;

function showFirstMessage() {
  console.log("Hello Armani!");
  num = 13;
}

showFirstMessage();
console.log(num);

function cals(a, b) {
  return a + b;
}

console.log(cals(5, 6));

const logger = function () {
  console.log("Hi!");
};

logger();

const calc = (a, b) => a + b;

console.log(cals(2, 4));
