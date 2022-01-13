"use strict";

const options = {
  name: "test",
  width: 1024,
  height: 1024,
  colors: {
    border: "black",
    bg: "red",
  },
  makeTest: function () {
    console.log("Test");
  },
};

options.makeTest();

console.log(options.name);

delete options.name;

console.log(options);

for (let key in options) {
  console.log(`Property ${key} has value ${options[key]}`);
}

for (const key in options) {
  if (typeof options[key] === "object") {
    for (let i in options[key]) {
      console.log(`Property ${i} has value ${options[key][i]}`);
    }
  } else {
    console.log(`Property ${key} has value ${options[key]}`);
  }
}

console.log(Object.keys(options));
console.log(Object.keys(options).length);
options.makeTest();
