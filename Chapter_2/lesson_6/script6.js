"use strict";

const arr = [1, 2, 4, 5, 6];

let a = arr.pop();
console.log("a =", a, "; arr: ", arr);

arr.push(8);
console.log(arr);

console.log("********************");

for (const iterator of arr) {
  console.log(iterator);
}

arr.forEach(function (item, i, arr) {
  console.log(`${i}: ${item} inside array ${arr}`);
});
