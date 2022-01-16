"use strict";

let a = 5,
  b = a;
b = b + 5;

console.log(b);
console.log(a);

const obj = {
  a: 5,
  b: 1,
};

const copy = obj;

copy.a = 10;

console.log(copy);
console.log(obj);

function copyObj(mainObj) {
  let objCopy = {};
  let key;
  for (key in mainObj) {
    objCopy[key] = mainObj[key];
  }
  return objCopy;
}

const numbers = {
  a: 2,
  b: 4,
  c: {
    x: 3,
    y: 6,
  },
};

const newNumbers = copyObj(numbers);
console.log(numbers);
console.log(newNumbers);

newNumbers.a = 92;

console.log(numbers);
console.log(newNumbers);

newNumbers.c.x = 111;

console.log(numbers);
console.log(newNumbers);

const add = {
  d: 13,
  e: 98,
};

console.log(Object.assign(numbers, add));
