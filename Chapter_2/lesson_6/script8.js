"use strict";

const oldArray = ["a", "b", "c"];
const newArray = oldArray.slice();

newArray[1] = "sdfsdf";
console.log(newArray);
console.log(oldArray);

const video = ["youtube", "vimeo", "rutube"],
  blogs = ["wordpress", "livejournal", "blogger"],
  internet = [...video, ...blogs, "vk", "facebook"];

console.log(internet);

function log(a, b, c) {
  console.log(a);
  console.log(b);
  console.log(c);
}

const num = [3, 4, 5];

log(...num);

const q = {
  one: 1,
  two: 2,
};

const newObj = { ...q };
console.log(newObj);
